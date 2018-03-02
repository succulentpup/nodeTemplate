const router = require('express');
const Router = new router();

Router.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  return res.send(req.app.get('HEALTH_STATUS'));
});

module.exports = Router;
