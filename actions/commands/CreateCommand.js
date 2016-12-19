var ncp = require('ncp').ncp;
var path = require('path');
var jsonfile = require('jsonfile');


var CreateCommand = function(name) {
  var ProjectName = name;

  var newProject = function() {
    var workDir = process.cwd();
    if (name === undefined || name === '' || name === null) {
      console.log("Please name your project");
      throw new Error('mean create Name');
    }

    console.log("Starting your project: " + name);

    var src = path.join(__dirname, '..', '..', 'project', 'temp');
    var dest = path.join(workDir, name);

    var file = './' + name + '/package.json';

    var obj = {
      "name": ProjectName,
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "start": "nodemon ./server/server.js",
        "build": "webpack -w",
        "build:pro": "webpack -p",
        "postinstall": "webpack"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "dependencies": {
        "@angular/common": "^2.3.1",
        "@angular/compiler": "^2.3.1",
        "@angular/core": "^2.3.1",
        "@angular/forms": "^2.3.1",
        "@angular/http": "^2.3.1",
        "@angular/platform-browser": "^2.3.1",
        "@angular/platform-browser-dynamic": "^2.3.1",
        "@angular/router": "^3.3.1",
        "angular2-template-loader": "^0.6.0",
        "body-parser": "^1.15.2",
        "commonjs": "0.0.1",
        "core-js": "^2.4.1",
        "cors": "^2.8.1",
        "express": "^4.14.0",
        "extract-text-webpack-plugin": "^1.0.1",
        "mongoose": "^4.7.3",
        "morgan": "^1.7.0",
        "nodemon": "^1.11.0",
        "reflect-metadata": "^0.1.8",
        "rxjs": "^5.0.1",
        "socket.io": "^1.7.2",
        "typescript": "^2.1.4",
        "zone.js": "^0.7.2"
      },
      "devDependencies": {
        "cross-env": "^3.1.3",
        "html-webpack-plugin": "^2.24.1",
        "raw-loader": "^0.5.1",
        "ts-loader": "^1.3.3",
        "typescript": "^2.1.4",
        "typings": "^2.0.0",
        "webpack": "^1.14.0",
        "webpack-dev-server": "^1.16.2"
      }
    };

    // copy project to new directory
    ncp(src, dest, function (err) {
       if (err) {
         return console.error(err);
       }
       console.log('Your project is building ...');

       // create package.json
       jsonfile.writeFile(file, obj, {spaces: 2}, function (er) {
         // should be null
       });

       console.log("Your stacks ready to go!");
    });

  };
  return {
    handle: newProject
  }
};

module.exports = CreateCommand;
