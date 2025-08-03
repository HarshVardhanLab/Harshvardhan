from flask import Flask, render_template, request, jsonify, session, redirect, url_for
from flask_caching import Cache
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
import os
import json
import logging
from datetime import datetime
import requests
from functools import wraps
from config import get_config
from database_sqlite import get_db_manager

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)

# Load configuration
config = get_config()
app.config.from_object(config)

# Configure cache
cache = Cache(app, config={
    'CACHE_TYPE': config.CACHE_TYPE,
    'CACHE_DEFAULT_TIMEOUT': config.CACHE_DEFAULT_TIMEOUT
})

# Configure rate limiting
limiter = Limiter(
    app=app,
    key_func=get_remote_address,
    default_limits=config.RATELIMIT_DEFAULT.split(',')
)

# Initialize database
try:
    db_manager = get_db_manager()
    logger.info("Database manager initialized successfully")
except Exception as e:
    logger.error(f"Failed to initialize database: {e}")
    logger.info("Application will run without database functionality")
    db_manager = None

# Admin authentication decorator
def admin_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if not session.get('admin_logged_in'):
            return redirect(url_for('admin_login'))
        return f(*args, **kwargs)
    return decorated_function

# Security headers
@app.after_request
def add_security_headers(response):
    for header, value in config.SECURITY_HEADERS.items():
        response.headers[header] = value
    return response

# Analytics tracking
def track_visit(page, user_agent=None, ip=None):
    """Track page visits for analytics"""
    try:
        visit_data = {
            'page': page,
            'timestamp': datetime.now().isoformat(),
            'user_agent': user_agent,
            'ip': ip
        }
        logger.info(f"Page visit: {visit_data}")
        # In production, you might want to store this in a database
    except Exception as e:
        logger.error(f"Error tracking visit: {e}")

# Contact form validation
def validate_contact_form(data):
    """Validate contact form data"""
    errors = []
    
    if not data.get('name') or len(data['name'].strip()) < 2:
        errors.append("Name must be at least 2 characters long")
    
    if not data.get('email') or '@' not in data['email']:
        errors.append("Please provide a valid email address")
    
    if not data.get('message') or len(data['message'].strip()) < 10:
        errors.append("Message must be at least 10 characters long")
    
    return errors

# Main route with caching
@app.route('/')
@cache.cached(timeout=300)  # Cache for 5 minutes
def home():
    """Main portfolio page"""
    user_agent = request.headers.get('User-Agent', '')
    ip = request.remote_addr
    track_visit('home', user_agent, ip)
    
    return render_template("index.html")

# Contact form API endpoint
@app.route('/api/contact', methods=['POST'])
@limiter.limit(config.CONTACT_RATE_LIMIT)  # Rate limit contact submissions
def contact():
    """Handle contact form submissions"""
    try:
        data = request.get_json()
        
        if not data:
            return jsonify({'error': 'No data provided'}), 400
        
        # Validate form data
        errors = validate_contact_form(data)
        if errors:
            return jsonify({'error': '; '.join(errors)}), 400
        
        # Save to database
        if db_manager:
            try:
                message_id = db_manager.save_message(
                    name=data['name'].strip(),
                    email=data['email'].strip(),
                    message=data['message'].strip()
                )
                logger.info(f"Message saved to database with ID: {message_id}")
            except Exception as e:
                logger.error(f"Failed to save message to database: {e}")
                # Continue with external server as fallback
        
        # Forward to external message server (as backup)
        message_data = {
            'name': data['name'].strip(),
            'email': data['email'].strip(),
            'message': data['message'].strip()
        }
        
        try:
            # Send to your existing message server
            response = requests.post(
                config.MESSAGE_SERVER_URL,
                params={'password': config.MESSAGE_SERVER_PASSWORD},
                json=message_data,
                timeout=10
            )
            
            if response.status_code == 200:
                logger.info(f"Message also sent to external server: {data['email']}")
        except Exception as e:
            logger.warning(f"External message server failed: {e}")
        
        # Log successful contact
        logger.info(f"Contact form submitted: {data['email']}")
        return jsonify({'message': 'Message sent successfully!'}), 200
            
    except Exception as e:
        logger.error(f"Unexpected error in contact endpoint: {e}")
        return jsonify({'error': 'Internal server error'}), 500

# Analytics endpoint
@app.route('/api/analytics')
def analytics():
    """Get basic analytics data"""
    try:
        # In a real app, you'd fetch this from a database
        analytics_data = {
            'total_visits': 0,  # Would be fetched from database
            'unique_visitors': 0,
            'popular_pages': ['home', 'projects', 'contact'],
            'last_updated': datetime.now().isoformat()
        }
        return jsonify(analytics_data)
    except Exception as e:
        logger.error(f"Analytics error: {e}")
        return jsonify({'error': 'Analytics unavailable'}), 500

# Health check endpoint
@app.route('/health')
def health_check():
    """Health check endpoint for monitoring"""
    return jsonify({
        'status': 'healthy',
        'timestamp': datetime.now().isoformat(),
        'version': '1.0.0'
    })

# Sitemap endpoint
@app.route('/sitemap.xml')
def sitemap():
    """Generate sitemap for SEO"""
    sitemap = f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://harshvardhan-mu.vercel.app/</loc>
        <lastmod>{datetime.now().strftime('%Y-%m-%d')}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
