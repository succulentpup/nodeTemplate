const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
if (env === 'production') {
  // TODO: module.export = require('./build/');
} else {
  process.env.NODE_ENV = 'development';
  process.env.PORT = 3000;
  module.exports = require('./src').app;
}
