var gonzalo = {
    nombre: 'Gonzalo',
    apellido: 'Piñeiro',
    altura: '1.72',
    cantidadDeLbros: 110
}

var alan = {
    nombre: 'Alan',
    apellido: 'Petre',
    altura: '1.62',
    cantidadDeLbros: 25
}
var vick = {
    nombre: 'Vick',
    apellido: 'Hus',
    altura: '1.82',
    cantidadDeLbros: 98
}
var lau = {
    nombre: 'Lau',
    apellido: 'Centro',
    altura: '1.68',
    cantidadDeLbros: 260
}
var lauta = {
    nombre: 'Lauta',
    apellido: 'Sdwg',
    altura: '1.20',
    cantidadDeLbros: 130
}
var jose = {
    nombre: 'Jose',
    apellido: 'Ort',
    altura: '1.81',
    cantidadDeLbros: 854
}

const esAlta = ({ altura }) => altura > 1.80
const esBaja = ({ altura }) => altura <= 1.80


var personas = [gonzalo, alan, vick, lau, jose, lauta]

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

const pasarAlturaACms = persona => ({...persona, altura: persona.altura * 100})

var personasCms = personas.map(pasarAlturaACms)



/*
for (var i = 0; i < personas.length; i++){
    acum +=  personas[i].cantidadDeLbros
}*/
const reducer = (acum, { cantidadDeLbros }) =>  acum + cantidadDeLbros

var totalDeLibros = personas.reduce(reducer, 0)


console.log('------------------------')
console.log(personasCms)
console.log(personasAltas)
console.log(personasBajas)

console.log('------------------------')



console.log(`En total todos tienen ${totalDeLibros} libros`)

for (var i = 0; i < personas.length; i++) {    
    console.log(`${personas[i].nombre}  Mide:   ${personas[i].altura}`)    
}