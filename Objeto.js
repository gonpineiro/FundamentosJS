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
    //vart nombre = persona.nombre
    //console.log(persona.nombre.toUpperCase());

    var { nombre } = persona
    console.log(nombre.toUpperCase())
}

function nombreMayus2({ nombre }){
    console.log(nombre.toUpperCase());
}

function nombreEdad({ nombre, edad }){
    console.log('Me llamo ' + nombre.toUpperCase() + ' tengo ' + edad + ' años');
}
nombreEdad(gonzalo)
nombreMayus(dario)
console.log('------------------')
nombreMayus2(gonzalo)
nombreMayus2(dario)
console.log('------------------')
nombreMayus2({ nombre: 'Pepito'})

function cumpleanos (persona) {
    console.log(persona.edad += 1);
}

function cumpleanos2 (persona) {
    return{
        ...persona,
        edad: persona.edad + 1
    }
}

var gonzaloViejo = cumpleanos2(gonzalo)
