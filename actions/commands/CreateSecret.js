var ncp = require('ncp').ncp;
var path = require('path');
var fs = require('fs');

var ComponentCommand = function(name) {

  var db = 'mongodb://user:pass@ds145128.mlab.com:45128/basic-form';

  var newComponent = function() {
    var workDir = process.cwd();
    if (name === undefined || name === '' || name === null) {
      console.log("Please name your component");
      throw new Error('mean component Name');
    }

    console.log("Creating your secret database");

    var src = path.join(__dirname, '..', '..', 'project', 'temp', 'config.js');
    var dest = path.join(workDir, 'config.js');

    // copy project to new directory
    ncp(src, dest, function (err) {
       if (err) {
         return console.error(err);
       }
       console.log('Creating Angular 2 Component ...');

       // rename Main in Component.jsx
       fs.readFile(src, 'utf8', function (err,data) {

        var result = data.replace(/process\.env\.mongo/g, db);

        fs.writeFile(dest, result, 'utf8', function (err) {
          // null
        });
      });

       console.log("Your component is ready to go!");
    });

  };
  return {
    handle: newComponent
  }
};

module.exports = ComponentCommand;