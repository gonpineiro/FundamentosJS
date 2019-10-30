var gonzalo = {
    nombre: 'Gonzalo',  
    apellido: 'Piñeiro',  
    edad: 28,
    ingeniero: true,
    cocinero: false,
    cantante: true,
    dj: false,
    drone: true
}

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es:`)

    if (persona.ingeniero) {console.log('Ingeniero')} else {console.log('No Ingeniero')}
    if (persona.cocinero) {console.log('Cocinero')} else {console.log('No Cocinero')}
    if (persona.cantante) {console.log('Cantante')} else {console.log('No Cantante')}
    if (persona.dj) {console.log('DJ')} else {console.log('No DJ')}
    if (persona.drone) {console.log('Drone')} else {console.log('No Drone')}
    
}