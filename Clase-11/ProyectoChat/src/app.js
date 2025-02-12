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