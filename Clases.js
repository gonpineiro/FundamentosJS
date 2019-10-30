class Persona{
    constructor (n, a, h) {
        this.nombre = n
        this.apellido = a
        this.altura = h
    }
    saludar(fn){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} mido ${this.altura}`)
        if (fn) {
            fn(this.nombre, this.apellido, false)
        }
    }
    soyAlto(){
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona {
    constructor(n, a, h){
        super(n, a, h)
    }
    saludar(fn){
        var {nombre, apellido} = this
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy Dev`)
        if (fn) {
            fn(nombre, apellido, true)
        }
    }      
}

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen dia ${nombre} ${apellido}`)
    if (esDev) {
        console.log(`Sos Dev, mira vos!`)
    }
}





var gonzalo = new Persona('Gonzalo' , 'Piñeiro', 1.75)
var erica = new Persona('Erica' , 'Mora', 1.62)
var arturo = new Desarrollador('Arturo' , 'Peña', 1.82)
gonzalo.saludar(responderSaludo)
erica.saludar(responderSaludo)
arturo.saludar(responderSaludo)
