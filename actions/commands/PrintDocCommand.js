var actionJson = require('../../package.json');

var PrintDoc = function() {
  var printMe = function() {
    console.log(" _____          ___  ___ _____  ___   _   _ ");
    console.log("|_   _|         |  \\/  ||  ___|/ _ \\ | \\ | |");
    console.log("  | | ___   ___ | .  . || |__ / /_\\ \\|  \\| |");
    console.log("  | |/ _ \\ / _ \\| |\\/| ||  __||  _  || . ` |");
    console.log("  | | (_) | (_) | |  | || |___| | | || |\\  |");
    console.log("  \\_/\\___/ \\___/\\_|  |_/\\____/\\_| |_/\\_| \\_/");
    console.log("\n");
    console.log("TooMEAN-Stack-Cli - Version" + actionJson.version);
    console.log('├── create             ─ Create a new project');
    console.log('├── make               ─ Create a new component');
    console.log('└── runs                ─ Verify that your stack works');
  };
  return {
    handle : printMe
  }
};

module.exports = PrintDoc;
