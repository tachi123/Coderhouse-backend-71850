import fs from 'fs';

class UserManager{

    constructor(){
        this.filePath = './Usuarios.json';
    }

    //Almacenar el usuario en el archivo
    async createUser(user){
        try{
            //1. Leer el archivo y obtenemos un objeto de los usuarios
            let usuarios = await this.getUsers();
            //2.Agregar el usuario al listado de usuarios
            let existeUser = usuarios.find(u => u.id === user.id);
            if(existeUser)
                throw new Error("El usuario ya existe");
            usuarios.push(user);
            //3. Escribir el archivo            
            await fs.promises.writeFile(this.filePath, JSON.stringify(usuarios,null,2)); //Guardando le objeto en string con identación
            console.log("Usuario creado exitosamente");
        }catch(error){
            console.error("Error al crear usuario: ",error)
        }
    }

    //Leer los usuarios del archivo y retorno un objeto array con los usuarios
    async getUsers(){
        try{
            const users = await fs.promises.readFile(this.filePath, 'utf-8');
            return JSON.parse(users);        
        }catch(error){
            console.error("Error al leer usuarios: ",error)
        }
    }
}

export default UserManager;