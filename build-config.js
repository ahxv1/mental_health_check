const fs = require('fs'), path = require('path');
const env = fs.readFileSync(path.join(__dirname,'.env'),'utf8');
const match = env.match(/GEMINI_KEY=(.+)/);
if(!match) { console.error('GEMINI_KEY not found in .env'); process.exit(1); }
fs.writeFileSync(path.join(__dirname,'config.js'), `window.GEMINI_KEY = '${match[1].trim()}';\n`);
console.log('config.js generated.');
