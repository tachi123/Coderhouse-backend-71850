/**
 * Simulación de lectura de un archivo asincrónica
 */
function escribirArchivo(ms, callback){//Tardanza de la escritura del archivo
    console.log("Simulando escritura en archivo....");
    setTimeout(
      ()  => {
        console.log(`Escritura completada en ${ms/1000} segundos.`)
        callback();
      }
    , ms); //Simulamos la demora de la escritura del archivo
}
console.log("Inicio del programa");
escribirArchivo(8000, () => { console.log("Termine de escribir el archivo A") });
escribirArchivo(2000, () => { console.log("Termine de escribir el archivo B") });
console.log("Fin del programa");