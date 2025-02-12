/**
 * El archivo principal de la aplicación
 * Configuración del servidor express, inicializar el servidor Socket.IO
 * Establecer parametros de express y los routers
 */
import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from "./utils.js";
import { Server } from 'socket.io'; //Importamos SOLO el constructor de un servidor de sockets

//Importo los routers
import viewsRouter from './routes/views.router.js';

const app = express();
const httpServer = app.listen(8080, () => console.log(`Listening on port 8080`));
//Creamos un servidor de sockets que VIVE dentro de nuestro servidor HTTP
const io = new Server(httpServer); //io será un servidor para trabajar con sockets y por convención se lo llama así

//Configuramos todo lo referente a las plantillas
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');
//Cargamos la carpeta 'public' como nuestra carpeta de archivos estático
app.use(express.static(__dirname + '/public'));

//Implementamos los routers
app.use('/', viewsRouter);

/**
 * Empezamos a trababajar con el servidor socket
 * Nos ponemos a escuchar conexiones
 */
const messages = []; //Los mensajes se almacenaran aquí
io.on('connection', socket => {
    console.log(`Nuevo cliente conectado: ${socket.id}`);

    socket.on('userAuthenticated', user => {
        //Emitir los logs del chat al usuario que se acaba de autenticar
        socket.emit('messageLogs', messages);
        //Emitir una notificación a todos los demás usuarios
        socket.broadcast.emit('newUserConnected', user);
    })

    //Recibir mensajes y enviarlos a todos los clientes
    socket.on('message', data => {//Escuchamos el evento con el mismo nombre que emite el cliente: "message"
        messages.push(data); //Guardamos el mensaje en la "base"
        console.log(messages);
        io.emit('messageLogs', messages); //Reenviar instántaneamente los logs actualizados a todos los CLIENTES
    })

})