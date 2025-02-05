import express from 'express';
//import handlebars from 'express-handlebars';
import { hbs } from './config/handlebars.config.js';
import __dirname from './utils.js';

//Importamos los routers
import viewsRouter from './routes/views.router.js';
import userRouter from './routes/user.router.js';

const app = express();

//Middleware para analizar el cuerpo de las solicitudes
app.use(express.json());//Indicamos que ahora podemos recibir JSON al momento de recibir solicitudes
app.use(express.urlencoded({extended: true})); //Permite ques e pueda enviar información también desde la URL

//Inicializamos el motor indicando app.engine('Que motor utilizaremos', el motor instanciado)
app.engine('handlebars', hbs.engine);
//con app.set('views', ruta) indicamos en que parte del proyecto estarán las rutas
app.set('views', __dirname + '/views'); //Recordamos que es mejor utilizar rutas absolutas para evitar problemas de ruteo relativo
//Finalmente con app.set('view engine','handlebars') indicamos que el motor que ya iniciamos arriba, es el que queremos utilizar
app.set('view engine','handlebars');

//Inicializar mi servidor
app.listen(8080, () => {
    console.log("El servidor se esta escuchando en el puerto 8080")
})

app.use('/', viewsRouter); //Para generar páginas estáticas o manejar contenido semi estático
app.use('/api/user', userRouter);


//Para convertir nuestra carpeta PUBLIC en recursos estáticos
app.use(express.static( __dirname + '/public'));