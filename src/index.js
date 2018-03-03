const express = require('express');
const Parser = require('body-parser');
const Boom = require('express-boom');

// Environment Checks
if (!process.env.SERVER_PORT || !process.env.NODE_ENV) {
  //TODO: Log.error('Configuration Error: you must specify the following ENV variables: PORT, NODE_ENV');
  console.log('Configuration Error: you must specify the following ENV variables: PORT, NODE_ENV');
  process.exit(1);
}

const port = process.env.PORT;
const app = express();
const env = process.env.NODE_ENV;
//TODO: add log middleware
app.use(Boom());

app.use((req, res, next) => {
  res.set('Content-Type', 'application/json');
  next();
});

// endpoints are in ./routes folder
require('./endPoints')(app);

app.set('HEALTH_STATUS', 'OK');
let server;
if (env !== 'testing') {
  server = app.listen(port, '0.0.0.0', (err) => {
    if (err) {
      // TODO: Log.info(err);
      console.log('error while starting the app:- ', err);
    } else {
      // TODO: Log.info('Server started');
      console.log('Application srated successfully:- ');
    }
  });
}

// Shutdown Hook
process.on('SIGTERM', () => {
  app.set('HEALTH_STATUS', 'SHUTTING_DOWN');
  setTimeout(function () {
    server.close(function () {
      process.exit(0);
    });
  }, 3000);
});


module.exports = {
  app : app
};
