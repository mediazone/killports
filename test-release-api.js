#!/usr/bin/env node

/**
 * Test script to verify GitHub API integration works correctly
 * This simulates what the website JavaScript will do
 */

async function testGitHubAPI() {
    console.log('🧪 Testing GitHub API Integration for KillPorts\n');
    
    try {
        console.log('1. Fetching latest release from GitHub API...');
        const response = await fetch('https://api.github.com/repos/mediazone/killports/releases/latest');
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const release = await response.json();
        console.log('✅ API Response received\n');
        
        // Extract key information
        const version = release.tag_name;
        const publishDate = new Date(release.published_at);
        const assets = release.assets;
        
        console.log('📋 Release Information:');
        console.log(`   Version: ${version}`);
        console.log(`   Published: ${publishDate.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        })}`);
        console.log(`   Assets: ${assets.length} files\n`);
        
        // Find .pkg file
        const pkgAsset = assets.find(asset => 
            asset.name.endsWith('.pkg') && asset.name.includes('KillPorts')
        );
        
        if (pkgAsset) {
            console.log('📦 Package Information:');
            console.log(`   File: ${pkgAsset.name}`);
            console.log(`   Size: ${formatFileSize(pkgAsset.size)}`);
            console.log(`   Downloads: ${pkgAsset.download_count}`);
            console.log(`   URL: ${pkgAsset.browser_download_url}\n`);
            
            // Test download URL accessibility
            console.log('2. Testing download URL accessibility...');
            const downloadResponse = await fetch(pkgAsset.browser_download_url, { method: 'HEAD' });
            
            if (downloadResponse.ok) {
                console.log('✅ Download URL is accessible');
                console.log(`   Content-Length: ${downloadResponse.headers.get('content-length')} bytes`);
                console.log(`   Content-Type: ${downloadResponse.headers.get('content-type')}\n`);
            } else {
                console.log(`❌ Download URL failed: ${downloadResponse.status}\n`);
            }
            
        } else {
            console.log('❌ No .pkg file found in release assets\n');
            console.log('Available assets:');
            assets.forEach(asset => {
                console.log(`   - ${asset.name} (${formatFileSize(asset.size)})`);
            });
        }
        
        // Simulate website update
        console.log('3. Simulating website update...');
        const websiteData = {
            downloadUrl: pkgAsset ? pkgAsset.browser_download_url : `https://github.com/mediazone/killports/releases/latest`,
            buttonText: `⚡ Download KillPorts ${version}`,
            versionDisplay: version,
            releaseDate: publishDate.toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            }),
            fileSize: pkgAsset ? formatFileSize(pkgAsset.size) : '2.1 MB'
        };
        
        console.log('🌐 Website would display:');
        console.log(`   Button: "${websiteData.buttonText}"`);
        console.log(`   Version: ${websiteData.versionDisplay}`);
        console.log(`   Date: ${websiteData.releaseDate}`);
        console.log(`   Size: ${websiteData.fileSize}`);
        console.log(`   Link: ${websiteData.downloadUrl}\n`);
        
        console.log('✅ GitHub API integration test completed successfully!');
        console.log('🚀 The website will automatically detect new releases\n');
        
        return true;
        
    } catch (error) {
        console.error('❌ Test failed:', error.message);
        console.log('\n🔧 Troubleshooting:');
        console.log('   - Check internet connection');
        console.log('   - Verify repository exists: https://github.com/mediazone/killports');
        console.log('   - Ensure at least one release exists in the repo');
        console.log('   - Check GitHub API rate limits\n');
        
        return false;
    }
}

// Helper function to format file sizes
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

// Check if we're running this script directly
if (require.main === module) {
    testGitHubAPI().then(success => {
        process.exit(success ? 0 : 1);
    });
}

module.exports = { testGitHubAPI };