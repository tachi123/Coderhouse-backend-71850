//Ejemplo de setInterval simulando sincronismo
let contador = 0;

console.log("¡Iniciando tarea!");
//setInterval(callback, milisegundos)
setInterval(
    function(){
        console.log("Contador: ",contador++);
        if(contador >= 5){
            clearInterval();
            console.log("Se ha detenido el intervalo");
        }
    }
    , 2000 // Se ejecute cada 2 segundos
)

console.log("¡Tarea finalizada!");

/** 
 * Orden de salida:
 * 
 */