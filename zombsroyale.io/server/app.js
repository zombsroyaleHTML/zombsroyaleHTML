const fs = require('fs');
const https = require('https');
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Enable CORS for local testing
app.use(cors({
  origin: 'https://localhost:8443', // matches the port below
  methods: ['GET','POST','OPTIONS'],
  credentials: true
}));

// Serve all static files (HTML, JS, assets) from parent folder
app.use(express.static(path.join(__dirname, '../')));

// Explicitly serve index.html at root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// Redirect all unknown routes to index.html (for SPA/game routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// HTTPS options
const options = {
  key: fs.readFileSync(path.join(__dirname, 'privkey.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'cert.pem'))
};

// Start HTTPS server on port 8443 (no sudo needed)
https.createServer(options, app).listen(9544, () => {
  console.log('HTTPS server running on port 9544');
});
