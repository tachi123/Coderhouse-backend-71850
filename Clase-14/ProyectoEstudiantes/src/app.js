import express from 'express';
import mongoose from 'mongoose';
import studentRouter from './routes/student.router.js';

const urlMongo = 'mongodb+srv://coderuser:coderuser123@cluster0.zdw0s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const port = 8080;

const app = express();

//Middleware para analizar el cuerpo de las solicitudes
app.use(express.json());
app.use(express.urlencoded({encoded: true}));

mongoose.connect(urlMongo)
    .then( () => console.log("Conexión a MongoDB Atlas exitosa"))
    .catch( error => console.error("Error al conectar a MongoDB Atlas: ", error));


app.listen(port, () => console.log(`Listening on PORT: ${port}`));

app.use('/api/student', studentRouter);
