"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Banda = function Banda(nombre, web, year, genero) {
  _classCallCheck(this, Banda);

  this.nombre = nombre ? nombre : 'Nombre no encontrado';
  this.web = web ? web : 'Web no encontrada';
  this.year = year ? year : 'Fundación no encontrada';
  this.genero = genero ? genero : 'Género no econtrado';
}; //Operadores ternarios
// const edad = 24;
// const resultado = edad >= 18 ? 'Eres mayor de edad' :'Eres menor de edad';
// console.log(resultado);
// if ( edad >= 18 ) {
//     console.log('Eres mayor de edad');
// } else {
//     console.log('Eres menor de edad');
// }


module.exports = {
  Banda: Banda
};