window.onload = iniciar;

const CRUZ = "X";
const CIRCULO = "O";
const casilleros = document.querySelectorAll(".casillero");
const mensaje = document.getElementById("error");
const parrafoTurno = document.getElementById("parrafoTurno");
let turno = 0;
let item = "";
let victoria = false;
let contador = 0;
let jugadorGanador = "";


function iniciar() {

    let urlActual = window.location.search;
    let urlParametros = new URLSearchParams(urlActual);

    let j1 = urlParametros.get("j1");
    j1 = j1.charAt(0).toUpperCase() + j1.slice(1);
    let j2 = urlParametros.get("j2");
    j2 = j2.charAt(0).toUpperCase() + j2.slice(1);    

    mostrarTurno(j1, j2);

    casilleros.forEach((casilleros) => {
        casilleros.addEventListener("click", e => {
            mensaje.style.display = "none";
            contador++;
            let casilla = e.target;
            if ( casilla.innerText.length == 0 ){
                if ( turno % 2 == 0 ){
                    item = CRUZ
                    casilla.innerText = item;
                } else {
                    item = CIRCULO
                    casilla.innerText = item;
                    } 
                turno++;
            

        } else {
            mensaje.style.display = "flex";
        }
        if ( contador == 9 ){
            alert("empate")
            window.location.replace("index.html");
        }

        ganador(item, j1, j2);
        if ( victoria ) {
            alert(" Ganaste : " + jugadorGanador);
            window.location.replace("index.html");
        }

        mostrarTurno(j1,j2);
        
        })
    } )


}

function mostrarTurno(j1, j2) {
    parrafoTurno.innerHTML = " Turno : ";
    if ( turno % 2 == 0 ){
        parrafoTurno.innerHTML += " " + j1;
    } else {
        parrafoTurno.innerHTML += " " + j2;
    }
}


function ganador(item, j1, j2) {

    for ( let i = 0 ; i < casilleros.length; i++ ){
        if ( i == 0 || i == 3 || i == 6 ) {
            if ( casilleros[i].innerText == item && 
                casilleros[i + 1].innerText == item && 
                casilleros[i + 2].innerText == item){
                    victoria = true;
                }
        }
        if ( i == 0 || i == 1 || i == 2 ){
            if ( casilleros[i].innerText == item && 
                casilleros[i + 3 ].innerText == item &&
                casilleros[i + 6 ].innerText == item) {
                    victoria = true;
                }
        }
        if ( i == 0 ){
            if ( casilleros[i].innerText == item && 
                casilleros[i + 4].innerText == item &&
                casilleros[i + 8].innerText == item ){
                    victoria = true;
                }
        }
        if ( i == 2){
            if ( casilleros[i].innerText == item &&
                casilleros[i + 2 ].innerText == item &&
                casilleros[i + 4 ].innerText == item) {
                    victoria = true;
                }
        }
    }

    if ( item == CRUZ ) {
        jugadorGanador = j1;
    } else {
        jugadorGanador = j2;
    }

}

