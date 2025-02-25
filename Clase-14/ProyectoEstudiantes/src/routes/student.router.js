import { Router } from 'express';
import studentModel from '../models/student.model.js';

const router = Router();

//GET /api/student : Obtener todos los estudiantes
router.get('/', async (req, res) =>{
    try{
        const students = await studentModel.find();
        res.json({students});
    }catch(error){
        res.status(500).json({error: error.message});
    }
})

//GET /api/student/:id : Obtener los datos de un estudiante por ID
router.get('/:uid', async (req, res) =>{
    try{
        const student = await studentModel.findById(req.params.uid);
        if(!student){
            return res.status(404).json({message: "Estudiante no encontrado con ese id"})
        }
        res.json({student});
    }catch(error){
        res.status(500).json({error: error.message});
    }
})

//POST /api/student : Crear un estudiante
router.post('/', async (req, res) =>{
    try{
        //Tendríamos que agregar validaciones
        const newStudent = new studentModel(req.body); //Suponemos que req.body tiene TODOS LOS CAMPOS del estudiante
        await newStudent.save();
        res.status(201).json({newStudent});
    }catch(error){
        res.status(500).json({error: error.message});
    }
})

//PUT /api/student/uid : Actualizar un estudiante
router.put('/:uid', async (req, res) =>{
    try{   
        const studentActualizado = await
            studentModel.findByIdAndUpdate( req.params.id , req.body);
        if(!studentActualizado){
            return res.status(404).json({message: "Estudiante no encontrado para actualizar"})
        }
        res.json({studentActualizado})
    }catch(error){
        res.status(500).json({error: error.message});
    }
})

//DELETE /api/student/uid : Borrar un estudiante
router.delete('/:uid', async (req, res) =>{
    try{
        const studentDeleted = await studentModel.findByIdAndDelete(req.params.id);
        if(!studentDeleted){
            return res.status(404).json({message: "Estudiante no encontrado para borrar"})
        }
        res.json({studentDeleted})
    }catch(error){
        res.status(500).json({error: error.message});
    }
})

export default router;