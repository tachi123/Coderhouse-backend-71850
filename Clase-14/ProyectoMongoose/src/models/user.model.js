import mongoose from 'mongoose';

const userCollection = "usuarios"; //Así es como se llamará la colección en nuestra base de datos

const userSchema = new mongoose.Schema({
    //Seteamos las propiedades que queremos que un usuario tenga en la aplicación
    first_name: {
        type: String,
        required: true
    },
    last_name: String, //Si solo necesitamos setear el tipo de dato, con los : alcanza
    email: { //Si queremos especificar más detalles, usamos las {}
        type: String,
        unique: true,
        required: true
    }
})

/**
 * Ahora con mongoose.model generamos el modelo funcional de un usuario conectandose a la base de datos
 * mongoose.model( nombre de la colección, el esquema definido usando mongoose.Schema())
 */

export const userModel = mongoose.model(userCollection, userSchema);