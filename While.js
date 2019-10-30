var gonzalo = {
    nombre: 'Gonzalo',  
    apellido: 'Piñeiro',  
    peso: 28,
    peso: 65,
}
console.log(`Incio:     ${gonzalo.nombre} peso ${gonzalo.peso} Kg`) 

const INCREMENTO_PESO = 0.3

const aumentarPeso = persona => persona.peso += INCREMENTO_PESO
const bajarPeso = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = gonzalo.peso - 3
var dias = 0

while (gonzalo.peso > META) {    
    
    if (comeMucho()) {
        aumentarPeso(gonzalo)
    }

    if (realizaDeporte()) {
        bajarPeso(gonzalo)
    }
    dias += 1;
}

console.log(`Pasaron ${dias}`)
console.log(`Fin:       ${gonzalo.nombre} peso ${gonzalo.peso.toFixed(1)} Kg`) 