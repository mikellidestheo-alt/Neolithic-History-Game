// Inlines css/ and js/ into single-file builds:
//   dist/shadows-over-geneva.html  – standalone page (open from disk, share by email/LMS, host anywhere)
// Optional: node bundle.mjs <fragment.html> also writes the game without <html>/<head>/<body>,
// for hosts that wrap pages in their own skeleton (e.g. a claude.ai artifact).
// Usage: node bundle.mjs [fragment-path]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = f => fs.readFileSync(path.join(root, f), 'utf8');
let html = read('index.html');

html = html.replace(/<link rel="stylesheet" href="css\/([^"]+)">/g, (_, f) => `<style>\n${read('css/' + f)}\n</style>`);
html = html.replace(/<script src="js\/([^"]+)"><\/script>/g, (_, f) => `<script>\n${read('js/' + f).replace(/<\/script/gi, '<\\/script')}\n</script>`);

// single-file builds have no manifest or icon next to them
html = html.replace(/<link rel="(manifest|apple-touch-icon)"[^>]*>\n?/g, '');

fs.mkdirSync(path.join(root, 'dist'), { recursive: true });
fs.writeFileSync(path.join(root, 'dist/shadows-over-geneva.html'), html);

// fragment: title + fonts + styles, then the body content and scripts
const head = html.match(/<head>([\s\S]*?)<\/head>/)[1]
  .replace(/<meta[^>]*>\s*/g, '')
  .replace(/<link rel="preconnect"[^>]*>\s*/g, '');
const body = html.match(/<body>([\s\S]*?)<\/body>/)[1];
// the host skeleton already pads the page by the safe-area insets
const hostFix = '<style>.hud{padding-top:8px}.dossier{padding-bottom:28px}</style>';
if (process.argv[2]) fs.writeFileSync(path.resolve(process.argv[2]), head.trim() + '\n' + hostFix + '\n' + body.trim() + '\n');
console.log('bundled', (html.length / 1024).toFixed(0) + ' KB');
