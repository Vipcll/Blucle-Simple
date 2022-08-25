let contadorIntentos = 0;
let resultado;
let tarjeta;
let darkMode
let vidas = 2;
let win = false;
let intentos = 1;

let colorToasty = "linear-gradient(to right, #f76ae0, #ff00c3)";
let numero = [1,0,0,0,0,0,0,0,0];

numero = numero.sort(()=>{return Math.random()-0.5});
console.log(numero);

const stats = document.getElementById('stats');
const botonDark = document.getElementById('botonDarkMode');
const botonLight = document.getElementById('botonLightMode');
const jugar = document.getElementById("reset");


function tarjetas(id){

    tarjeta = document.getElementById(id);
    resultado = numero[id];

    (vidas<=0) && revelarCarta();

    if(vidas >= 0 && win == false){
        contadorIntentos++;

        if(resultado != 0){
            tarjeta.innerHTML = "<img src= carta.jpg>";
            document.getElementById("resultado").innerHTML = "Usted es un ganador en solo "+ contadorIntentos + " intentos."
            Toastify({

                text: "Usted es un ganador en solo "+ contadorIntentos + " intentos.",
                
                duration: 2000,

                style: {
                    background: colorToasty,
                }
                
                }).showToast();
            win = true;
        }else{
            tarjeta.innerHTML = "NO"
            document.getElementById("vidas").innerHTML = "Tus vidas son "+ vidas;
            Toastify({

                text: "Tus vidas son "+ vidas,
                
                duration: 2000,

                style: {
                    background: colorToasty,
                }
                
                }).showToast();
            vidas--;
            tarjeta.disabled = true;
            
            
        }

    }else{
        (win == true) ? document.getElementById("resultado").innerHTML = "Ya has ganado, Dale a Reset para volver a jugar" : document.getElementById("resultado").innerHTML = "Has perdido, Dale a Reset para volver a jugar";
        
    }
}

jugar.addEventListener('click', () => 
{
    
    (localStorage.getItem('vecesJugadas')) ? intentos = localStorage.getItem('vecesJugadas') : localStorage.setItem('vecesJugadas', intentos);
    intentos++;
    numero = numero.sort(()=>{return Math.random()-0.5});
    console.log(numero);
    for(let i=0; i<9; i++) {
            document.getElementById(i).innerHTML = " ";
            document.getElementById(i).disabled = false;
    }
    vidas =2;
    document.getElementById("vidas").innerHTML = "Tus vidas son 3";
    document.getElementById("resultado").innerHTML = "Veces Jugadas " + intentos;
    win =false;
    contadorIntentos = 0;
    Toastify({

        text: "Se ha Reseteado el GAME",
        
        duration: 2000,

        style: {
            background: colorToasty,
        }
        
        }).showToast();
        localStorage.setItem('vecesJugadas',intentos);
})

function revelarCarta() {
    for(let i=0; i<numero.length; i++) {
        if(numero[i]==1) {
            document.getElementById(i).innerHTML = "<img src= carta.jpg>";
            (vidas<0) && Toastify({

                text: "No le diste a la carta, dale a volver a jugar",
                
                duration: 2000,

                style: {
                    background: colorToasty,
                }
                
                }).showToast();
            
        }
    }
}

async function cargarLeaderBoard(){
    const response = await fetch("leaderboard.JSON");
    const data= await response.json();

    data.forEach((element) => {
        const elem1 = document.createElement('p');
        elem1.innerHTML =` 
                ${element.nombre}
        `
        const elem2 = document.createElement('p');
        elem2.innerHTML =` 
                ${element.vecesJugadas}
        `
        const elem3 = document.createElement('p');
        elem3.innerHTML =` 
                ${element.vecesGanadas}
        `
        stats.append(elem1);
        stats.append(elem2);
        stats.append(elem3);
    });
}

if(localStorage.getItem('colorMode')) {
    colorMode = localStorage.getItem('colorMode');
} else {
    localStorage.setItem('colorMode', "light") ;
}
if(colorMode == "dark") {
    document.body.classList.add("darkMode");
    document.getElementById("mainDos").classList.add("mainColorVioleta");
    colorToasty= "linear-gradient(to right, #b26fff, #560bad)";
}
botonDark.addEventListener('click', () => {
    document.body.classList.add("darkMode");
    document.getElementById("mainDos").classList.add("mainColorVioleta");
    colorToasty= "linear-gradient(to right, #b26fff, #560bad)";

    localStorage.setItem('colorMode', "dark");
})
botonLight.addEventListener('click', () => {
    document.body.classList.remove("darkMode");
    localStorage.setItem('colorMode', "light");
    document.getElementById("mainDos").classList.remove("mainColorVioleta");
    colorToasty= "linear-gradient(to right, #f76ae0, #ff00c3)";
})

cargarLeaderBoard();