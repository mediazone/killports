#!/bin/bash

# GitHub Release Script for KillPorts
set -e

VERSION="1.0.0"
REPO="mediazone/killports"
APP_NAME="KillPortsMenuApp"
PKG_NAME="KillPorts-v${VERSION}.pkg"
RELEASE_TAG="v${VERSION}"

echo "🚀 Creating GitHub Release for KillPorts v${VERSION}"

# Step 1: Build production package
echo "📦 Building production package..."
cd ../
./build-for-production.sh

# Step 2: Copy the production package to release directory
echo "📁 Preparing release files..."
cp "KillPortsMenuApp-1.0.0-production.pkg" "Public-Release/${PKG_NAME}"

# Step 3: Create release notes
cat > Public-Release/release-notes-${VERSION}.md << EOF
# 🔥 KillPorts v${VERSION} - Initial Release

**A sleek macOS MenuBar utility for developers to quickly free up network ports**

## ✨ What's New

### 🎯 Core Features
- **One-click port killing** - Instantly free up common development ports
- **Smart port detection** - Automatically finds processes using specific ports
- **Developer-focused presets** - React (3000), Node.js (8000), Rails (3000), Laravel
- **MenuBar integration** - Always accessible, never cluttered

### 🎨 Modern Interface  
- **Control Center-inspired UI** - Clean, familiar macOS design
- **Color-coded port groups** - Visual organization for different frameworks
- **Real-time status updates** - See exactly what's happening
- **Smooth animations** - Polished user experience

### 🛡️ Security & Safety
- **Apple Notarized** - Verified safe by Apple's security systems
- **Code Signed** - Authentic software from verified developer
- **User confirmations** - Prevents accidental process termination
- **No data collection** - Completely local operation

## 🔧 Technical Details

- **Platform:** macOS 13.0+ (Ventura and later)
- **Architecture:** Universal Binary (Apple Silicon + Intel)
- **Size:** 1.7 MB download
- **Language:** Swift + SwiftUI
- **Signing:** Developer ID Application & Installer certificates

## 📥 Installation

1. Download the \`.pkg\` file below
2. Double-click to install
3. Grant administrator permissions when prompted
4. Launch from Applications or Spotlight
5. Look for the red X icon in your MenuBar

## 🎯 Perfect For

- **React Developers** - Kill stuck dev servers on port 3000
- **Node.js Engineers** - Clear Express/API servers instantly  
- **Rails Developers** - Free up Rails server processes
- **Full-Stack Teams** - Manage multiple development environments
- **Anyone tired of** \`lsof -ti:3000 | xargs kill -9\`

## 🚀 Quick Start

1. Click the red X in your MenuBar
2. Choose a port group (React, Node, Rails, etc.)  
3. Confirm the action in the dialog
4. Watch the status update in real-time
5. Your ports are free! 🎉

---

**Made with ❤️ by developers, for developers**

🐛 [Report Issues](https://github.com/mediazone/killports/issues) • 💬 [Discussions](https://github.com/mediazone/killports/discussions) • 📖 [Documentation](https://github.com/mediazone/killports/wiki)
EOF

echo "✅ Release v${VERSION} prepared!"
echo "📦 Package: Public-Release/${PKG_NAME}"
echo "📝 Notes: Public-Release/release-notes-${VERSION}.md"
echo ""
echo "🚀 Next Steps:"
echo "1. Copy files to the public repository"
echo "2. Create GitHub release with:"
echo "   gh release create ${RELEASE_TAG} \"Public-Release/${PKG_NAME}\" --title \"KillPorts v${VERSION}\" --notes-file \"Public-Release/release-notes-${VERSION}.md\""
echo "3. Update website download links"