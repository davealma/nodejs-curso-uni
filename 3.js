'use strict';

var readStream = require('./stream_module');
var pipeStream = require('./pipe_stream');
var chainStream = require('./chain_stream');
var filename = 'text_large.txt';

//readStream.readStream(filename, function(error, result) {
//  console.log(result);
//});

//pipeStream.pipeStreams(filename, 'output.txt');

chainStream.chain('input.txt.gz', 'output.txt');
