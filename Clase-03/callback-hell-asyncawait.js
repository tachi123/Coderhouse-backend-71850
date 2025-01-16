/**Voy a simular la preparación de un desayuno*/
function prepararHuevos(){
    return new Promise( (resolve, reject) => {
        console.log("Preparar los huevos...");
        //Simular el tiempo de cocción
        setTimeout( 
            () => {
                console.log("¡Huevos listos!");
                resolve("Huevos");
            },
        2000) //Cantidad de milisegundos
    })
}
function prepararTostadas(){
    return new Promise( (resolve, reject) => {
        console.log("Preparar las tostadas...");
        //Simular el tiempo de cocción
        setTimeout( 
            () => {
                console.log("Tostadas listas!");
                resolve("Tostadas");
            },
        4000) //Cantidad de milisegundos
    })
}
function exprimirJugo(){
    return new Promise( (resolve, reject) => {
        console.log("Exprimiendo el jugo de naranja...");
        //Simular el tiempo de cocción
        setTimeout( 
            () => {
                console.log("¡Jugo de naranja listo!");
                resolve("Jugo de naranja");
            },
        2000) //Cantidad de milisegundos
    })
}

const prepararDesayunoAsincronicamente = async (callback) => {
    try{
        let huevos = await prepararHuevos();
        let tostadas = await prepararTostadas();
        let jugo = await exprimirJugo();
        console.log("¡Desayuno completo! Tenemos: ", huevos, tostadas, jugo);
    }catch(error){
        console.log(error);
    }
}

console.log("HOLA");
prepararDesayunoAsincronicamente();
/**Si quisieramos que las tres funciones se ejecuten en paralelo sería así 
prepararDesayunoAsincronicamente(prepararHuevos);
prepararDesayunoAsincronicamente(prepararTostadas);
prepararDesayunoAsincronicamente(exprimirJugo);
*/
console.log("CHAU");