console.log("¡Iniciando tarea!");

//setTimeOut( callback , milisegundos)
setTimeout(
    function(){
        console.log("Realizando operación");
    }
    , 5000 //5 segundos en milisegundos
)

console.log("¡Tarea finalizada!");