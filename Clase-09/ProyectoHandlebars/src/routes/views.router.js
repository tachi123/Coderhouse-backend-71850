import { Router } from 'express';

const router = Router();

/** PUNTO DE ACCESO PRUEBA DE RENDERIZACIÓN CON UN OBJETO DE USUARIO DE EJEMPLO */
router.get('/', (req, res)  => {
    //Usamos un objeto de prueba para sustituir los campos en la plantilla
    let testUser = {
        name: "Jaime Nahuel",
        last_name: "Ramírez",
        age: 33
    }
    //res.render es nuestro nuevo método para renderizar plantillas
    //Se compone de: (nombre de la plantilla, objeto para reemplazar los campos)
    res.render('index', { user: testUser, title: "Titulo plantilla"});
});

/** Actividad datos personales */
let users = [
    {name: 'Nahuel', lastName: 'Ramirez', age: 33},
    {name: 'Fernando', lastName: 'Cabral', age: 44},
    {name: 'Roberto', lastName: 'Rodriguez', age: 13},
    {name: 'Andres', lastName: 'Aguilar', age: 53},
    {name: 'Matias', lastName: 'Fazzito', age: 44}
];

//Punto de acceso para renderizar información de UN usuario de manera aleatoria
router.get('/datos-personales', (req, res ) => {
    //Seleccionar un usuario aleatorio
    const randomIndex = Math.floor(Math.random() * users.length); 
    const randomUser = users[randomIndex];

    res.render('datospersonales', {user: randomUser})
})


export default router;