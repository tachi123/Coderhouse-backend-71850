import express from 'express';
import userRouter from './routes/user.router.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

//Cargamos las variables de entorno
dotenv.config();
const urlMongo = process.env.URI_MONGO;
const port = process.env.PORT;

const app = express();

//Middleware para analizar el cuerpo de las solicitudes
app.use(express.json());
app.use(express.urlencoded({encoded: true}));

app.listen(port, () => console.log(`Listening on PORT: ${port}`));

mongoose.connect(urlMongo)
    .then()
    .catch();

app.use('/api/user', userRouter);