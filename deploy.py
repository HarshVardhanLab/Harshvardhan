#!/usr/bin/env python3
"""
Deployment script for Harsh Vardhan Portfolio
"""

import os
import sys
import subprocess
import requests
import time
from pathlib import Path
from app import app  # <-- Add this import at the top, after other imports

def run_command(command, description=""):
    """Run a command and handle errors"""
    print(f"🔄 {description}...")
    try:
        result = subprocess.run(command, shell=True, check=True, capture_output=True, text=True)
        print(f"✅ {description} completed successfully")
        return result.stdout
    except subprocess.CalledProcessError as e:
        print(f"❌ {description} failed: {e}")
        print(f"Error output: {e.stderr}")
        return None

def check_dependencies():
    """Check if all required dependencies are installed"""
    print("🔍 Checking dependencies...")
    
    required_packages = [
        'flask',
        'flask-caching',
        'flask-limiter',
        'requests'
    ]
    
    missing_packages = []
    for package in required_packages:
        try:
            __import__(package.replace('-', '_'))
        except ImportError:
            missing_packages.append(package)
    
    if missing_packages:
        print(f"❌ Missing packages: {', '.join(missing_packages)}")
        print("Run: pip install -r requirements.txt")
        return False
    
    print("✅ All dependencies are installed")
    return True

def run_tests():
    """Run basic tests"""
    print("🧪 Running tests...")
    
    # Test imports
    try:
        from app import app
        print("✅ App imports successfully")
    except Exception as e:
        print(f"❌ App import failed: {e}")
        return False
    
    # Test configuration
    try:
        from config import get_config
        config = get_config()
        print("✅ Configuration loaded successfully")
    except Exception as e:
        print(f"❌ Configuration failed: {e}")
        return False
    
    return True

def health_check(url="http://localhost:5000"):
    """Check if the app is running"""
    print(f"🏥 Checking health at {url}...")
    
    try:
        response = requests.get(f"{url}/health", timeout=5)
        if response.status_code == 200:
            print("✅ Health check passed")
            return True
        else:
            print(f"❌ Health check failed: {response.status_code}")
            return False
    except requests.exceptions.RequestException as e:
        print(f"❌ Health check failed: {e}")
        return False

def start_server():
    """Start the development server"""
    print("🚀 Starting development server...")
    
    # Set environment variables
    os.environ['FLASK_ENV'] = 'development'
    os.environ['FLASK_APP'] = 'app.py'
    
    try:
        # Start the server
        subprocess.run([
            sys.executable, 'app.py'
        ], check=True)
    except KeyboardInterrupt:
        print("\n🛑 Server stopped by user")
    except Exception as e:
        print(f"❌ Failed to start server: {e}")

def main():
    """Main deployment function"""
    print("🎯 Harsh Vardhan Portfolio - Deployment Script")
    print("=" * 50)
    
    # Check dependencies
    if not check_dependencies():
        sys.exit(1)
    
    # Run tests
    if not run_tests():
        sys.exit(1)
    
    print("\n🎉 All checks passed! Starting server...")
    print("📝 Available endpoints:")
    print("   - / (Main portfolio page)")
    print("   - /api/contact (Contact form)")
    print("   - /api/analytics (Analytics)")
    print("   - /health (Health check)")
    print("   - /sitemap.xml (SEO sitemap)")
    print("   - /robots.txt (SEO robots)")
    print("   - /api/docs (API documentation)")
    
    if app.debug:
        print("   - /debug/info (Debug information)")
    
    print("\n🌐 Server will be available at: http://localhost:5000")
    print("🛑 Press Ctrl+C to stop the server")
    
    # Start the server
    start_server()

if __name__ == "__main__":
    main()