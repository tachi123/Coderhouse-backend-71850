import { UserManager } from './userManager.js';

//Crear usuarios
UserManager.crearUsuario("Nahuel", "Ramírez", 'nahuelramirez', '1234');
UserManager.crearUsuario("Javier", "Medina", 'username1', '1234');

//Mostrar usuarios
UserManager.mostrarUsuarios();

//Validar contraseña
UserManager.validarUsuario("username1","12345");