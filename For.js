var gonzalo = {
    nombre: 'Gonzalo',  
    apellido: 'Piñeiro',  
    peso: 28,
    peso: 65,
}
console.log(`Incio:     ${gonzalo.nombre} peso ${gonzalo.peso} Kg`) 


const INCREMENTO_PESO = 0.2
const aumentarPeso = persona => persona.peso += INCREMENTO_PESO
const bajarPeso = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= 365; i++) {
    var random = Math.random()
    if (random < 0.25) {
        aumentarPeso(gonzalo)
    } else if (random < 0.5) {
        bajarPeso(gonzalo)
    }
}


console.log(`Fin:       ${gonzalo.nombre} peso ${gonzalo.peso.toFixed(1)} Kg`) 