const res = await fetch('http://localhost:4321');
const html = await res.text();
const styleLinks = [...html.matchAll(/<link rel="stylesheet" href="([^"]+)"/g)].map(m => m[1]);
console.log('Style links:', styleLinks);

const inlineStyles = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)];
console.log('Inline style count:', inlineStyles.length);
for (const [idx, s] of inlineStyles.entries()) {
  if (s[1].includes('zen-btn--primary')) {
    console.log(`Found in inline style #${idx}:`, s[1]);
  }
}
