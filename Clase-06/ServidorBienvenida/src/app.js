import express from 'express';

const app = express();

//Endpoint para la bienvenida
app.get('/bienvenida', (request, response) => {
    response.send('<h1 style="color: blue">¡Bienvenido a mi aplicación express!</h1>')
})

//Endpoint para obtener datos de un usuario
app.get('/usuario', (req, res) => {
    const usuario = { //Inicializó un objeto usuario
        nombre: "Nahuel",
        apellido: "Ramírez",
        edad: 33,
        correo: "example@gmail.com"
    }
    res.json(usuario);
})

app.listen(8080, () => {
    console.log("Servidor escuchando en el puerto 8080")
})