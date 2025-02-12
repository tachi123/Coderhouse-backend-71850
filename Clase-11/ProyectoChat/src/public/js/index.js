/** En este archivo, nos posicionamos como "clientes" */
const socket = io();

/**
 * socket hace referencia a "socket.io"
 * Nos permite instanciar el socket y guardarlo en la constante "socket"
 * Este socket es el que vamos a utilizar par poder comunicarnos con el socket del servidor
 */

//Alerta de identificación
Swal.fire({
    title: "Identifícate",
    input: 'text', //Indicamos que el cliente necesita escribir un texto para poder avanzar de esta alerta
    text: "Ingresa tu usuario para identificarte en el chat",
    inputValidator: value => {
        //Esta validación ocurre si el usuario decide dar en "continuar" sin  haber colocado un nombre de usuario
        return !value && 'Necesitas escribir un nombre de usuario para continuar.'
    },
    allowOutsideClick: false, //Impedimos que el usuario salga de la alerta al dar el "click" fuera de la alerta
}).then( result => {

    document.getElementById('username-display').textContent = result.value; 
})