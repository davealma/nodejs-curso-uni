// tomando argumentos
// Que lea todos los argumentos y se los imprima
var args = process.argv;
// Validacion
if (!args) {
  printHelp();
  process.exit();
}
var sub_arreglo = args.slice(2);
var cadena = sub_arreglo.join();
//console.log(`Hello to ${args.slice(2).join()}`);
console.log(`Hello to ${cadena}`);

function printHelp() {
  console.log('You need a name');
}
