import { Router } from 'express';

const router = Router();

//Usuario de prueba
const user = {
    name: "Jaime Nahuel",
    last_name: "Ramírez",
    age: 33,
    role: "admin"
}

/** Array para la actividad datos personales */
let users = [
    {name: 'Nahuel', lastName: 'Ramirez', age: 33},
    {name: 'Fernando', lastName: 'Cabral', age: 44},
    {name: 'Roberto', lastName: 'Rodriguez', age: 13},
    {name: 'Andres', lastName: 'Aguilar', age: 53},
    {name: 'Matias', lastName: 'Fazzito', age: 44}
];

/** Array para la actividad de food */
let food = [
    {name: "Hamburguesa", price: "100"},
    {name: "Banana" , price: "20"},
    {name: "Soda" , price: "40"},
    {name: "Ensalada" , price: "120"},
    {name: "Pizza" , price: "150"}
]

/** PUNTO DE ACCESO PRUEBA DE RENDERIZACIÓN CON UN OBJETO DE USUARIO DE EJEMPLO */
router.get('/', (req, res)  => {
    //Usamos un objeto de prueba para sustituir los campos en la plantilla
    let testUser = user;
    //res.render es nuestro nuevo método para renderizar plantillas
    //Se compone de: (nombre de la plantilla, objeto para reemplazar los campos)
    res.render('index', { user: testUser, title: "Titulo plantilla"});
});

//Punto de acceso para renderizar información de UN usuario de manera aleatoria
router.get('/datos-personales', (req, res ) => {
    //Seleccionar un usuario aleatorio
    const randomIndex = Math.floor(Math.random() * users.length); 
    const randomUser = users[randomIndex];

    res.render('datospersonales', {user: randomUser})
})

router.get('/register', (req,res ) => {
    res.render('register');
})

/** ACTIVIDAD DE FOOD, creamos otro INDEX */
router.get('/indexfood', (req, res)  => {
    //Usamos el objeto de usuario de prueba
    let testUser = user;
    res.render('indexfood', {
        user: testUser,
        isAdmin: testUser.role === "admin",
        food,
        style: "index.css"
    })
})


export default router;