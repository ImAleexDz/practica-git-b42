class Banda {
    constructor (nombre, web, year, genero){
        this.nombre = nombre ? nombre : 'Nombre no encontrado';
        this.web = web ? web : 'Web no encontrada';
        this.year = year ? year : 'Fundación no encontrada';
        this.genero = genero ? genero : 'Género no econtrado';
    }
}

module.exports = { Banda };