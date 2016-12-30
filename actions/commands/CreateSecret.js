var ncp = require('ncp').ncp;
var path = require('path');
var fs = require('fs');

var SecretCommand = function() {

  var lower = '"mongodb://user:pass@ds145128.mlab.com:45128/basic-form"'; 

  var newComponent = function() {
    var workDir = process.cwd();

    var configFile = path.join(workDir, 'config.js')
    console.log("Schemmin...");

    // rename Main in Component.jsx
    fs.readFile(configFile, 'utf8', function (err,data) {
    var result = data.replace(/process\.env\.mongo/g, lower);
        fs.writeFile(configFile, result, 'utf8', function (err) {
            // null
        });
    });
    console.log("Shhhh")
  };
  return {
    handle: newComponent
  }
};

module.exports = SecretCommand;