</urlset>"""
    return app.response_class(sitemap, mimetype='application/xml')

# Robots.txt endpoint
@app.route('/robots.txt')
def robots():
    """Generate robots.txt for SEO"""
    robots_content = """User-agent: *
Allow: /

Sitemap: https://harshvardhan-mu.vercel.app/sitemap.xml"""
    return app.response_class(robots_content, mimetype='text/plain')

# Error handlers
@app.errorhandler(404)
def not_found(error):
    """Handle 404 errors"""
    return render_template('404.html'), 404

@app.errorhandler(500)
def internal_error(error):
    """Handle 500 errors"""
    logger.error(f"Internal server error: {error}")
    return render_template('500.html'), 500

@app.errorhandler(429)
def too_many_requests(error):
    """Handle rate limit errors"""
    return jsonify({'error': 'Too many requests. Please try again later.'}), 429

# Admin routes
@app.route('/admin/login', methods=['GET', 'POST'])
def admin_login():
    """Admin login page"""
    if request.method == 'POST':
        password = request.form.get('password')
        if password == config.ADMIN_PASSWORD:
            session['admin_logged_in'] = True
            session.permanent = True
            return redirect(url_for('admin_dashboard'))
        else:
            return render_template('admin_login.html', error='Invalid password')
    
    return render_template('admin_login.html')

@app.route('/admin/logout')
def admin_logout():
    """Admin logout"""
    session.pop('admin_logged_in', None)
    return redirect(url_for('admin_login'))

@app.route('/admin')
@admin_required
def admin_dashboard():
    """Admin dashboard"""
    if not db_manager:
        return render_template('admin_dashboard.html', error='Database not available')
    
    try:
        stats = db_manager.get_message_stats()
        messages = db_manager.get_all_messages(limit=10)
        return render_template('admin_dashboard.html', stats=stats, messages=messages)
    except Exception as e:
        logger.error(f"Error loading admin dashboard: {e}")
        return render_template('admin_dashboard.html', error='Failed to load data')

@app.route('/api/admin/messages')
@admin_required
def admin_messages():
    """Get all messages for admin"""
    if not db_manager:
        return jsonify({'error': 'Database not available'}), 500
    
    try:
        messages = db_manager.get_all_messages()
        return jsonify({'messages': messages})
    except Exception as e:
        logger.error(f"Error retrieving messages: {e}")
        return jsonify({'error': 'Failed to retrieve messages'}), 500

@app.route('/api/admin/messages/<message_id>/read', methods=['POST'])
@admin_required
def mark_message_read(message_id):
    """Mark a message as read"""
    if not db_manager:
        return jsonify({'error': 'Database not available'}), 500
    
    try:
        success = db_manager.mark_as_read(message_id)
        if success:
            return jsonify({'message': 'Message marked as read'})
        else:
            return jsonify({'error': 'Message not found'}), 404
    except Exception as e:
        logger.error(f"Error marking message as read: {e}")
        return jsonify({'error': 'Failed to mark message as read'}), 500

@app.route('/api/admin/messages/<message_id>', methods=['DELETE'])
@admin_required
def delete_message(message_id):
    """Delete a message"""
    if not db_manager:
        return jsonify({'error': 'Database not available'}), 500
    
    try:
        success = db_manager.delete_message(message_id)
        if success:
            return jsonify({'message': 'Message deleted'})
        else:
            return jsonify({'error': 'Message not found'}), 404
    except Exception as e:
        logger.error(f"Error deleting message: {e}")
        return jsonify({'error': 'Failed to delete message'}), 500

@app.route('/api/admin/stats')
@admin_required
def admin_stats():
    """Get message statistics"""
    if not db_manager:
        return jsonify({'error': 'Database not available'}), 500
    
    try:
        stats = db_manager.get_message_stats()
        return jsonify(stats)
    except Exception as e:
        logger.error(f"Error getting stats: {e}")
        return jsonify({'error': 'Failed to get statistics'}), 500

# API documentation endpoint
@app.route('/api/docs')
def api_docs():
    """API documentation"""
    docs = {
        'endpoints': {
            '/api/contact': {
                'method': 'POST',
                'description': 'Submit contact form',
                'rate_limit': '5 per minute',
                'body': {
                    'name': 'string (required)',
                    'email': 'string (required)',
                    'message': 'string (required)'
                }
            },
            '/api/analytics': {
                'method': 'GET',
                'description': 'Get analytics data',
                'rate_limit': '100 per hour'
            },
            '/health': {
                'method': 'GET',
                'description': 'Health check endpoint'
            },
            '/admin': {
                'method': 'GET',
                'description': 'Admin dashboard (requires authentication)'
            },
            '/api/admin/messages': {
                'method': 'GET',
                'description': 'Get all messages (admin only)'
            }
        }
    }
    return jsonify(docs)

# Development routes (only in debug mode)
if app.debug:
    @app.route('/debug/info')
    def debug_info():
        """Debug information endpoint"""
        return jsonify({
            'app_name': 'Harsh Vardhan Portfolio',
            'environment': app.config.get('ENV', 'development'),
            'debug': app.debug,
            'cache_type': config.CACHE_TYPE,  # <-- FIXED HERE
            'rate_limiting': True
        })

if __name__ == "__main__":
    # Run with enhanced configuration
    app.run(
        host='0.0.0.0',
        port=int(os.environ.get('PORT', 8000)),
        debug=os.environ.get('FLASK_ENV') == 'development'
    )
