/**
 * Crear las operaciones CRUD de la entidad USER
 */
import { Router } from 'express';
import { userModel } from '../models/user.model.js';

const router = Router();

//READ de user (find all)
router.get('/', async (req, res) => {
    try{
        let users = await userModel.find(); //Es un find idéntico al que hacemos en el cliente CLI
        res.send({result: "success", payload: users})
    }catch(error){
        console.log("Cannot get users with mongoose: "+ error);
    }
})

//READ user by id
router.get('/:uid', async (req, res) => {
    let uid = req.params.uid;
    try{
        let user = await userModel.find({ _id : uid}); //Es un find idéntico al que hacemos en el cliente CLI
        res.send({result: "success", payload: user})
    }catch(error){
        console.log("Cannot get users with mongoose: "+ error);
    }
})

//CREATE Crear un nuevo usuario
router.post('/', async (req, res) => {
    // 1. Obtener los datos que necesitamos agregar
    let { first_name, last_name, email } = req.body;
    // 2. Validación/Evaluación que los valores fueron cargados correctamente o solo si existen
    if(!first_name || !last_name || !email) return res.send({status: "error", error: "Incomplete values"});
    // 3. Persistir la información en la base de datos
    let result = await userModel.create({
        first_name,
        last_name,
        email
    })
    // 4. Retornar el usuario recién creado
    res.status(201).send({status: "success", payload: result})
})

//UPDATE Actualizar un nuevo usuario
router.put('/:uid', async (req, res) => {
    // 1. Obtener el userId (uid) de los params
    let uid = req.params.uid;
    // 2. Tomar los campos del usuario a reemplazar
    let userToReplace = req.body; //Asumismo que en req.body tenemos los 3 campos del usuario: first_name, last_name, email
    // 3. Evaluamos si los valores existen
    if(!userToReplace.first_name || !userToReplace.last_name || !userToReplace.email) return res.send({status: "error", error: "Incomplete values"});
    // 4. Actualizar el usuario - Filtramos por _id porque MongoDB utiliza internamente _id
    let result = await userModel.updateOne(
        { _id : uid },//Los filtros
        userToReplace //Datos a reempalzar
    );
    res.send({status: "success", payload: result});
})

//DELETE Borrar un nuevo usuario
router.delete('/:uid', async (req, res) => {
    // 1. Obtener el userId (uid) de los params
    let uid = req.params.uid;
    // 2. Borramos el usuario
    let result = await userModel.deleteOne({ _id : uid});
    res.send({status: "success", payload: result})
})

export default router;