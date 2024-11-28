const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const baseUrl = 'http://localhost:4200/challengingislambangla.github.io';  // Change to the live URL if deployed
const routes = [
    '/',
  '/data/data1',  // Add your dynamic routes here
  '/data/data2'   // You can add as many dynamic routes as needed
];

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // Iterate over each dynamic route
  for (let route of routes) {
    // Construct full URL by combining baseUrl and route
    const fullUrl = baseUrl + route;
    
    console.log(`Generating static page for ${fullUrl}...`);
    
    // Navigate to the route
    await page.goto(fullUrl, { waitUntil: 'networkidle2' });

    // Wait for the content to load (adjust selector if necessary)
    await page.waitForSelector('app-root');  // Ensure app-root is loaded

    // Get the full HTML content of the page
    const content = await page.content();

    // Define where the static HTML files should be saved
    let filePath = path.join(__dirname, 'docs', `${route.replace(/\//g, '')}.html`);
    
    if (filePath.endsWith("/.html")) { // root file index.html replace
        filePath = filePath.replace("/.html", "/index.html")
    }
    // Save the HTML content to a file
    fs.writeFileSync(filePath, content);
    console.log(`Saved static page: ${filePath}`);
  }

  await browser.close();
})();