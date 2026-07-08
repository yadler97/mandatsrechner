import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function generatePreviews() {
    const FLAGS_DIR = 'static/flags';
    const OUTPUT_DIR = 'static/previews';
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });

    const files = fs.readdirSync(FLAGS_DIR);
    const flagFiles = files.filter(file => /\.(jpg|jpeg|png)$/i.test(file));

    for (const file of flagFiles) {
        const id = path.parse(file).name;
        const flagPath = path.join(FLAGS_DIR, file);
        const logoPath = path.resolve('src/lib/assets/logo.svg');
        const outputPath = path.join(OUTPUT_DIR, `${id}.png`);

        try {
            const logoBuffer = await sharp(logoPath)
                .resize(100, 50)
                .toBuffer();

            const logoBox = await sharp({
                create: { width: 124, height: 124, channels: 4, background: 'transparent' }
            })
            .composite([
                {
                    input: Buffer.from(`
                        <svg width="124" height="124">
                            <rect x="2" y="2" width="120" height="120" rx="20" ry="20" 
                                fill="white" stroke="#333333" stroke-width="4"/>
                        </svg>`),
                },
                { input: logoBuffer, gravity: 'center' }
            ])
            .png()
            .toBuffer();

            const margin = 40;
            await sharp(flagPath)
                .resize(1200, 720, { fit: 'cover', position: 'center' })
                .composite([{ 
                    input: logoBox, 
                    left: 1200 - 120 - margin, 
                    top: 720 - 120 - margin 
                }])
                .toFile(outputPath);
            
            console.log(`Successfully generated: ${outputPath}`);
        } catch (err) {
            console.error(`Error processing ${file}:`, (err as Error).message);
        }
    }
}

generatePreviews();