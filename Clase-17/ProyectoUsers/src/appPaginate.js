/** Ejemplo de resultados de paginación */
import userModel from './models/user.model.js';
import mongoose from 'mongoose';

const mongoURL = 'mongodb://localhost:27017/tuBaseDeDatos';

const environment = async () => {
    await mongoose.connect(mongoURL);

    let users = await userModel.paginate(
        {}, //Filtros de los datos, si mandamos {} es que no filtramos por nada y obtenemos todo
        { 
            limit: 10,
            page: 1,
            sort: { last_name: -1}  //Orden descendente por last_name 
            //Cuando se ordena por strings primero ordena por Mayúsculas y luego por minúsculas
        }
    );

    console.log(users);
}

environment();