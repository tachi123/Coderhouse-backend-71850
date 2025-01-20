import { generarNumerosAleatorios, contarFrecuencia } from "./utils.js";

async function main(){
    try{
        let numeros = await generarNumerosAleatorios(10000);
        console.log("Números aleatorios generados exitosamente");
        let frecuencias = await contarFrecuencia(numeros);
        console.log("Termino la generación de frecuencia");
        console.log(frecuencias);
    }catch(error){
        console.error("Error durante la ejecución de la generación de números", error);
    }
}
console.log("Inicia el programa");
main();
console.log("Finaliza el programa");