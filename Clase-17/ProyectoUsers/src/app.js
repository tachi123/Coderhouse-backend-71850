import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import viewsRouter from './routes/views.router.js';
import mongoose from 'mongoose';

//Inicializo la conexión a la base de datos donde tengo los usuarios
const mongoURL = 'mongodb://localhost:27017/tuBaseDeDatos';
const environment = async () => {
    await mongoose.connect(mongoURL);
}
environment();

//Inicializo la constante app para utilizar expres
const app = express();

//Configuro mi servidor para trabajar con json
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Inicializo mi motor de plantillas y lo configuro
app.engine('handlebars', handlebars.engine());
app.set('views',  __dirname + '/views');
app.set('view engine', 'handlebars');

app.use('/', viewsRouter);

app.listen(8080, () => `Listening on port 8080`)