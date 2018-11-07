// Modulo para leer un archivo sincronamente
function say (filename) {
  //llamada sincrona!
  return contents = fs.readFileSync(filename);
}

function say_async(filename, callback) {
  fs.readFile(filename, callback);
}

var fs = require("fs");

//module.exports.say = say;
//module.exports.say_async = say_async;
module.exports = {
  read: say,
  read_async: say_async
};
