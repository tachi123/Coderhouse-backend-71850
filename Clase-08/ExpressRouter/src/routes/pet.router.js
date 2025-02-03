import { Router } from 'express';

const router = Router();

//Array para almacenar
const pets = [];

//Middleware para registrar todas las peticiones a nivel router
router.use( (req, res, next) => {
    console.log(`Logs de mascotas: ${req.method} ${req.path} - ${new Date()}`)
    next();
})

//Funciones de ejemplo de middleware a nivel endpoint
function mid1 (req, res, next){
    req.dato1 = 'un dato';
    next();
}
function mid2 (req, res, next){
    req.dato2 = req.dato1 + 'otro dato';
    next();
}

//MÉTODO GET: Obtener todos los recursos (en este caso mascotas)
router.get('/', mid1,  mid2, (req, res) => {
    console.log(`Dato 1: ${req.dato1}`);
    console.log(`Dato 2: ${req.dato2}`);
    res.json({pets});
})

//MÉTODO POST: Para crear un nuevo recurso (en este caso una mascota)
router.post('/', (req, res) => {
    const newPet = req.body; //La info del usuario va a venir en req.body
    pets.push(newPet);
    res.status(201).json({message: "Mascota creada exitosamente"});
})

export default router;