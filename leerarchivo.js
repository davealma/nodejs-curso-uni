// Leer archivos de manera Sincrona y Asincrona
var modulo1 = require('./read_module.js');
/*
console.log('1) Comenzar a leer archivo');
var contenido = modulo1.read('text.txt');
console.log('2) Contenido: '+contenido);
console.log('3) Seguir con siguiente funcion');
*/

console.log('1) Comenzar a leer archivo');
modulo1.read_async('text.txt', function(err, contenido) {
    if (err) {
        return console.error('Error :'+err);
    }
    console.log('2) Contenido: '+ contenido);
});
console.log("3) Nodejs sigue");
