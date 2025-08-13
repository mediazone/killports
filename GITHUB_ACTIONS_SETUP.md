# 🚀 GitHub Actions Automation Setup for KillPorts

This guide sets up **complete automation** from private repo commits to public releases.

## 📋 Overview

**Workflow**: Private Repo Commit → Auto Build → Sign & Notarize → Public Release → Website Auto-Update

```
KillPortsMenuBar (private) → GitHub Actions → killports (public) → killports.com
      ↓                           ↓               ↓                ↓
   Push/Tag               Build & Sign        Release .pkg     Auto-detect
```

## 🔑 Required Secrets Setup

### 1. Apple Developer Certificates

You need these certificates from your Apple Developer account:

#### A. Code Signing Certificate (Developer ID Application)
```bash
# Export from Keychain as .p12 file
# Then convert to base64:
base64 -i YourDeveloperID.p12 | pbcopy
```

#### B. Installer Certificate (Developer ID Installer)  
```bash
# Export from Keychain as .p12 file
# Then convert to base64:
base64 -i YourInstaller.p12 | pbcopy
```

### 2. Provisioning Profile (if needed)
```bash
# Download from Apple Developer Portal
# Convert to base64:
base64 -i YourProfile.provisionprofile | pbcopy
```

### 3. Personal Access Token for Public Repo

Create a **Personal Access Token** with these permissions:
- `repo` (full repository access)
- `contents:write`
- `metadata:read`

## 🛠️ GitHub Secrets Configuration

### In your **PRIVATE REPO** (`mediazone/KillPortsMenuBar`), add these secrets:

| Secret Name | Description | How to Get |
|-------------|-------------|------------|
| `CERTIFICATES_P12` | Base64 encoded Developer ID Application certificate | Export from Keychain → base64 encode |
| `CERTIFICATES_P12_PASSWORD` | Password for the P12 certificate | Password you set when exporting |
| `PROVISIONING_PROFILE_BASE64` | Base64 encoded provisioning profile | Download from Apple → base64 encode |
| `APPLE_TEAM_ID` | Your Apple Developer Team ID | Found in Apple Developer Portal |
| `NOTARIZATION_USERNAME` | Apple ID email for notarization | Your Apple Developer email |
| `NOTARIZATION_PASSWORD` | App-specific password for notarization | Create in Apple ID settings |
| `PUBLIC_REPO_TOKEN` | Personal Access Token for public repo | GitHub Settings → Developer settings → PAT |

### Step-by-step Secret Setup:

1. **Go to Private Repo**: `https://github.com/mediazone/KillPortsMenuBar/settings/secrets/actions`

2. **Add each secret**:
   ```
   Name: CERTIFICATES_P12
   Value: [paste base64 encoded certificate]
   ```

3. **Apple Team ID**: Found at `https://developer.apple.com/account/#!/membership/`

4. **App-Specific Password**: 
   - Go to `https://appleid.apple.com/`
   - Sign in → App-Specific Passwords → Generate
   - Use this as `NOTARIZATION_PASSWORD`

5. **Public Repo Token**:
   - Go to `https://github.com/settings/personal-access-tokens/tokens`
   - Generate new token → Select `repo` permissions
   - Use this as `PUBLIC_REPO_TOKEN`

## 📁 File Structure Required

Your **private repo** should have this structure:

```
KillPortsMenuBar/
├── .github/
│   └── workflows/
│       └── build-and-release.yml  ← The workflow file
├── KillPorts/
│   ├── Info.plist
│   └── [your Swift files]
├── KillPorts.xcodeproj/
└── KillPorts.xcworkspace (if using CocoaPods)
```

## 🚀 How to Use

### Method 1: Tag-based Release (Recommended)
```bash
# In your private repo:
git tag v1.0.1
git push origin v1.0.1

# This automatically:
# 1. Builds the app
# 2. Signs & notarizes 
# 3. Creates .pkg installer
# 4. Releases to public repo
# 5. Website auto-detects new version
```

### Method 2: Manual Trigger
1. Go to private repo → Actions
2. Select "Build and Release KillPorts"
3. Click "Run workflow"
4. Enter version (e.g., `v1.0.1`)
5. Click "Run workflow"

## 🔍 Workflow Steps

1. **🔨 Build**: Compiles Swift app with Xcode
2. **📝 Version**: Updates Info.plist with new version
3. **🔐 Sign**: Code signs with Developer ID
4. **✅ Notarize**: Submits to Apple for notarization
5. **📦 Package**: Creates .pkg installer
6. **🚀 Release**: Publishes to public repo
7. **🌐 Website**: Auto-detects new version via GitHub API

## 🧪 Testing the Setup

### Test 1: Manual Workflow
1. Go to private repo Actions
2. Run workflow manually with test version `v1.0.1-test`
3. Check if release appears in public repo

### Test 2: Tag-based Release
```bash
git tag v1.0.2-test
git push origin v1.0.2-test
```

### Test 3: Website Auto-Detection
1. Visit your website after release
2. Check browser console for API calls
3. Verify button shows new version

## 🛡️ Security Notes

- ✅ **No secrets in public repo** - all sensitive data in private repo
- ✅ **Apple-signed binaries** - full Developer ID signing
- ✅ **Notarized releases** - Apple security approval
- ✅ **Automated checksums** - integrity verification

## 🔧 Troubleshooting

### Build Fails
- Check Xcode project settings
- Verify certificate validity
- Ensure provisioning profile matches

### Notarization Fails  
- Verify Apple ID credentials
- Check app-specific password
- Ensure Team ID is correct

### Release Fails
- Verify `PUBLIC_REPO_TOKEN` permissions
- Check if public repo exists
- Ensure token has `repo` scope

### Website Doesn't Update
- Check browser console for API errors
- Verify release has `.pkg` asset
- Test GitHub API manually:
  ```bash
  curl https://api.github.com/repos/mediazone/killports/releases/latest
  ```

## 🎉 Expected Result

After setup, your workflow will be:

1. **Code change** in private repo
2. **Push/tag** triggers automation  
3. **15-20 minutes later** → new release in public repo
4. **Website immediately** shows new version
5. **Users get** latest signed, notarized app

**Zero manual work** for releases! 🚀

---

## Next Steps

1. **Copy** `build-and-release.yml` to your private repo `.github/workflows/`
2. **Configure** all GitHub secrets
3. **Test** with a manual workflow run
4. **Create** first automated release with git tag

The automation is now ready! 🎯