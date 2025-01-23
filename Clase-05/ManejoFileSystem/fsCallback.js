import fs from 'fs';  //const fs = require('fs');

let pathArchivo = './ejemplo.txt';

//FS nos permitirá acceder a las operaciones para archivos
fs.writeFile(pathArchivo, "¡Hola Coders, estoy desde callback!", (error)  => {
    /**
     * Notamos que la operación es similar, pero ahora estamos metiendo un callback para
     * preguntar si algo salió mal durante la escritura del archivo
     */
    if(error) return console.log("Error al escribir el archivo");
    fs.readFile(pathArchivo, 'utf-8', (error,resultado) => {
        /**Los mismos argumentos del readFileSync, solo que esta vez al final mandamos un callback
         * El primer argumento para saber si hubo error
         * y un segundo argumento para el resultado de esa lectura
         */
        if(error) return console.log("Error al leer el archivo");
        console.log(resultado);
        fs.appendFileSync(pathArchivo, "Más contenido.", (error) => {
            /**
             * Hasta este punto nos empezamos a preocupar, porque estamos armando un callback hell
             * Tenemos que tener mucho cuidado cuando trabajamos con callback y con archivos
             */
            if(error) return console.log("Error al acutalizar el archivo");
            fs.readFile(pathArchivo, 'utf-8', (error, resultado) => {
                //Volvemos a leer el archivo para corroborar el cambio
                if(error) return console.log("Error al leer el archivo")
                console.log(resultado)
                fs.unlink(pathArchivo, (error) => {
                    if(error) return console.log("Nose pudo eliminar el archivo")
                });
            })
            
        })
    })
});

    
