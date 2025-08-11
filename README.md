# 🔥 KillPorts MenuBar

<div align="center">
  <img src="killportlogo.png" alt="KillPorts - Developer Port Management for macOS" width="400">
</div>

**A sleek macOS MenuBar utility for developers to quickly free up network ports**

![KillPorts Screenshot](screenshots/killports-demo.png)

## ✨ Features

- 🚀 **One-click port killing** - Instantly free up common development ports
- 🎯 **Smart port detection** - Automatically finds processes using specific ports  
- 💻 **Developer-focused** - Pre-configured for React, Node.js, Rails, Laravel, and more
- 🏃‍♂️ **MenuBar integration** - Always accessible from your menu bar
- 🛡️ **Safe & reliable** - Built-in confirmations prevent accidental terminations
- 🎨 **Modern UI** - Clean, Control Center-inspired interface
- ⚡ **Lightning fast** - Written in Swift for optimal performance

## 📥 Download

### Latest Release (v1.0.1)

**[⬇️ Download KillPorts-v1.0.1.pkg](https://github.com/mediazone/killports/releases/download/v1.0.1/KillPorts-v1.0.1.pkg)** (macOS 13.0+)

> 🛡️ **Notarized & Code Signed** - Fully approved by Apple for security and compatibility

### System Requirements

- **macOS 13.0** or later
- **Apple Silicon (M1/M2)** or **Intel** Mac
- Administrator privileges (for process termination)

## 🚀 Quick Start

1. **Download** the installer package from the link above
2. **Double-click** the `.pkg` file to install
3. **Launch** KillPorts from Applications or Spotlight
4. **Grant permissions** when prompted (required for port management)
5. **Click the MenuBar icon** to start managing ports!

## 🎯 Common Use Cases

### Web Development
- **React Dev Server** (port 3000) - Free up stuck development servers
- **Webpack Dev Server** (port 8080) - Clear build tool conflicts  
- **Live Reload** (port 35729) - Reset browser sync connections

### Backend Development  
- **Node.js/Express** (port 3000, 8000) - Kill hanging server processes
- **Ruby on Rails** (port 3000) - Clear Rails server instances
- **Laravel Valet** (port 80, 443) - Manage PHP development servers

### Database & Services
- **Development APIs** (port 4000, 5000) - Reset API server instances
- **Mock Services** (port 8080, 9000) - Clear testing environments

## 🔧 How It Works

KillPorts uses macOS system commands to:

1. **Scan ports** using `lsof` to find listening processes
2. **Identify processes** by PID (Process ID)  
3. **Terminate gracefully** with SIGTERM first, then SIGKILL if needed
4. **Provide feedback** on successful port clearance

## 🛡️ Security & Safety

- ✅ **Apple Notarized** - Verified safe by Apple's security systems
- ✅ **Code Signed** - Authentic software from verified developer
- ✅ **Sandboxing removed** - Required for system-level port management
- ✅ **User confirmations** - Prevents accidental process termination
- ✅ **No data collection** - Completely local operation, no telemetry

## 💡 Pro Tips

- **Save your work** before killing ports - some processes may have unsaved data
- **Check status indicators** - Green = ready, blue = working
- **Use keyboard shortcuts** - Space to activate, Escape to cancel
- **Launch at login** - Toggle in the app footer for convenience

## 🔄 Updates

KillPorts automatically checks for updates. You can also:
- **Check manually** - Visit the [releases page](https://github.com/mediazone/killports/releases)
- **Enable notifications** - Get alerts when new versions are available
- **Auto-update** - Download and install updates automatically

## 🤝 Support

Having issues? We're here to help:

- 📖 **Documentation** - Check our [Wiki](https://github.com/mediazone/killports/wiki)
- 🐛 **Bug Reports** - [Open an issue](https://github.com/mediazone/killports/issues/new?template=bug_report.md)
- 💡 **Feature Requests** - [Request features](https://github.com/mediazone/killports/issues/new?template=feature_request.md)
- 💬 **Discussions** - [Join the community](https://github.com/mediazone/killports/discussions)

## 📄 License

KillPorts is proprietary software developed by Ron Koldeweid bij [Mediazone](https://killports.com).

**Terms of Use:**
- ✅ **Free for personal use** - Individual developers and personal projects
- ✅ **Free for small teams** - Up to 5 developers
- 💰 **Commercial license** - Required for larger organizations
- 🚫 **No redistribution** - Cannot be repackaged or redistributed

## 🏆 Why Choose KillPorts?

### vs Manual Terminal Commands
- ❌ `lsof -ti:3000 | xargs kill -9` - Complex, error-prone
- ✅ **KillPorts** - One click, visual feedback, safe

### vs Other Tools
- 🥱 **Generic process managers** - Complex, overwhelming
- 🚀 **KillPorts** - Developer-focused, port-specific, elegant

### vs Activity Monitor
- 😵 **Activity Monitor** - Hard to find processes by port
- 🎯 **KillPorts** - Port-centric workflow, instant action

---

**Made with ❤️ by developers, for developers**

[🌐 Website](https://killports.dev) • [📧 Contact](mailto:hello@killports.dev) • [🐙 GitHub](https://github.com/mediazone/killports)

---

*KillPorts v1.0.1 - Built for macOS with Swift & SwiftUI*