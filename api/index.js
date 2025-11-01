// api/index.js
const serverless = require('serverless-http');
const app = require('../app');

// Wrap the Express app into a serverless handler
module.exports = (req, res) => {
  const handler = serverless(app);
  return handler(req, res);
};
