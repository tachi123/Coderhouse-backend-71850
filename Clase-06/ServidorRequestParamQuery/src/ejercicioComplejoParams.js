import express from 'express';

const app = express();
const usuarios = [
    {id: "1", nombre: "Mauricio", apellido: "Espinosa", edad: 25},
    {id: "2", nombre: "Natalia", apellido: "Cardozo", edad: 23},
    {id: "3", nombre: "Roberto", apellido: "Gómez", edad: 30}
]

app.listen(8080, () => console.log("Listo para recibir peticiones"));

//Endpoint raíz '/' devolver todos los usuarios
app.get('/',(req,res) => {
    res.json({usuarios}); //Se recomienda enormemente mandar los datos en formato objeto en lugar
    //de enviarlos como un array solo, esto permite que, si vamos a meter mas info en el futuro
    //no tengamos que cambiar el tipo de respuesta del lado del cliente
})

//Endpoint '/:userId' deolver un usuario particular
app.get('/:idUsuario', (req,res) => {
    let idUsuario = req.params.idUsuario;//Obtenemos el id del usuario a trabajar
    //Procedemos a buscar el usuario que tenga el id pasado por params
    let usuario = usuarios.find( user => user.id === idUsuario);
    //Si no se encuentra el usuario, debemos finalizar devolviendo un error
    if(!usuario) return res.send({error: "Usuario no encontrado"});
    //En caso que no haya finalizado la función, significa que el usuario sí se encontró
    res.send({usuario});
})