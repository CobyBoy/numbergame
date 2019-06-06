
let p = document.getElementById('respuesta');
let pVidas = document.getElementById('vidas');
let boton = document.getElementById('botonAdivinar');
let partidas = document.getElementById('partidas');
let reset = document.getElementById('reset');
let adivino = false;
let ran = getRandom();
let vidas = 6;
let partida = 1;

p.textContent = "Cantidad de vidas: "+ vidas; 
partidas.textContent = "Partida Nº "+ partida;


boton.addEventListener("click", adivinar);
window.addEventListener("keydown", pressEnter);
reset.addEventListener("click", resetGame);

function getRandom() {
    return Math.floor(Math.random() * 51);
}

function pressEnter(e) {
    if (e.keyCode == 13) {
        adivinar();
    }
}

 function adivinar() {
    let ing = document.getElementById('ingreso').value;

    if (ing > 50 || ing < 0) {
        p.textContent = "El número no puede ser mayor a 50 ni menor a 0"; 
    }
        else if (ing == '') {
            p.textContent = "Debe ingresar un número"; 
        } 
        else  if(ing < ran) {
            p.textContent = "El número a adivinar es MAYOR";
            vidas--;
         }

        else if(ing > ran) {
            p.textContent = "El número a adivinar es MENOR";
            vidas--;
        }

        else if (ing == ran) {
            p.textContent = "ADIVINASTE! (Es el número "+ ran + ")";
            adivino = true;
            partidas.textContent = "Partida Nº "+ partida;    
        }

        vidas < 0 ? (vidas = 0, pVidas.textContent = "Cantidad de vidas restantes: " + vidas):   //para que las vidas no se vuelvan negativas
        pVidas.textContent = "Cantidad de vidas restantes: " + vidas; 

        if (vidas <= 0) {
        p.textContent = "PERDISTE. Intentalo nuevamente presionando en 'JUEGO NUEVO'";
    }
} 

function resetGame() {
    document.getElementById('ingreso').value = 0;
    vidas = 6;
    partida++;
    ran=getRandom();
    p.textContent = "JUEGO NUEVO";
    pVidas.textContent ="Cantidad de vidas: "+ vidas;
    partidas.textContent = "Partida Nº "+ partida;
}