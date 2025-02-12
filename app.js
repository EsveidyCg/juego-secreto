let numeroSecreto = 0;
let intentos =0;
let veces='intento';
let listaNumerosSorteados =[];
let numeroMaximo =100
function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector (elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento () {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario===numeroSecreto){
        asignarTextoElemento ('p', `Acertaste el número en ${intentos} ${veces}`);
        document.getElementById ('reiniciar').removeAttribute('disabled');
    }else  {
        //el usuario no acertó
    if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento ('p', 'El número secreto es menor');
        } else {
                asignarTextoElemento ('p', 'El número secreto es mayor');}
        intentos++;
        veces = 'intentos';
        limpiarCaja ();
            }
 return;
}
function limpiarCaja () {
let valorCaja= document.querySelector ('#valorUsuario');
valorCaja.value = '';
}

function generarNumeroSecreto () {
    let numeroGenerado = Math.floor((Math.random()*numeroMaximo)+1);
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento ('p', 'Ya se sortearon todos los números posibles')
    }else{
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
    }}
}
function condicionesIniciales (){
    asignarTextoElemento('h1', 'Juego Del Número Secreto!');
    asignarTextoElemento('p', `ingrese un número entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos =1;
}
function reiniciarJuego (){
    //limpiar la caja
    limpiarCaja ();
    //indicar mensaje de ingresa número
    //inicializar intentos 
    //generar  número aleatorio
    condicionesIniciales();
    //deshabilitar boton  de nuevo juego 
    document.querySelector('#reiniciar').setAttribute ('disabled','true');
}
condicionesIniciales();