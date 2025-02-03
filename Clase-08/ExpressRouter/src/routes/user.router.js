import { Router } from 'express';
import { uploader } from '../utilsMulter.js';

const router = Router();

//Array para almacenar
const users = [];

//MÉTODO GET: Obtener todos los recursos (en este caso usuarios)
router.get('/', (req, res) => {
    res.json({users});
})

//MÉTODO POST: Para crear un nuevo recurso (en este caso un usuario)
router.post('/', uploader.single('file'), (req, res) => {
    if(!req.file){//Si no existe req.file, significa que hubo un error al subir el archivo
        //queda en nosotros si continuamos el proceso o no
        return res.status(400).send({status: "error", error: "No se pudo guardar la imagen"});
    }
    console.log(req.file);//Revisamos los campos que vienen en req.file por parte de multer
    const newUser = req.body; //La info del usuario va a venir en req.body
    newUser.thumbnail = req.file.path; //Agregamos al usuario la ruta de su respectiva imagen
    users.push(newUser);
    res.status(201).json({message: "Usuario creado exitosamente"});
})


export default router;