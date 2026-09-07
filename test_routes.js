const http = require('http');

const urls = [
  'http://localhost:8080/',
  'http://localhost:8080/index.html',
  'http://localhost:8080/about.html',
  'http://localhost:8080/treatments.html',
  'http://localhost:8080/products.html',
  'http://localhost:8080/contact.html',
  'http://localhost:8080/logo.png',
  'http://localhost:8080/hero.png',
  'http://localhost:8080/Dr.%20Anupama%20Ramachandran.jpeg',
  'http://localhost:8080/css/styles.css',
  'http://localhost:8080/js/main.js',
  'http://localhost:8080/assets/images/abhyanga.jpg',
  'http://localhost:8080/assets/images/shirodhara.jpg',
  'http://localhost:8080/assets/images/kizhi.jpg',
  'http://localhost:8080/assets/images/hair_oil.jpg',
  'http://localhost:8080/assets/images/pain_thailam.jpg',
  'http://localhost:8080/assets/images/kumkumadi.jpg',
  'http://localhost:8080/assets/images/choorna.jpg',
  'http://localhost:8080/assets/images/snana_choornam.jpg',
  'http://localhost:8080/assets/images/rasayana.jpg',
  'http://localhost:8080/assets/images/tarpana.jpg',
  'http://localhost:8080/assets/images/pain_care.jpg'
];

async function checkUrl(url) {
  return new Promise((resolve) => {
    http.get(url, (res) => {
      let data = [];
      res.on('data', chunk => data.push(chunk));
      res.on('end', () => {
        const buffer = Buffer.concat(data);
        resolve({
          url,
          status: res.statusCode,
          contentType: res.headers['content-type'],
          size: buffer.length
        });
      });
    }).on('error', (err) => {
      resolve({ url, status: 'ERROR: ' + err.message });
    });
  });
}

async function run() {
  console.log('--- Testing Website Routes & Assets ---');
  let allPass = true;
  for (const u of urls) {
    const res = await checkUrl(u);
    const pass = res.status === 200 && res.size > 0;
    if (!pass) allPass = false;
    console.log(`[${pass ? 'PASS' : 'FAIL'}] ${res.status} | ${res.contentType || 'N/A'} | ${res.size}B | ${res.url}`);
  }
  console.log('\n--- Final Verification Result: ' + (allPass ? 'ALL 22 ASSETS PASSED (200 OK)' : 'SOME FAILED') + ' ---');
}

run();
