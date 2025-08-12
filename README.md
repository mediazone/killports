# KillPorts Website

🎯 **Free macOS Port Management Tool**

KillPorts is a lightweight MenuBar utility for developers to instantly kill stuck network ports. Perfect for React, Node.js, Rails, Django, and other development servers.

## 🌟 Features

- **One-click port management** from your MenuBar
- **Visual process identification** with app icons
- **Safe termination** of network processes  
- **macOS 13.0+ support** with Apple notarization
- **Completely free** and open source

## 🚀 Quick Start

1. **Download** the latest version from [KillPorts.dev](https://killports.dev)
2. **Install** the `.pkg` file 
3. **Launch** KillPorts from Applications
4. **Click** the MenuBar icon to manage ports

## 📧 Email Integration

This website includes email capture for download links via secure API integration:

- Frontend calls **WebApi8 MediaZone** backend
- Backend uses **Azure Key Vault** for secure API keys
- Email service via **Resend** with professional templates
- **No API keys exposed** in frontend code

## 🔐 Security

- ✅ No hardcoded API keys
- ✅ Azure Key Vault integration
- ✅ Rate limiting and validation
- ✅ CORS protection
- ✅ Input sanitization

## 🏗️ Architecture

```
Frontend (Static) → WebApi8 MediaZone → Azure Key Vault → Resend API
```

## 📦 Repository Structure

```
/
├── index.html          # Main website
├── assets/            # Images, icons, etc.
├── CNAME             # GitHub Pages domain
└── README.md         # This file
```

## 🌍 Hosting

- **Frontend**: GitHub Pages at [killports.dev](https://killports.dev)
- **Backend**: WebApi8 MediaZone with Azure hosting
- **DNS**: Cloudflare with SSL/CDN

## 🔧 Development

This is a static website - no build process required:

```bash
# Serve locally
python3 -m http.server 8000

# Visit http://localhost:8000
```

## 📊 Analytics

Email captures and download requests are tracked via:
- WebApi8 MediaZone analytics endpoints  
- Google Analytics (if configured)
- Azure Application Insights

## 🎯 Download Stats

- **Total Downloads**: Auto-updated via GitHub API
- **Latest Version**: v1.0.5
- **Platform**: macOS 13.0+
- **Size**: 2.1 MB

## 💬 Support

- **Issues**: [GitHub Issues](https://github.com/mediazone/killports/issues)
- **Website**: [killports.dev](https://killports.dev)
- **Email**: Contact via website form

---

**Built with ❤️ by [Mediazone](https://mediazone.nl)** 

*Secure, Simple, Effective* 🚀