var ncp = require('ncp').ncp;
var path = require('path');
var fs = require('fs');

var ComponentCommand = function(name) {

  var lowName = name.toLowerCase();

  var newComponent = function() {
    var workDir = process.cwd();
    if (name === undefined || name === '' || name === null) {
      console.log("Please name your component");
      throw new Error('mean component Name');
    }

    console.log("Creating your component");

    var src = path.join(__dirname, '..', '..', 'project', 'component');
    var dest = path.join(workDir, 'app', 'components', name);
    
    var fileTSC = path.join(workDir, 'app', 'components', name, 'main.component.ts');
    var newFileTSC = path.join(workDir, 'app', 'components', name, lowName + '.component.ts');
   
    var fileTSH = path.join(workDir, 'app', 'components', name, 'main.component.html');
    var newFileTSH = path.join(workDir, 'app', 'components', name, lowName + '.component.html');    
   
    var fileCSS = path.join(workDir, 'app', 'components', name, 'main.component.css');
    var newFileCSS = path.join(workDir, 'app', 'components', name, lowName + '.component.css');

    // copy project to new directory
    ncp(src, dest, function (err) {
       if (err) {
         return console.error(err);
       }
       console.log('Creating React Component ...');

       fs.rename(fileTSH, newFileTSH, function(e) {
         
       });

       fs.rename(fileCSS, newFileCSS, function(e) {
         
       });

       fs.rename(fileTSC, newFileTSC, function(e) {
         
       });

       // rename Main in Component.jsx
       fs.readFile(newFileTSC, 'utf8', function (err,data) {

        var result = data.replace(/main/ig, lowName);

        fs.writeFile(newFileTSC, result, 'utf8', function (err) {
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
