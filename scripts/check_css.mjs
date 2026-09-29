const res = await fetch('http://localhost:4321');
const html = await res.text();
// check all style tags in html
const styleMatches = [...html.matchAll(/<style[\s\S]*?<\/style>/g)];
console.log('Total style tags:', styleMatches.length);
for (const sm of styleMatches) {
  if (sm[0].includes('clean-table') || sm[0].includes('cell-zen')) {
    console.log('--- FOUND TABLE STYLES ---');
    console.log(sm[0]);
  }
}
