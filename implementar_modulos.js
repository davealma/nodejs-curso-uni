/*var mod1 = require('./modulo1');
mod1.miAtributo = 'Atributo1';
mod1.metodo = function () {
    console.log('hey');
}

console.log('mod1.miAtributo=', mod1.miAtributo);
console.log('mod1.unMetodo=', mod1.metodo());*/

/*var mod2 = require('./modulo2.js');
console.log('vida', mod2.health);
console.log('nueva vida', mod2.getHit(3));*/

/*var mod3 = require('./modulo3.js');
var component = new mod3(10);*/

var component = require('./modulo3.js')(10);
console.log('vida iniciada', component.health);
console.log('usted fue atacado', component.getHit(3));
