var gonzalo = {
    nombre: 'Gonzalo',
    apellido: 'Piñeiro',
    altura: '1.72'
}

var alan = {
    nombre: 'Alan',
    apellido: 'Petre',
    altura: '1.62'
}
var vick = {
    nombre: 'Vick',
    apellido: 'Hus',
    altura: '1.82'
}
var lau = {
    nombre: 'Lau',
    apellido: 'Centro',
    altura: '1.68'
}
var lauta = {
    nombre: 'Lauta',
    apellido: 'Sdwg',
    altura: '1.20'
}
var jose = {
    nombre: 'Jose',
    apellido: 'Ort',
    altura: '1.81'
}

const esAlta = ({ altura }) => altura > 1.80
const esBaja = ({ altura }) => altura <= 1.80


var personas = [gonzalo, alan, vick, lau, jose, lauta]

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)




const pasarAlturaACms = persona => ({...persona, altura: persona.altura * 100})

var personasCms = personas.map(pasarAlturaACms)

console.log(personasCms)
console.log(personasAltas)
console.log(personasBajas)

for (var i = 0; i < personas.length; i++) {
    
    console.log(`${personas[i].nombre}  Mide:   ${personas[i].altura}`)
    
}
