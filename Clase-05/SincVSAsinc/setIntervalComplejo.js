const contador = (callback) => {
    let counter = 0;
    console.log("Inicia el intervalo");
    let timer = setInterval(
            function(){
                callback(counter++);
                if(counter > 5){
                    clearInterval(timer); //Se apaga después de contar 5
                }
            }
            , 1000 // Se ejecute cada 2 segundos
        )
}

let operacion = (counter) => console.log(`Realizando operación ${counter}`);
let otraOperacion = (counter) => console.log(`Realizando otra operación ${counter}`);

console.log("¡Iniciando tarea!");
contador(operacion);
contador(otraOperacion);
console.log("¡Tarea finalizada!");

/** 
 * Orden de salida:
 * 
 */