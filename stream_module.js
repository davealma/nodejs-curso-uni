var fs = require('fs');
var readFile = function (filename, cb) {
  var stream = fs.createReadStream(filename);
  var contents = "";

  stream.on("data", function(chunk) {
    console.log("chunk");
    contents += chunk;
  });

  stream.on("end", function() {
    return cb(null, contents);
  });
};

module.exports = {
  readStream: readFile
}; 
