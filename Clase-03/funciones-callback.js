/**
 * Funciones callback - Pasamos una función como argumento
 */
function ejecutarTarea(callback){
    //...
    callback(); //Ejecutamos el callback - ejecutamos la función que recibimos como argumento
    //...
}
ejecutarTarea( () => console.log("Paso 1"));
ejecutarTarea( () => console.log("Paso 2"));

//Al utilizar arrays, aplicamos métodos usando "callback" a cada elemento
let nombres = ["Ana" , "Nahuel", "Mariano"];
nombres.forEach(
    //Callback con una función flecha
    nombre => console.log(nombre)
)
nombres.forEach(
    //Callback con una función tradicional
    function(nombre){ console.log(nombre) }
)

//Ejemplo de callback para agregar un comportamiento a un evento de un elemento
/*const unButton = document.getElementById("button");
unButton.addEventListener("click", 
    //CALLBACK
    function(){
        console.log("Soy una función anónima");
    }
);*/

/**
 * ACTIVIDAD - Ejemplo map con callback
 */
//Utilizamos un arrelgo de prueba
let valoresOriginales = [1,2,3,4,5];

//Estamos acostumbrados a ver una función map de la siguiente manera
let nuevosValores = valoresOriginales.map( x => x + 1); //[2,3,4,5,6];

/** 
 * Lo que mandamos a la función map, es una función flecha que en este caso suma 1 el valor
 * ¿Siempre hace lo mismo a cada elemento? ¡No! Nosotros podemos meter la operación que querramos
 */
let otrosValores = valoresOriginales.map( x => x * 2); //[2,4,6,8,10];
let masValores = valoresOriginales.map( x => "a"); //["a","a","a","a","a"];

console.log(valoresOriginales, otrosValores, masValores);

/**
 * Notamos que no importa cuánto cambie la función que estamos metiendo dentro de map
 * SIEMPRE Y CUANDO map esta hecho para recibir una función como parámetro y que pueda
 * ejecutarla cuando lo considere pertienente.
 */
//Voy a estructurar una función que si es un número par, me devuelve el número. Y si no retorna "no es par"
const funcionCallback = (valor) => {//Función evalúa si el valor del número es par
    if(valor % 2 === 0){
        return valor;
    }else{
        return "no es par"
    }
}

const evaluacionDePares = valoresOriginales.map(funcionCallback); //Estoy pasando la función completa como argumento del map
console.log(evaluacionDePares); //Resultado: [ 'no es par', 2, 'no es par', 4, 'no es par' ]

/**
 * Funciones MAP
 */
/** RECREAMOS EL FUNCIONAMIENTO INTERNO DE LA FUNCIÓN MAP */
const miFuncionMap = (array, callback) => {
    let nuevoArray = [];
    for(let i = 0; array.length > i; i++){
        let nuevoValor = callback(array[i]); //El callback que recibí arriba lo estoy ejecutando a cada elemento
        nuevoArray.push(nuevoValor);
    }
    return nuevoArray;
}

//Ponemos en comparación nuestra función map frente a la función map original
let valoresPrueba = [1,2,3,4,5];
let nuevoArregloPropio = miFuncionMap(valoresPrueba, x => x*2); //El resultado será: [2,4,6,8,10]
let nuevoArregloConMap = valoresPrueba.map( x => x*2 ); //El resultado será: [2,4,6,8,10]
console.log(nuevoArregloConMap);
console.log(nuevoArregloPropio);

/**
 * EXTRA: Si queremos crear una función que se ejecute sobre un array
 * y no queremos pasarlo como parámetro
 */
Array.prototype.miFuncionMap = ( callback) => {
    let nuevoArray = [];
    for(let i = 0; this.length > i; i++){
        let nuevoValor = callback(this[i]); //El callback que recibí arriba lo estoy ejecutando a cada elemento
        nuevoArray.push(nuevoValor);
    }
    return nuevoArray;
}

let valoresPor2 = valoresPrueba.miFuncionMap( x => x*2);