const express = require('express');
const app = express();

// Bring in your existing app.js config here if needed
// app.use(...), etc.

app.get('/', (req, res) => {
  res.send('Hello from Express on Vercel (no serverless-http)!');
});

module.exports = app;
