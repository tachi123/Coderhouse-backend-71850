import fs from 'fs';

const pathArchivo = "./fechaHora.txt";

function guardarFechaHora(){
    let fechaHoraActual = new Date().toLocaleString();
    fs.writeFile(pathArchivo, fechaHoraActual, (error) => {
        if(error){
            console.error("Error al escribir el archivo")
        }else{
            console.log("Fecha y hora guardadas correctamente");
        }
    });
}

function leerFechaHora(){
    fs.readFile(pathArchivo, 'utf-8', (error, resultado) => {
        if(error){
            console.error("Error al leer el archivo")
        }else{
            console.log("Fecha y hora almacenadas: ",resultado);
        }
    });
}

guardarFechaHora();
leerFechaHora();