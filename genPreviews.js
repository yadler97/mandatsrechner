import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function generatePreviews() {
    const ids = ["bundestagswahl2025"];
    const OUTPUT_DIR = 'static/previews';
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });

    for (const id of ids) {
        const flagPath = path.resolve(`static/flags/${id}.jpg`);
        const logoPath = path.resolve('src/lib/assets/logo.svg');
        const outputPath = path.join(OUTPUT_DIR, `${id}.png`);

        try {
            const logoBuffer = await sharp(logoPath)
                .resize(100, 50)
                .toBuffer();

            const logoBox = await sharp({
                create: { width: 120, height: 120, channels: 4, background: 'white' }
            })
            .composite([
                { input: logoBuffer, gravity: 'center' },
                { 
                    input: Buffer.from('<svg><rect x="0" y="0" width="120" height="120" rx="20" ry="20"/></svg>'), 
                    blend: 'dest-in' 
                }
            ])
            .png()
            .toBuffer();

            const margin = 40;
            await sharp(flagPath)
                .resize(1200, 720, { 
                    fit: 'cover', 
                    position: 'center'
                })
                .composite([{ 
                    input: logoBox, 
                    left: 1200 - 120 - margin, 
                    top: 720 - 120 - margin 
                }])
                .toFile(outputPath);
            
            console.log(`Successfully generated: ${outputPath}`);
        } catch (err) {
            console.error(`Error processing ${id}:`, err.message);
        }
    }
}

generatePreviews();