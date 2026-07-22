const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const assetsDir = path.join(__dirname, '..', 'src', 'assets');

// Images that came back uncompressed from the remote merge
const targets = [
  'suspensionHead.png',   // 3.8 MB
  'dynamicCaptain.png',   // 1.0 MB
  'innovationHead.png',   // 748 KB
  'PRO.png',              // 570 KB
  'steeringHead.png',     // 320 KB
  'manager.png',          // 320 KB
];

async function compressImage(filename) {
  const filePath = path.join(assetsDir, filename);
  if (!fs.existsSync(filePath)) {
    console.log(`SKIP: ${filename} not found`);
    return;
  }

  const originalSize = fs.statSync(filePath).size;
  const tempPath = filePath + '.tmp';

  try {
    const ext = path.extname(filename).toLowerCase();
    let pipeline = sharp(filePath).resize({ width: 800, withoutEnlargement: true });

    if (ext === '.png') {
      pipeline = pipeline.png({ quality: 80, compressionLevel: 9 });
    } else if (ext === '.jpg' || ext === '.jpeg') {
      pipeline = pipeline.jpeg({ quality: 80, progressive: true });
    }

    await pipeline.toFile(tempPath);

    const newSize = fs.statSync(tempPath).size;
    fs.unlinkSync(filePath);
    fs.renameSync(tempPath, filePath);

    const saved = ((1 - newSize / originalSize) * 100).toFixed(1);
    console.log(`OK: ${filename}  ${(originalSize/1024).toFixed(0)}KB -> ${(newSize/1024).toFixed(0)}KB  (${saved}% saved)`);
  } catch (err) {
    console.error(`ERR: ${filename}: ${err.message}`);
    if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
  }
}

async function main() {
  console.log('Compressing merged images...\n');
  for (const file of targets) {
    await compressImage(file);
  }
  console.log('\nDone.');
}

main();
