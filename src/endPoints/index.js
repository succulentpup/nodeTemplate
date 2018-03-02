const fs = require('fs');

function endPoints(app) {
  fs.readdirSync(__dirname + '/')
    .filter(file => file.match(/\.js$/))
    .forEach(file => {
      if (file !== 'index.js') {
        const endPoint = file.split('.');
        app.use('/' + endPoint[0], require('./' + endPoint[0]));
      }
    });
}

module.exports = endPoints;
