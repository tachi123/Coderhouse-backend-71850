import fs from 'fs';  //const fs = require('fs');

let pathArchivo = './ejemplo.txt';

//FS nos permitirá acceder a las operaciones para archivos
fs.writeFileSync(pathArchivo, "¡Hola Coders, estoy en un archivo!");
/**
 * Primera operación para escribir un archivo
 * El primer parametro es la ruta y nombre del archivo
 * Y el segundo es el contenido
 */

if(fs.existsSync(pathArchivo)){ //existsSync devuelve true o false si el archivo existe
    let contenido = fs.readFileSync(pathArchivo, 'utf-8')
    /**
     * readFileSync lee el contenido del archivo, es importante el segundo parametro
     * donde ponemos el encoding que usamos para leerlo. En este curso sólo abarcamos utf-8
     */
    console.log(contenido);
    fs.appendFileSync(pathArchivo, "Más contenido.")
    /**
     * appendFileSync buscará primero la ruta del archivo, si no encuentra ningún archivo, lo crea
     * y si lo encuentra, en lugar de sobreescribir el archivo, va a agregar el contenido al final
     */
    contenido = fs.readFileSync(pathArchivo, 'utf-8')
    console.log(contenido) //Esta ves saldrá: ¡Hola Coders, estoy en un archivo!Más contenido.
    fs.unlinkSync(pathArchivo);
    //Esta última línea, eliminará el archivo independientemente del contenido
}