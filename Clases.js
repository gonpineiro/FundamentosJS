class Persona{
    constructor (n, a, h) {
        this.nombre = n
        this.apellido = a
        this.altura = h
    }
    saludar(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} mido ${this.altura}`)
    }
    soyAlto(){
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona {
    constructor(n, a, h){
        super(n, a, h)
    }
    saludar(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy Dev`)
    }      
}





/*
var gonzalo = new Persona('Gonzalo' , 'Piñeiro', 1.75)
var erica = new Persona('Erica' , 'Mora', 1.62)
var arturo = new Persona('Arturo' , 'Peña', 1.82)*/