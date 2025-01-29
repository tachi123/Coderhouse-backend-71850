import express from 'express';

const app = express();

app.use(express.json()); //Como indica el método, ahora el servidor podrá recibir jsons al momento de la petición
app.use(express.urlencoded({encoded: true})); //Permite que se pueda enviar información también desde la URL

app.listen(8080, () => { console.log("Escuchando en el puerto 8080")});

let users = [
    {id: "1", first_name: "Nahuel", last_name: "Ramirez"}
]; //Acá vamos a almacenar los usuarios que vayamos creando.

//Método GET: Obtener todos los usuarios
app.get('/api/user', (req,res) => {
    res.json({users});
});

//Método GET: Obtener info de un usuario específico
app.get('/api/user/:id', (req,res) => {
    const userId = req.params.id;
    const user = users.find( user => user.id === userId); //Estamos comparando STRINGS
    if(!user){
        return res.status(404).send({status:"error", error: "User not found"});
    }
    res.json({user});
});

//Método POST: Crear un nuevo recurso (un usuario)
app.post('/api/user', (req,res) => {
    //Recordamos que en el req.body es el JSON que enviará el usuario al momento de hacer la solicitud
    let user = req.body;
    //Validamos que se cumplan criterios de campos antes de agregarlos
    if(!user.first_name||!user.last_name){
        //Si no mando los datos, es un error cliente, entonces devolveremos un estado relacionado a la gama de errores del cliente
        return res.status(400).send({status:"error",error: "Incomplete values"});
    }
    users.push(user);
    res.status(201).send({status:"success", message: "User created"});
});

//Método PUT: Actualizar un recurso (información de un usuario)
app.put('/api/user/:id', (req,res) => {
    const userId = req.params.id;
    const updatedUser = req.body;
    //Buscamos el índice o la posición en el array del usuario que queremos actualizar usando el ID
    const userIndex = users.findIndex(user => user.id === userId);
    if(userIndex === -1){
        return res.status(404).send({status:"error", error: "User not found"});
    }
    /**
     * Opción 1: Actualización completa del usuario - Reemplazamos el usuario completo
     * users[userIndex] = updatedUser;
     */
    //Opición 2: Actualización parcial del usuario - Actualizar solo los campos que vienen en el request
    users[userIndex] = { ...users[userIndex], ...updatedUser};
    res.send({status: "success", message: "User updated"});
});

//Método DELETE: Eliminar un recurso (un usuario)
app.delete('/api/user/:id', (req,res) => {
    const userId = req.params.id;
    //Buscamos el índice o la posición en el array del usuario que queremos eliminar
    const userIndex = users.findIndex(user => user.id === userId);
    if(userIndex === -1){
        return res.status(404).send({status:"error", error: "User not found"});
    }
    users.splice(userIndex, 1);
    res.send({status: "success", message: "User deleted"});
});