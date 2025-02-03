import express from 'express';
import __dirname from './utils.js';

//Importamos los routers
import userRouter from './routes/user.router.js';
import petRouter from './routes/pet.router.js';

const app = express();

//Middleware para registrar todas las peticiones a nivel aplicación
app.use( (req, res, next) => {
    console.log(`${req.method} ${req.path} - ${new Date()}`)
    next();
})

//Middleware para analizar el cuerpo de las solicitudes
app.use(express.json());//Indicamos que ahora podemos recibir JSON al momento de recibir solicitudes
app.use(express.urlencoded({extended: true})); //Permite ques e pueda enviar información también desde la URL

//Inicializar mi servidor
app.listen(8080, () => {
    console.log("El servidor se esta escuchando en el puerto 8080")
})

//Implementamos los routers que creamos
app.use('/api/user', userRouter);
app.use('/api/pet', petRouter);

//Para convertir nuestra carpeta PUBLIC en recursos estáticos
app.use('/static', express.static( __dirname + '/public'));