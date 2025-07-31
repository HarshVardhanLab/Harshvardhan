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
        
        # Forward to external message server
        message_data = {
            'name': data['name'].strip(),
            'email': data['email'].strip(),
            'message': data['message'].strip()
        }
        
        # Send to your existing message server
        response = requests.post(
            config.MESSAGE_SERVER_URL,
            params={'password': config.MESSAGE_SERVER_PASSWORD},
            json=message_data,
            timeout=10
        )
        
        if response.status_code == 200:
            # Log successful contact
            logger.info(f"Contact form submitted: {data['email']}")
            return jsonify({'message': 'Message sent successfully!'}), 200
        else:
            logger.error(f"Message server error: {response.status_code}")
            return jsonify({'error': 'Failed to send message. Please try again.'}), 500
            
    except requests.exceptions.Timeout:
        logger.error("Message server timeout")
        return jsonify({'error': 'Server timeout. Please try again later.'}), 504
    except requests.exceptions.RequestException as e:
        logger.error(f"Message server error: {e}")
        return jsonify({'error': 'Network error. Please try again later.'}), 503
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
            'cache_type': cache_config['CACHE_TYPE'],
            'rate_limiting': True
        })

if __name__ == "__main__":
    # Run with enhanced configuration
    app.run(
        host='0.0.0.0',
        port=int(os.environ.get('PORT', 5000)),
        debug=os.environ.get('FLASK_ENV') == 'development'
    )
