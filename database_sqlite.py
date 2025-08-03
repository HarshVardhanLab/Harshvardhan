import sqlite3
import logging
from datetime import datetime
import os
from config import get_config

logger = logging.getLogger(__name__)

class SQLiteDatabaseManager:
    def __init__(self):
        self.config = get_config()
        self.db_path = os.path.join(os.path.dirname(__file__), 'portfolio.db')
        self.init_database()
    
    def init_database(self):
        """Initialize SQLite database and create tables"""
        try:
            with sqlite3.connect(self.db_path) as conn:
                cursor = conn.cursor()
                
                # Create messages table
                cursor.execute('''
                    CREATE TABLE IF NOT EXISTS messages (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        name TEXT NOT NULL,
                        email TEXT NOT NULL,
                        message TEXT NOT NULL,
                        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
                        read BOOLEAN DEFAULT 0
                    )
                ''')
                
                # Create indexes for better performance
                cursor.execute('CREATE INDEX IF NOT EXISTS idx_timestamp ON messages(timestamp DESC)')
                cursor.execute('CREATE INDEX IF NOT EXISTS idx_email ON messages(email)')
                cursor.execute('CREATE INDEX IF NOT EXISTS idx_read ON messages(read)')
                
                conn.commit()
                logger.info("SQLite database initialized successfully")
                
        except Exception as e:
            logger.error(f"Failed to initialize SQLite database: {e}")
            raise
    
    def save_message(self, name, email, message):
        """Save a contact form message to SQLite"""
        try:
            with sqlite3.connect(self.db_path) as conn:
                cursor = conn.cursor()
                cursor.execute('''
                    INSERT INTO messages (name, email, message, timestamp, read)
                    VALUES (?, ?, ?, ?, ?)
                ''', (name, email, message, datetime.utcnow(), False))
                
                message_id = cursor.lastrowid
                conn.commit()
                logger.info(f"Message saved with ID: {message_id}")
                return str(message_id)
                
        except Exception as e:
            logger.error(f"Error saving message: {e}")
            raise
    
    def get_all_messages(self, limit=50):
        """Get all messages, ordered by timestamp (newest first)"""
        try:
            with sqlite3.connect(self.db_path) as conn:
                conn.row_factory = sqlite3.Row  # Enable column access by name
                cursor = conn.cursor()
                
                cursor.execute('''
                    SELECT id, name, email, message, timestamp, read
                    FROM messages
                    ORDER BY timestamp DESC
                    LIMIT ?
                ''', (limit,))
                
                messages = []
                for row in cursor.fetchall():
                    message = {
                        '_id': str(row['id']),
                        'name': row['name'],
                        'email': row['email'],
                        'message': row['message'],
                        'timestamp': row['timestamp'],
                        'read': bool(row['read'])
                    }
                    messages.append(message)
                
                return messages
                
        except Exception as e:
            logger.error(f"Error retrieving messages: {e}")
            raise
    
    def get_unread_messages(self):
        """Get unread messages"""
        try:
            with sqlite3.connect(self.db_path) as conn:
                conn.row_factory = sqlite3.Row
                cursor = conn.cursor()
                
                cursor.execute('''
                    SELECT id, name, email, message, timestamp, read
                    FROM messages
                    WHERE read = 0
                    ORDER BY timestamp DESC
                ''')
                
                messages = []
                for row in cursor.fetchall():
                    message = {
                        '_id': str(row['id']),
                        'name': row['name'],
                        'email': row['email'],
                        'message': row['message'],
                        'timestamp': row['timestamp'],
                        'read': bool(row['read'])
                    }
                    messages.append(message)
                
                return messages
                
        except Exception as e:
            logger.error(f"Error retrieving unread messages: {e}")
            raise
    
    def mark_as_read(self, message_id):
        """Mark a message as read"""
        try:
            with sqlite3.connect(self.db_path) as conn:
                cursor = conn.cursor()
                cursor.execute('''
                    UPDATE messages
                    SET read = 1
                    WHERE id = ?
                ''', (message_id,))
                
                if cursor.rowcount > 0:
                    conn.commit()
                    logger.info(f"Message {message_id} marked as read")
                    return True
                else:
                    logger.warning(f"Message {message_id} not found or already read")
                    return False
                    
        except Exception as e:
            logger.error(f"Error marking message as read: {e}")
            raise
    
    def delete_message(self, message_id):
        """Delete a message"""
        try:
            with sqlite3.connect(self.db_path) as conn:
                cursor = conn.cursor()
                cursor.execute('DELETE FROM messages WHERE id = ?', (message_id,))
                
                if cursor.rowcount > 0:
                    conn.commit()
                    logger.info(f"Message {message_id} deleted")
                    return True
                else:
                    logger.warning(f"Message {message_id} not found")
                    return False
                    
        except Exception as e:
            logger.error(f"Error deleting message: {e}")
            raise
    
    def get_message_stats(self):
        """Get message statistics"""
        try:
            with sqlite3.connect(self.db_path) as conn:
                cursor = conn.cursor()
                
                # Get total messages
                cursor.execute('SELECT COUNT(*) FROM messages')
                total_messages = cursor.fetchone()[0]
                
                # Get unread messages
                cursor.execute('SELECT COUNT(*) FROM messages WHERE read = 0')
                unread_messages = cursor.fetchone()[0]
                
                return {
                    'total': total_messages,
                    'unread': unread_messages,
                    'read': total_messages - unread_messages
                }
                
        except Exception as e:
            logger.error(f"Error getting message stats: {e}")
            raise
    
    def close(self):
        """Close database connection (not needed for SQLite)"""
        pass

# Global database instance
db_manager = None

def get_db_manager():
    """Get or create database manager instance"""
    global db_manager
    if db_manager is None:
        db_manager = SQLiteDatabaseManager()
    return db_manager 