var args = process.argv[2];
if (!args) {
  console.log('Necesita seleccionar un archivo');
  process.exit(1);
}

var my_module = require('./read_module.js');

/*
console.log('Comenzar a leer archivo!!');
var content = my_module.say(args);
console.log('Este es mi contenido: '+content);
console.log('Seguire trabajando');
*/

//llamada async
console.log('Comenzar a leer archivo!!');
my_module.say_async(args, function(error, content) {
  if(error) {
	console.error(error);
        process.exit(1);
  }
  console.log('Este es mi contenido: ' +content.toString());
});
console.log('Seguire trabajando');
