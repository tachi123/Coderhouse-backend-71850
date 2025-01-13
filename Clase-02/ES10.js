/**
 * String.trim()
 * Remover espacios innecesarios de una cadena
 * Validar si las cadenas recibidas vienen vacías o para eliminar espacios innecesarios (adelante o al final)
 */
let username = `        `;
console.log(username.trim());
if(username.trim().length > 0){
    //CREO EL USUARIO
    console.log("Creo el usuario");
}else{
    //arrojo un error y digo que el username es inválido
    console.log("Username inválido");
}

/**
 * Array.flat(): remover anidaciones internas en arrays
 */
let arrayAnidado = [1132,10,15,[10,5,2,3],[22]];
console.log(arrayAnidado.flat()); //[1132, 10, 15, 10,5,  2,  3, 22]