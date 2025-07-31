#!/bin/bash

# Vercel Deployment Script for Harsh Vardhan Portfolio
# This script helps deploy and test the Flask app on Vercel

echo "🚀 Vercel Deployment Script for Harsh Vardhan Portfolio"
echo "=================================================="

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Check if we're in the right directory
if [ ! -f "app.py" ]; then
    echo "❌ app.py not found. Please run this script from the project root."
    exit 1
fi

# Check if requirements.txt exists
if [ ! -f "requirements.txt" ]; then
    echo "❌ requirements.txt not found."
    exit 1
fi

# Check if vercel.json exists
if [ ! -f "vercel.json" ]; then
    echo "❌ vercel.json not found."
    exit 1
fi

echo "✅ All required files found"

# Test the app locally first
echo "🧪 Testing app locally..."
python -c "
import sys
try:
    from app import app
    print('✅ App imports successfully')
except Exception as e:
    print(f'❌ App import failed: {e}')
    sys.exit(1)
"

if [ $? -ne 0 ]; then
    echo "❌ App test failed. Please fix the issues before deploying."
    exit 1
fi

# Check if user is logged in to Vercel
echo "🔐 Checking Vercel authentication..."
vercel whoami &> /dev/null
if [ $? -ne 0 ]; then
    echo "⚠️  Not logged in to Vercel. Please login:"
    vercel login
fi

# Deploy to Vercel
echo "🚀 Deploying to Vercel..."
vercel --prod

if [ $? -eq 0 ]; then
    echo "✅ Deployment successful!"
    echo ""
    echo "📝 Next steps:"
    echo "1. Check your Vercel dashboard for the deployment URL"
    echo "2. Test the following endpoints:"
    echo "   - Main site: https://your-app.vercel.app"
    echo "   - Health check: https://your-app.vercel.app/health"
    echo "   - API docs: https://your-app.vercel.app/api/docs"
    echo "   - Sitemap: https://your-app.vercel.app/sitemap.xml"
    echo "   - Robots: https://your-app.vercel.app/robots.txt"
    echo ""
    echo "🔧 To update your deployment:"
    echo "   git push (if connected to GitHub)"
    echo "   or"
    echo "   vercel --prod"
else
    echo "❌ Deployment failed. Check the error messages above."
    exit 1
fi 