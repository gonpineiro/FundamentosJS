function heredaDe(protoHijo, protoPadre){
    var fn = function () {}
    fn.prototype = protoPadre.prototype
    protoHijo.prototype = new fn
    protoHijo.prototype.constructor = protoHijo
}

function Persona(n, a, h) {
    this.nombre = n
    this.apellido = a
    this.altura = h
    return this
}

Persona.prototype.saludar = function() {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} mido ${this.altura}`)
}

Persona.prototype.soyAlto = function()  { return this.altura > 1.8}

function Desarrollador(n, a){
    this.nombre = n
    this.apellido = a
}



heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function (){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy Dev`)
}

/*
var gonzalo = new Persona('Gonzalo' , 'Piñeiro', 1.75)
var erica = new Persona('Erica' , 'Mora', 1.62)
var arturo = new Persona('Arturo' , 'Peña', 1.82)*/