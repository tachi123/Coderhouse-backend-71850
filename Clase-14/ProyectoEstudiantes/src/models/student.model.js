import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    edad: {type: Number, required: true},
    dni: {type: String, required: true, unique: true},
    curso: {type: String, required: true},
    nota: {type: Number, required: true}
});

const studentModel = mongoose.model('Students', studentSchema);

export default studentModel;