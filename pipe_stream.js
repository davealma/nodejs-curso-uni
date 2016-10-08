var fs = require('fs');
var pipeStreams = function(input, output) {
  var readable = fs.createReadStream(input);
  var writable = fs.createWriteStream(output);
  readable.pipe(writable);
  
};

module.exports = {
  pipeStreams: pipeStreams
};
