import express from 'express';
import handlebars from 'express-handlebars'; //Motor de plantillas para las vistas
import __dirname from './utils.js';
import mongoose from 'mongoose';
import { config } from './config/config.js'; //Importo el objeto que almacena las variables de entorno

//Importación de los routers
import viewsRouter from './routes/views.router.js';
import productRouter from './routes/product.router.js';

const app = express(); //Inicializo la constante app para utilizar express

//Configurar mi servidor para poder trabajar con json
app.use(express.json())
app.use(express.urlencoded({extended: true}));

//Inicializo mi motor de plantillas y lo configuro
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

//Seteo de manera estática la carpeta public
app.use(express.static(__dirname + '/public'));

//Conexión a la base de datos
mongoose.connect(config.URL_MONGODB)
    .then( () => console.log(`Conexión realizada con exito a la base: ${config.URL_MONGODB}`) )
    .catch( error => {
        console.error("Error en la conexión ", error);
        process.exit(); //Cerrar o detener la aplicación
    })

app.listen(config.PORT, () => console.log(`Listening on port ${config.PORT}`));

//Implemento los routers
app.use('/', viewsRouter); //Voy a tener todas las vistas, es decir, devuelvo con res.render()
app.use('/product', productRouter); //Voy a tener todas las vistas, es decir, devuelvo con res.render()