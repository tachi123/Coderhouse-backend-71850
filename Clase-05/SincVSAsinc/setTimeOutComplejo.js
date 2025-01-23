const temporizador = (callback) => {
    setTimeout(
        function(){
            callback();
        }
        , 5000) //5 segundos en milisegundos
};

let operacion = () => console.log("Realizando operación");
let otraOperacion = () => console.log("Realizando otra operación");

console.log("¡Iniciando tarea!");
temporizador(operacion);
temporizador(otraOperacion);
console.log("¡Tarea finalizada!");