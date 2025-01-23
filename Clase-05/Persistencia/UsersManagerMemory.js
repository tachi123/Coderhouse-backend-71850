import fs from 'fs';
//UserManager almacena en memoria los datos
class UserManager{

    constructor(){
        this.usuarios = [];
    }

    //Almacenar el usuario en el archivo
    async createUser(user){
        try{
            this.usuarios.push(user);
            console.log("Usuario creado exitosamente");
        }catch(error){
            console.error("Error al crear usuario: ",error)
        }
    }

    //Leer los usuarios del archivo y retorno un objeto array con los usuarios
    async getUsers(){
        try{
            return this.usuarios;  
        }catch(error){
            console.error("Error al leer usuarios: ",error)
        }
    }
}

export default UserManager;