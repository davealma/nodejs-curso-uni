var EventEmitter = require('events').EventEmitter;

var logger = new EventEmitter();

logger.on('error', function(message) {
  console.log('ERR: ' +message);
});

logger.emit('error', 'Error en el servidor');
