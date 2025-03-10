import mongoose from 'mongoose';

const studentCollection = "students";

const studentSchema = mongoose.Schema({
   first_name: String,
   last_name: String,
   email: String,
   gender: String,
   grade: String,
   group: String
})

const studentModel = mongoose.model(studentCollection, studentSchema);

export default studentModel;