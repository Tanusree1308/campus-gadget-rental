const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const ROOT = __dirname;

const MIME = {
    ".html": "text/html",
    ".js": "application/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon",
    ".woff2": "font/woff2",
};

http.createServer((req, res) => {
    let urlPath = req.url.split("?")[0]; // strip query strings
    if (urlPath === "/") urlPath = "/index.html";

    const filePath = path.join(ROOT, urlPath);
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME[ext] || "text/plain";

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end(`<h2 style="font-family:sans-serif;padding:2rem">404 — Not found: ${urlPath}</h2>`);
            return;
        }
        res.writeHead(200, { "Content-Type": contentType });
        res.end(data);
    });
}).listen(PORT, () => {
    console.log(`\n  ✅  CampusRent running at → http://localhost:${PORT}\n`);
});
