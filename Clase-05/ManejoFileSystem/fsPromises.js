import fs from 'fs';  //const fs = require('fs');

let pathArchivo = './ejemplo.txt';

//Creamos una función que nos permita trabajar de forma asíncronica
const main =
    async () => {
        try{
            //Escribimos un archivo
            await fs.promises.writeFile(pathArchivo, "¡Hola Coders, estoy en un archivo!");
            //Utilizar el módulo de promises nos facilita la operación para no requerir los callback
            let contenido = await fs.promises.readFile(pathArchivo, 'utf-8')
            console.log(contenido);
            //Modificamos el archivo
            await fs.promises.appendFile(pathArchivo, "Más contenido.")
            contenido = await fs.promises.readFile(pathArchivo, 'utf-8')
            console.log(contenido) 
            //Finalmente, borramos el archivo
            await fs.promises.unlink(pathArchivo);
        }catch(error){
            console.error("Error durante las operaciones con archivos.", error)
        }
}
console.log("Inicia la aplicación");
main();
console.log("Finaliza la aplicación");