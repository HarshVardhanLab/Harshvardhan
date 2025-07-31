# 🚀 Vercel Deployment Guide

Complete guide for deploying your Flask portfolio to Vercel with optimized performance and security.

## 📋 Prerequisites

1. **Node.js** (for Vercel CLI)
2. **Python 3.9+**
3. **Git** repository
4. **Vercel account** (free at [vercel.com](https://vercel.com))

## 🔧 Quick Deployment

### Method 1: Using the Deployment Script

```bash
# Make script executable (if not already)
chmod +x vercel-deploy.sh

# Run deployment script
./vercel-deploy.sh
```

### Method 2: Manual Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

## 📁 Project Structure for Vercel

```
My Portfolio/
├── app.py                 # Main Flask app
├── config.py             # Configuration
├── requirements.txt      # Python dependencies
├── vercel.json          # Vercel configuration
├── .vercelignore        # Files to exclude
├── templates/           # HTML templates
│   ├── index.html
│   ├── 404.html
│   └── 500.html
└── static/              # Static assets
    ├── assets/
    ├── manifest.json
    └── sw.js
```

## ⚙️ Configuration Details

### vercel.json Features

#### 🚀 **Performance Optimizations**
- **Runtime**: Python 3.9
- **Max Lambda Size**: 15MB
- **Function Duration**: 30 seconds max
- **Region**: Mumbai (bom1) for better latency in India

#### 🛡️ **Security Headers**
- **X-Content-Type-Options**: nosniff
- **X-Frame-Options**: DENY
- **X-XSS-Protection**: 1; mode=block
- **Referrer-Policy**: strict-origin-when-cross-origin
- **Permissions-Policy**: Restricted camera/microphone/geolocation

#### 📦 **Caching Strategy**
- **API Routes**: No cache (always fresh)
- **Static Files**: 1 year cache (immutable)
- **Main Pages**: 5 minutes cache
- **SEO Files**: 1 hour cache (sitemap), 1 day cache (robots.txt)

#### 🎯 **Route Optimization**
- **API Routes**: `/api/*` with security headers
- **Health Check**: `/health` with no cache
- **SEO Files**: `/sitemap.xml`, `/robots.txt` with proper content types
- **Static Assets**: `/static/*` with long-term caching
- **Main Pages**: All other routes with balanced caching

## 🔍 Testing Your Deployment

### 1. **Health Check**
```bash
curl https://your-app.vercel.app/health
```
Expected: `{"status": "healthy", "timestamp": "...", "version": "1.0.0"}`

### 2. **API Documentation**
```bash
curl https://your-app.vercel.app/api/docs
```
Expected: JSON with API endpoint documentation

### 3. **Contact Form Test**
```bash
curl -X POST https://your-app.vercel.app/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Hello"}'
```

### 4. **SEO Files**
```bash
# Sitemap
curl https://your-app.vercel.app/sitemap.xml

# Robots.txt
curl https://your-app.vercel.app/robots.txt
```

### 5. **Performance Test**
```bash
# Test main page
curl -I https://your-app.vercel.app/

# Check headers
curl -I https://your-app.vercel.app/static/assets/harshvardhan.jpeg
```

## 🔧 Environment Variables

Set these in your Vercel dashboard:

```bash
FLASK_ENV=production
SECRET_KEY=your-secure-secret-key-here
PYTHONPATH=.
```

## 🚨 Troubleshooting

### Common Issues

#### 1. **Import Errors**
```bash
# Check if all dependencies are in requirements.txt
pip freeze > requirements.txt
```

#### 2. **Function Timeout**
- Increase `maxDuration` in vercel.json
- Optimize your Flask app
- Use caching for heavy operations

#### 3. **Build Failures**
```bash
# Test locally first
python app.py

# Check Python version
python --version
```

#### 4. **CORS Issues**
- Add CORS headers in Flask app
- Check Content Security Policy in vercel.json

#### 5. **Static Files Not Loading**
- Ensure files are in `/static/` directory
- Check `.vercelignore` doesn't exclude needed files
- Verify file paths in HTML

### Debug Commands

```bash
# Check Vercel CLI version
vercel --version

# List deployments
vercel ls

# View deployment logs
vercel logs your-app-name

# Test locally
vercel dev
```

## 📊 Performance Monitoring

### Vercel Analytics
- **Real-time Analytics**: Available in Vercel dashboard
- **Function Logs**: Monitor API performance
- **Edge Network**: Global CDN performance

### Custom Monitoring
```bash
# Health check monitoring
curl -f https://your-app.vercel.app/health || echo "Health check failed"

# API response time
time curl https://your-app.vercel.app/api/analytics
```

## 🔄 Continuous Deployment

### GitHub Integration
1. Connect your GitHub repository to Vercel
2. Enable automatic deployments
3. Set up branch protection rules

### Manual Deployment
```bash
# Deploy latest changes
vercel --prod

# Deploy to preview
vercel
```

## 🎯 Best Practices

### 1. **Performance**
- ✅ Use caching for static assets
- ✅ Optimize images (WebP format)
- ✅ Minimize JavaScript and CSS
- ✅ Use CDN for external resources

### 2. **Security**
- ✅ Set secure environment variables
- ✅ Use HTTPS only
- ✅ Implement rate limiting
- ✅ Validate all inputs

### 3. **SEO**
- ✅ Provide sitemap.xml
- ✅ Include robots.txt
- ✅ Use proper meta tags
- ✅ Implement structured data

### 4. **Monitoring**
- ✅ Set up health checks
- ✅ Monitor error rates
- ✅ Track performance metrics
- ✅ Set up alerts

## 📞 Support

If you encounter issues:

1. **Check Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
2. **Flask Documentation**: [flask.palletsprojects.com](https://flask.palletsprojects.com)
3. **Vercel Community**: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

## 🎉 Success Checklist

- ✅ App deploys without errors
- ✅ All routes work correctly
- ✅ Static files load properly
- ✅ Contact form submits successfully
- ✅ Health check returns 200
- ✅ SEO files are accessible
- ✅ Performance is acceptable
- ✅ Security headers are present

---

**Happy Deploying! 🚀** 