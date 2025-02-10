/** En este archivo, nosotros nos paramos como "clientes", porque representamos una vista */
const socket = io();
/**
 * io hace referencia a "socket.io", se llama así por convención.
 * La línea 1 permite instanciar el sockety guardarlo en la constante "socket"
 * Dicho socket es el que utilizaremos para poder comunicarnos con el socket del servidor
 */

socket.emit('message', "¡Hola, me estoy comunicando desde un websocket!");

socket.on('evento_para_socket_individual', data => console.log(data));

socket.on('evento_para_todos_menos_el_socket_actual', data => console.log(data));

socket.on('evento_para_todos', data => console.log(data));

/** Simulo sala de chat */
const messageButton = document.getElementById('sendMessage');
const messageInput = document.getElementById('messageInput');
const messageContainer = document.getElementById('messageContainer');

messageButton.addEventListener('click', () => {
    const message = messageInput.value;
    messageInput.value = '';
    socket.emit('newMessage', message);
})

socket.on('newMessage', message => {
    /** Cargar el mensaje nuevo */
    cargarMensaje(message);
})

socket.on('loadMessages', messages => {
    /** Cargar todos los mensajes cuando me conecto, los cargo en mi interfaz web */
    messages.forEach(unMensaje => cargarMensaje(unMensaje));
})

socket.on('newUser', userId  => {
    /** Muestro el usuario nuevo conectado */
    cargarMensaje(`Se conecto el usuario con id: ${userId}`);
})

function cargarMensaje(unMensaje){
    const messageElement = document.createElement('p');
    messageElement.textContent = `${unMensaje}`;
    messageContainer.appendChild(messageElement);
}