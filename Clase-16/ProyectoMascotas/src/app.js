import mongoose from "mongoose";

//Importar los modelos
import userModel from './models/user.model.js';
import petModel from './models/pet.model.js';

const mongoURL = 'mongodb://localhost:27017/proyectoMascotas';

const init = async () =>{
     await mongoose.connect(mongoURL);

     //Crear un usuario
     const newUser = new userModel({name: "Mauricio"});
     await newUser.save();

     //Crear dos mascotas
     const pet1 = new petModel({name: "Orejitas"});
     const pet2 = new petModel({name: "Patitas"});
     await pet1.save();
     await pet2.save();

    //Agregar las mascotas al usuario (usamos el _id de la mascota para agregarlo)
    //Nota que no agregamos _id = pet1._id, si no, que tenemos que utilizar el nombre del campo que pusimos a la hora de crear el esquema
    newUser.pets.push({ pet: pet1._id});
    newUser.pets.push({ pet: pet2._id});
    await newUser.save();

}

//init();

//Buscamos al usuario con sus mascotas (utilizando populate)
const test = async () => {
    await mongoose.connect(mongoURL);

    const userWithPets = await userModel.find(); //.populate('pets.pet'); lo saco porque lo agregue como middleware
    console.log(JSON.stringify(userWithPets, null, 2));
}

test();