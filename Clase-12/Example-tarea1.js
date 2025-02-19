

//Actualizar los documentos
const result = await userCollection.updateMany( { sexo: 'femenino'} , { $inc: {edad : 1 }})


const usuarios = await 
    collection.find({}, { projection: { nombre: 1, apellido: 1 } })
    .sort({ nombre: 1 })
    .toArray();