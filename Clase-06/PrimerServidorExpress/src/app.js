import express from 'express';

/**
 * Express es el módulo ya instalado, pero para poder tener andando nuestra "app"
 * Necesitamos inicializarlo
 */
const app = express(); //A partir de aca la variable app contendrá todas las funcionalidades de express

const PORT = 3000;

/**
 * app.get realiza una apertura de un "endpoint"
 * El cual indica al protocolo HTTP que la ruta "/saludo" espera una petición GET
 * Si se llama a otra ruta u otro método, no lo va a reconocer
 */
app.get('/saludo', (req, res) =>  {//req = request (petición) ; res = response (respuesta)
    res.send("¡Hola a todos, pero ahora desde express!");
})

/**
 * app.get configura el endpoint, sin embargo, si el servidor no se levanto para escuchar en algún puerto
 * No va a suceder nada. Por eso recurrimos a app.listen
 */

//Por defecto se levanta nuestro servidor en el localhost o 127.0.0.1
//El segundo argumento es un callback que muestra un console.log indicando que el servidor esta activo o esta levantado
app.listen(PORT, () => 
    console.log(`Listening on port ${PORT}`)
)