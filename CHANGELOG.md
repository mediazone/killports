# Changelog

All notable changes to KillPorts will be documented in this file.

## [1.0.2] - 2025-08-11

### Added
- Automated release with notarized installer
- Robot MenuBar icon
- Fast port termination functionality
- Apple notarized and code signed package

## [1.0.1] - 2025-08-11

### Added
- Automated release with notarized installer
- Robot MenuBar icon
- Fast port termination functionality
- Apple notarized and code signed package

## [1.0.1] - 2025-08-11

### Added
- Automated release with notarized installer
- Robot MenuBar icon
- Fast port termination functionality
- Apple notarized and code signed package

## [1.0.1] - 2025-08-11

### Added
- Automated release with notarized installer
- Robot MenuBar icon
- Fast port termination functionality
- Apple notarized and code signed package

## [1.0.0] - $(date +%Y-%m-%d)

### Changed
- Bug fixes and improvements

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-08-11

### 🎉 Initial Release

#### Added
- **Core Port Management**
  - One-click port killing functionality
  - Smart process detection using `lsof` and `kill` commands
  - Support for graceful termination (SIGTERM) followed by force kill (SIGKILL)
  - Real-time status updates during operations

- **Developer-Focused Presets**
  - React Development (port 3000)
  - Node.js/Express (ports 3000, 8000) 
  - Ruby on Rails (port 3000)
  - Laravel/PHP development servers
  - Generic port management for custom setups

- **Modern macOS Interface**
  - MenuBar integration with custom red X icon
  - Control Center-inspired UI design
  - Color-coded port groups with SF Symbols
  - Card-based layout with hover effects
  - Real-time progress indicators and status messages

- **Security & Legal Protection**
  - Apple Developer ID code signing
  - Apple Notarization for security verification
  - User confirmation dialogs before port killing
  - Professional Terms of Use implementation
  - No data collection or telemetry

- **User Experience Features**
  - Launch at login option
  - Keyboard shortcuts support (Space to activate, Esc to cancel)
  - Smooth animations and transitions
  - Status indicators (Ready/Working states)
  - Error handling and user feedback

#### Technical Implementation
- Built with Swift 5.0 and SwiftUI
- Universal Binary supporting Apple Silicon and Intel Macs  
- Minimum requirement: macOS 13.0 (Ventura)
- Unsandboxed for system-level process access
- Production-ready build pipeline with notarization

#### Developer Tools
- Comprehensive build scripts for development and production
- Automated code signing and notarization workflow
- Debug logging for troubleshooting
- Legal protection framework with user agreements

### Security Notes
- This version removes macOS sandboxing to enable system-level port management
- Apple Notarization ensures the app is free from malware
- Code signing guarantees authenticity from verified developer
- User confirmations prevent accidental process termination

### Known Limitations
- Requires administrator privileges for process termination
- Cannot kill system-critical processes (protected by macOS)
- MenuBar-only interface (no Dock icon by design)
- Designed for development use, not production server management

---

## Release Statistics
- **Download Size:** 1.7 MB
- **Installation Size:** ~5 MB
- **Supported Architectures:** arm64, x86_64
- **Supported Languages:** English
- **Bundle ID:** com.uniqueportmanager.2025.utility

## Upgrade Notes
This is the initial release, so no upgrade considerations apply.

## Support
- 🐛 [Report Bugs](https://github.com/mediazone/killports/issues)
- 💡 [Request Features](https://github.com/mediazone/killports/issues/new?template=feature_request.md)
- 💬 [Join Discussions](https://github.com/mediazone/killports/discussions)
- 📧 [Contact Support](mailto:hello@killports.dev)

---

*For detailed technical documentation, visit the [Wiki](https://github.com/mediazone/killports/wiki)*