import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const assetsDir = 'd:/Astra/Portfolio/src/assets';

async function compressImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;

  const stats = fs.statSync(filePath);
  const sizeBefore = stats.size;
  
  // Skip files smaller than 50KB to avoid over-compressing lightweight icons/logos
  if (sizeBefore < 50 * 1024) {
    console.log(`Skipping light file: ${path.basename(filePath)} (${(sizeBefore / 1024).toFixed(1)} KB)`);
    return;
  }

  console.log(`Processing: ${path.basename(filePath)} (${(sizeBefore / 1024 / 1024).toFixed(2)} MB)`);

  try {
    const inputBuffer = fs.readFileSync(filePath);
    let pipeline = sharp(inputBuffer);

    // Limit maximum dimensions to 1920px (standard HD) to prevent loading raw camera resolutions
    const metadata = await pipeline.metadata();
    if (metadata.width > 1920 || metadata.height > 1920) {
      pipeline = pipeline.resize({
        width: metadata.width > metadata.height ? 1920 : undefined,
        height: metadata.height >= metadata.width ? 1920 : undefined,
        fit: 'inside',
        withoutEnlargement: true
      });
    }

    if (ext === '.jpg' || ext === '.jpeg') {
      pipeline = pipeline.jpeg({ quality: 75, progressive: true, mozjpeg: true });
    } else if (ext === '.png') {
      pipeline = pipeline.png({ quality: 75, compressionLevel: 9, palette: true });
    }

    const outputBuffer = await pipeline.toBuffer();
    
    if (outputBuffer.length < sizeBefore) {
      fs.writeFileSync(filePath, outputBuffer);
      const sizeAfter = outputBuffer.length;
      const savings = ((sizeBefore - sizeAfter) / sizeBefore * 100).toFixed(1);
      console.log(`  Saved: ${(sizeAfter / 1024).toFixed(1)} KB (shrunk by ${savings}%)`);
    } else {
      console.log(`  No savings achieved, keeping original`);
    }
  } catch (err) {
    console.error(`  Error processing ${path.basename(filePath)}:`, err);
  }
}

async function main() {
  if (!fs.existsSync(assetsDir)) {
    console.error(`Directory not found: ${assetsDir}`);
    return;
  }
  const files = fs.readdirSync(assetsDir);
  for (const file of files) {
    const filePath = path.join(assetsDir, file);
    await compressImage(filePath);
  }
  console.log('Compression complete!');
}

main();
