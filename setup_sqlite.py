#!/usr/bin/env python3
"""
SQLite Setup Script for Portfolio Contact Form
This script initializes the SQLite database for storing contact form messages.
"""

import os
import sys
from database_sqlite import SQLiteDatabaseManager

def main():
    print("🚀 SQLite Database Setup for Portfolio Contact Form")
    print("=" * 55)
    
    try:
        # Initialize database
        print("📊 Initializing SQLite database...")
        db_manager = SQLiteDatabaseManager()
        
        # Test database operations
        print("🧪 Testing database operations...")
        
        # Test saving a message
        message_id = db_manager.save_message(
            name="Test User",
            email="test@example.com",
            message="This is a test message from the setup script."
        )
        print(f"✅ Test message saved with ID: {message_id}")
        
        # Test retrieving messages
        messages = db_manager.get_all_messages()
        print(f"✅ Retrieved {len(messages)} messages from database")
        
        # Test statistics
        stats = db_manager.get_message_stats()
        print(f"✅ Database statistics: {stats}")
        
        print("\n🎉 SQLite database setup completed successfully!")
        print("\n📝 Database file location:")
        print(f"   {os.path.abspath('portfolio.db')}")
        
        print("\n💡 Next steps:")
        print("1. Run your application: python app.py")
        print("2. Visit: http://localhost:8000/admin")
        print("3. Login with password: admin123")
        print("4. View and manage your contact form messages")
        
    except Exception as e:
        print(f"❌ Setup failed: {e}")
        return False
    
    return True

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1) 