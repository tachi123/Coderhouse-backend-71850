/**
 * Crear las operaciones CRUD de la entidad USER
 */
import { Router } from 'express';
import { userModel } from '../models/user.model.js';

const router = Router();

//READ de user (find)
router.get('/', async (req, res) => {
    try{
        let users = await userModel.find(); //Es un find idéntico al que hacemos en el cliente CLI
        res.send({result: "success", payload: users})
    }catch(error){
        console.log("Cannot get users with mongoose: "+ error);
    }

})

//CREATE Crear un nuevo usuario

//UPDATE Actualizar un nuevo usuario

//DELETE Borrar un nuevo usuario

export default router;