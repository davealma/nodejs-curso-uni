var fs = require('fs');
var zlib = require('zlib');
// tar -cvzf input.txt.gz text_large.txt
var pipe = function(filename, output) {
  fs.createReadStream(filename)
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream(output));
};

module.exports = {
  chain: pipe
};
