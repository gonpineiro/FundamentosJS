const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'


const opts =  { crossDomain: true }

const onPersoResponse = function(personaje){
    console.log(personaje.name)
}

function obtenerPersonaje(id){
    const url = `${ API_URL }${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, onPersoResponse)
}

for (var i = 0; i < 4; i++) {
    obtenerPersonaje(i+1)    //EJEMPLO DE ASINCRONISMO
}