var gonzalo = {
    nombre: 'Gonzalo',
    apellido: 'piñeiro',
    edad: 28
}

var dario = {
    nombre: 'Dario',
    apellido: 'Sumist',
    edad: 65
}

function nombreMayus(persona){
    console.log(persona.nombre.toUpperCase());
}

function nombreMayus2({ nombre }){
    console.log(nombre.toUpperCase());
}

nombreMayus(gonzalo)
nombreMayus(dario)
console.log('------------------')
nombreMayus2(gonzalo)
nombreMayus2(dario)

nombreMayus2({ nombre: 'Pepito'})
nombreMayus2()