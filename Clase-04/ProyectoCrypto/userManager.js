import crypto from 'crypto';

export class UserManager {
    static usuarios = []; //Atributo para almacenar usuarios

    static crearUsuario(nombre, apellido, username, contrasena){
        //Hashear la contraseña
        const hash = crypto.createHmac('sha256','clave_secreta').update(contrasena).digest('hex');
        UserManager.usuarios.push({nombre, apellido, username, contrasena: hash});
        console.log("Usuario creado exitosamente");
    }

    static mostrarUsuarios(){
        console.log('Lista de usuarios:');
        UserManager.usuarios.forEach(
            user => {
                console.log(`- Nombre: ${user.nombre}, Apellido: ${user.apellido}, Username: ${user.username}, Password: ${user.contrasena}`)
            })
    }

    static validarUsuario(usernameIngresado, contraseniaIngresada){
        const usuarioEncontrado = UserManager.usuarios.find( u => u.username === usernameIngresado);
        if(!usuarioEncontrado){
            console.error("Usuario no encontrado");
            return;
        }
        const hashGuardado = usuarioEncontrado.contrasena;
        const hashIngresado = crypto.createHmac('sha256','clave_secreta').update(contraseniaIngresada).digest('hex');
        if(hashGuardado === hashIngresado){
            console.log("Login exitoso");
        }else{
            console.error("Contraseña incorrecta");
        }
    }


}