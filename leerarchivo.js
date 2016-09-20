var modulo1 = require('./read_module.js');
/*
console.log('1) Comenzar a leer archivo');
var contenido = modulo1.say('text.txt');
console.log('2) Contenido: '+contenido);
console.log('3) Seguir con siguiente funcion');
*/
console.log('1) Comenzar a leer archivo');
modulo1.say_async('text.txt22', function(err, contenido) {
    if (err) {
        return console.error('Error :'+err);
    }
    console.log('2) Contenido: '+ contenido);
});
console.log("3) Nodejs sigue");
