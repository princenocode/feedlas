const fs = require('fs');
const path = require('path');

console.log('🚀 Building Feedlas for production...\n');

// Function to rename page.html to index.html recursively
function renamePageFiles(dir) {
  const items = fs.readdirSync(dir);

  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Recursively process subdirectories
      renamePageFiles(fullPath);
    } else if (item === 'page.html') {
      const newPath = path.join(dir, 'index.html');

      // Check if index.html already exists
      if (fs.existsSync(newPath)) {
        console.log(`⚠️  Skipping ${fullPath} - index.html already exists`);
      } else {
        fs.renameSync(fullPath, newPath);
        console.log(`✅ Renamed: ${fullPath} → ${newPath}`);
      }
    }
  });
}

try {
  // Start from current directory
  renamePageFiles('.');
  console.log('\n✨ Build completed successfully!');
  console.log('📦 Your site is ready for Vercel deployment.');
} catch (error) {
  console.error('\n❌ Build failed:', error.message);
  process.exit(1);
}
