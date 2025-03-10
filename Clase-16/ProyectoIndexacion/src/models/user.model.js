import mongoose from 'mongoose';

const userCollection = 'users';

const userSchema = mongoose.Schema({
    first_name: {
        type: String,
        index: true
    },
    last_name: String,
    email: String,
    gender: String
})

//Índice simple
userSchema.index({ email: 1}); //Esto es igual que agregar la propiedad index:true en el campo email
//Índice simple descendente
userSchema.index({email: -1});

//Índice compuesto: cuando necesitamos ordenar los datos por más de un campo
userSchema.index({last_name: 1, first_name: -1}); //Creamos un índice compuest ocon "last_name" ascendente y "first_name" descendente

//Índice múltiple llave (multikey): cuando queremos buscar valores dentro de un "array"
//Si hubiera un camop de ejemplo --- hobbies: [String]
//userSchema.index({hobbies: 1}); //Creamos un índice multikey para el campo hobbies que esuna rray

//Índice de texto
//userSchema.index({resumen: 'text'}); //Crear un índice de texto para el campo "resuemn"

//Índice geoespacial (2dsphere) (Geospatial): Para trabajar con datos de ubicación, como coordenadas geográficas
/**
 * location: {
        type: {type: String, default: 'Point'},
        coordinates: [Number] // [ longitud, latitud]
    }

    Creación del índice
 */
//userSchema.index({location: '2dsphere'}); //Crear un índice geoespacial 2dsphere para el campo 'location'

const userModel = mongoose.model(userCollection, userSchema);

export default userModel;