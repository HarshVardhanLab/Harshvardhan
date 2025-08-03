#!/usr/bin/env python3
"""
Test script for SQLite integration and admin functionality
"""

import requests
import json
from datetime import datetime

def test_contact_form(base_url):
    """Test contact form submission"""
    print("🧪 Testing contact form submission...")
    
    test_data = {
        "name": "Test User",
        "email": "test@example.com",
        "message": "This is a test message from the SQLite test script."
    }
    
    try:
        response = requests.post(f"{base_url}/api/contact", json=test_data)
        if response.status_code == 200:
            print("✅ Contact form submission successful!")
            return True
        else:
            print(f"❌ Contact form submission failed: {response.status_code}")
            print(f"Response: {response.text}")
            return False
    except Exception as e:
        print(f"❌ Contact form test failed: {e}")
        return False

def test_admin_login(base_url, password):
    """Test admin login"""
    print("🧪 Testing admin login...")
    
    try:
        # Test login
        login_data = {"password": password}
        response = requests.post(f"{base_url}/admin/login", data=login_data, allow_redirects=False)
        
        if response.status_code == 302:  # Redirect to dashboard
            print("✅ Admin login successful!")
            return True
        else:
            print(f"❌ Admin login failed: {response.status_code}")
            return False
    except Exception as e:
        print(f"❌ Admin login test failed: {e}")
        return False

def test_admin_api(base_url, password):
    """Test admin API endpoints"""
    print("🧪 Testing admin API endpoints...")
    
    try:
        # Create a session to maintain login state
        session = requests.Session()
        
        # Login
        login_data = {"password": password}
        session.post(f"{base_url}/admin/login", data=login_data)
        
        # Test messages endpoint
        response = session.get(f"{base_url}/api/admin/messages")
        if response.status_code == 200:
            messages = response.json()
            print(f"✅ Admin messages API working! Found {len(messages.get('messages', []))} messages")
        else:
            print(f"❌ Admin messages API failed: {response.status_code}")
            return False
        
        # Test stats endpoint
        response = session.get(f"{base_url}/api/admin/stats")
        if response.status_code == 200:
            stats = response.json()
            print(f"✅ Admin stats API working! Total: {stats.get('total', 0)} messages")
        else:
            print(f"❌ Admin stats API failed: {response.status_code}")
            return False
        
        return True
    except Exception as e:
        print(f"❌ Admin API test failed: {e}")
        return False

def main():
    print("🧪 SQLite Integration Test Suite")
    print("=" * 50)
    
    # Get base URL
    base_url = input("Enter your application URL (or press Enter for http://localhost:8000): ").strip()
    if not base_url:
        base_url = "http://localhost:8000"
    
    # Get admin password
    admin_password = input("Enter admin password (or press Enter for default 'admin123'): ").strip()
    if not admin_password:
        admin_password = "admin123"
    
    print(f"\nTesting application at: {base_url}")
    print("=" * 50)
    
    # Test health endpoint
    try:
        response = requests.get(f"{base_url}/health")
        if response.status_code == 200:
            print("✅ Application is running!")
        else:
            print(f"❌ Application health check failed: {response.status_code}")
            return
    except Exception as e:
        print(f"❌ Cannot connect to application: {e}")
        return
    
    # Run tests
    tests = [
        ("Contact Form", lambda: test_contact_form(base_url)),
        ("Admin Login", lambda: test_admin_login(base_url, admin_password)),
        ("Admin API", lambda: test_admin_api(base_url, admin_password))
    ]
    
    results = []
    for test_name, test_func in tests:
        print(f"\n--- {test_name} Test ---")
        result = test_func()
        results.append((test_name, result))
    
    # Summary
    print("\n" + "=" * 50)
    print("📊 Test Results Summary")
    print("=" * 50)
    
    passed = 0
    for test_name, result in results:
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{test_name}: {status}")
        if result:
            passed += 1
    
    print(f"\nOverall: {passed}/{len(results)} tests passed")
    
    if passed == len(results):
        print("🎉 All tests passed! Your SQLite integration is working correctly.")
        print("\n💡 Next steps:")
        print("1. Visit your admin panel at: " + base_url + "/admin")
        print("2. Login with your admin password")
        print("3. View and manage your contact form messages")
        print("4. Test the contact form on your main page")
    else:
        print("⚠️  Some tests failed. Check your configuration and try again.")

if __name__ == "__main__":
    main() 