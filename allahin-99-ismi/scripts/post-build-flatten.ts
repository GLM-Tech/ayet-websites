import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.join(__dirname, '../dist');

const flattenDist = (dir: string): void => {
    const files = fs.readdirSync(dir);

    files.forEach((file: string) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            const indexHtmlPath = path.join(filePath, 'index.html');
            if (fs.existsSync(indexHtmlPath)) {
                // Örn: dist/subdir/index.html -> dist/subdir.html
                const newFilePath = path.join(DIST_DIR, `${file}.html`);

                // İçeriği oku
                const content = fs.readFileSync(indexHtmlPath, 'utf8');

                // Yeni konuma yaz
                fs.writeFileSync(newFilePath, content);
                console.log(`Flattened: ${indexHtmlPath} -> ${newFilePath}`);

                // Klasörü kaldır
                fs.rmSync(filePath, { recursive: true, force: true });
                console.log(`Removed directory: ${filePath}`);
            } else {
                // Alt klasörlere devam et
                flattenDist(filePath);
            }
        }
    });
};

console.log('Starting flatten process...');
if (fs.existsSync(DIST_DIR)) {
    flattenDist(DIST_DIR);
    console.log('✨ Flatten process complete.');
} else {
    console.log('Dist directory not found, skipping flatten.');
}
