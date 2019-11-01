const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'


const opts =  { crossDomain: true }

function onError(id) {
    console.log('Error')    
}


function obtenerPersonaje(id){
    return new Promise((resolve, reject) => {
        const url = `${ API_URL }${PEOPLE_URL.replace(':id', id)}`

        $
            .get(url, opts, function (data) {
                resolve(data)
            })
            .fail(() => reject(id))
    })

}

var ids = [1, 2, 3, 4, 5, 7, 8]

/*
var promesas = ids.map(function (id) {
    return obtenerPersonaje(id)
})*/

var promesas = ids.map(id => obtenerPersonaje(id))
Promise
    .all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError)


/*obtenerPersonaje(1)
    .then((personaje) => {
        console.log(personaje.name)
        return obtenerPersonaje(2)
    })
    .then((personaje) => {
        console.log(personaje.name)
        return obtenerPersonaje(3)
    })
    .then((personaje) => {
        console.log(personaje.name)
        return obtenerPersonaje(4)
    })
    .then((personaje) => {
        console.log(personaje.name)
        return obtenerPersonaje(5)
    })
    .then((personaje) => {
        console.log(personaje.name)
        return obtenerPersonaje(6)
    })
    .then((personaje) => {
        console.log(personaje.name)
        return obtenerPersonaje(7)
    })
    .then((personaje) => {
        console.log(personaje.name)
        return obtenerPersonaje(8)
    })
    .then((personaje) => {
        console.log(personaje.name)
        return obtenerPersonaje(9)
    })
    .then((personaje) => {
        console.log(personaje.name)
        return obtenerPersonaje(10)
    })
    .then((personaje) => {
        console.log(personaje.name)
        return obtenerPersonaje(11)
    })
    .then((personaje) => {
        console.log(personaje.name)
        return obtenerPersonaje(12)
    })
    .catch(onError)*/


       