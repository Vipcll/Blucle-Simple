var numeroSecreto;
var contadorIntentos = 0;
var numeroIngresado;
var numero;
var salir;
var min = 1;
var max = 11;

numeroSecreto = getRandomNum(min, max);
console.log(numeroSecreto);
comenzar();

function comenzar()
{
numeroSecreto = Math.floor(Math.random() * (max - min))+ min;
console.log(numeroSecreto);
}

function verificar()
{
    numeroIngresado = document.getElementById("numero").value;
    contadorIntentos = contadorIntentos + 1;
    document.getElementById("intentos").innetHTML = "cantidad de intentos: " + contadorIntentos;
    
    if(numeroSecreto == numeroIngresado){
        alert("Usted es un ganador en solo "+ contadorIntentos + " intentos.");
    }else if(numeroIngresado < numeroSecreto){
        alert("Falta...");
    }    else {
        alert("Se paso...");
    }
    }

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min))+ min;
}