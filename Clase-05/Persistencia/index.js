import UserManager from './UsersManager.js';

const userManager = new UserManager();

async function main(){
    try{
        //Crear un usuario
        await userManager.createUser(
            { 
                id : "1",
                nombre: "Nahuel",
                apellido: "Ramírez",
                edad: 33,
                curso: "Programación backend"
            }
        )
        //Consultar usuarios
        let usuarios = await userManager.getUsers();
        console.log("Usuarios: ",usuarios);
    }catch(error){
        console.error("Error en la aplicación ",error)
    }
}

main();