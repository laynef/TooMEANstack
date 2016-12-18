var TextCommand = function() {
  var printStatement = function() {
    console.log("Your installation runs!");
  };

  return {
    handle: printStatement
  }
}

module.exports = TextCommand;
