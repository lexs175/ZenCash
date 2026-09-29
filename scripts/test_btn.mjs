const res = await fetch('http://localhost:4321');
const html = await res.text();
const btnRegex = /class="([^"]*zen-btn[^"]*)"/g;
let m;
while ((m = btnRegex.exec(html)) !== null) {
  console.log('Button class:', m[1]);
}

const styleRegex = /\.zen-btn--primary\s*\{[^}]*\}/g;
let s;
while ((s = styleRegex.exec(html)) !== null) {
  console.log('Style match:', s[0]);
}
