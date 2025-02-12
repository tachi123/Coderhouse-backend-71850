/** En este archivo, nos posicionamos como "clientes" */
const socket = io();

/**
 * socket hace referencia a "socket.io"
 * Nos permite instanciar el socket y guardarlo en la constante "socket"
 * Este socket es el que vamos a utilizar par poder comunicarnos con el socket del servidor
 */
//Creación de elementos del DOM y variables auxiliares
let chatBox = document.getElementById('chatBox'); //Obtenemos la referencia del cuadro donde se escribirá.
let user; //Este "user" será con el que el cliente se identificará para saber quién escribió el mensaje
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
    //Guardamos en la variable user el valor ingresado por el usuario
    user = result.value;
    //Una vez que el usuario se identifica, le asignamos la variable User al objeto HTML con id 'username-display'
    document.getElementById('username-display').textContent = user; 
    //Emitir un evento avisando que se conecto un nuevo usuario
    socket.emit('userAuthenticated', {user: user});
})

//Eventlistener para el input del chat
chatBox.addEventListener('keyup', (evt) => {
    if(evt.key === 'Enter'){//El mensaje se enviará cuando el usuario aprete "Enter" en la caja del chat
        if(chatBox.value.trim().length){//Corroboramos que el mensaje no este vacío o sólo contenga espacios
            socket.emit('message', {user: user, message: chatBox.value}); //Emitimos nuestro evento mensaje
            chatBox.value = '';
        }   
    }
})

//Escuchar el evento 'messageLogs' así actualizamos la lista de mensajes (pisamos los mensajes)
socket.on('messageLogs', data => {//data es el array con todos los mensajes
    let elementLog = document.getElementById('messageLogs');
    let messageHtml = "";
    data.forEach( message => messageHtml += `${message.user} dice: ${message.message}<br>`);
    elementLog.innerHTML = messageHtml;
})

//Cuando alguien se conecta, muestro una alerta usando SweetAlert2
socket.on('newUserConnected', newUser => {
    Swal.fire({
        text: "Nuevo usuario conectado",
        toast: true,
        position: "top-right",
        showConfirmButton: false,
        timer: 5000, //en milisegundos, sería 5 segundos
        icon: 'info',
        title: `${newUser.user} se ha unido al chat`
    })
})