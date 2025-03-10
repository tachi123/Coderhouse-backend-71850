import mongoose from 'mongoose';

const userCollection = 'users';

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    pets: [
        {
            pet: {
                type: mongoose.Schema.Types.ObjectId, 
                ref: 'pets'
            }
        }
    ]
    // ... otros campos para el usuario
});

//Middleware de mongoose: "pre" antes que se complete una operación especifica, voy a querer que realice otra función
userSchema.pre('find', function(next){
    this.populate('pets.pet');
    //Agregar todas las acciones que quiero que se ejecuten antes que se complete el find
    next();
})
/**
        userSchema.pre('create', function(next){
            //codifiques la contraseña
            next();
        })
*/

const userModel = mongoose.model(userCollection, userSchema);

export default userModel;