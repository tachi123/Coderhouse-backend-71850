/** 
 * FUNCIONES
 */
/**
 * FUNCIONES DEFINIDAS
 * No se reasignan para mantener la coherencia y evitar confusiones de código
 */
//Funciones tradicionales
function suma(a,b){
    return a + b;
}

//Funciones flecha
const sumarFlecha = (a,b)  => a + b;

/**
 * FUNCIONES ANÓNIMAS - No tienen nombre
 * Se definen y se ejecutan de inmediato
 * Se usan como argumento de las funciones (CALLBACK)
 */
//Funciones anónimas que se ejecutan de inmediato
(
    function(){
        console.log("Soy una función anónima");
    }
)(); //Se ejecuta inmediatamente
(
    () => console.log("Soy también una función anónima")
)(); //Se ejecuta inmediatamente

//Funciones anónimas que se usan como argumento - CALLBACK
let unArray = [1,2,3,4,5];
let elDobleDeCadaNumero = unArray.map(unNumero => unNumero * 2);

console.log(elDobleDeCadaNumero);

/**
 * Funciones flecha - Modificar el comportamiento de funciones
 */
//Actualizar el comportamiento dinámicamente
let generarEnemigos = () =>  {
    //Lógica para generar enemigos en el nivel 1
}

generarEnemigos = () =>  {
    //Lógica para generar enemigos en el nivel 2
}

/** Usamos funciones solo para ser mas claros */
//PREPARAR UN DESAYUNO
servirCafe();
servirMedialunas();
servirJugo();