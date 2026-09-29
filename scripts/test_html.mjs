const res = await fetch('http://localhost:4321');
const html = await res.text();
const match = html.match(/<table[\s\S]*?<\/table>/);
if (match) {
  console.log(match[0].slice(0, 1500));
} else {
  console.log('No table found');
}
