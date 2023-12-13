//número random entre 1 y 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Variables que almacenarán los datos obtenidos de el Input, botón e img
const numeroSeleccionado = document.getElementById("numberSel");
const enviarEleccion = document.getElementById("enviarSup");
let imagen = document.getElementById('imgNumeroRandom');

// Botón de reinicio
let botonReinicio = document.getElementById("reiniciar");
// Contador de intentos
let contador = 1;

// Array para guardar cada valor ingresado y no perderlo
const valores = [];

function verificarValor() {
    
    if(Number(numeroSeleccionado.value) == randomNumber){
        // En caso de victoria
        document.getElementById('textoVictoria').innerHTML = 'Ganaste!'
        imagen.setAttribute('src','css/check-square.svg');
        return true; 
    } else if (Number(numeroSeleccionado.value) < randomNumber){
        // Si es un número incorrecto y el valor se quedó corto (es más pequeño)
        valores.push(numeroSeleccionado.value);
        document.getElementById('numerosAnteriores').innerHTML = valores;
        document.getElementById('respuestaAltoBajo').innerHTML = `Incorrecto | El número que se debe adivinar es mas alto!`;
    } else if (Number(numeroSeleccionado.value) > randomNumber){
        // Si es un número incorrecto y el valor se quedó largo (es más grande)
        valores.push(numeroSeleccionado.value);
        document.getElementById('numerosAnteriores').innerHTML = valores;
        document.getElementById('respuestaAltoBajo').innerHTML = `Incorrecto | El número que se debe adivinar es mas bajo!`;
    } 
    
    if(contador == 10){
        // En caso de derrota
        document.getElementById('textoVictoria').innerHTML = 'Perdiste!';
        imagen.setAttribute('src','css/x-square.svg');
        return false
    }

    contador++;
    console.log(valores);
}