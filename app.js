let numeroSecreto = 0;
let intentos = 0;
let listasNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p",`acertaste el numero en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        //el usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p","el numero secreto es menor");
        } else {
            asignarTextoElemento("p","el numero secretro es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = '';
}

function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

   console.log(numeroGenerado);
   console.log(listasNumerosSorteados);
   //si ya sorteamos todos los codigos
   if (listasNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", "ya se sortearon todos los numeros posibles");
   } else {
        //si el numero generado esta incluido en la lista
        if (listasNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();

        } else {
            listasNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento("h1","juego del numero secreto!");
    asignarTextoElemento("p",`indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intrervalo de numeros
    //generar el numero aleatorio
    //iniciar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();

