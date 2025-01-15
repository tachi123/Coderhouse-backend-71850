/** ESTRUCTURA DE PROMESA */
function crearPromesa(){
    return new Promise( (resolve, reject) => {
        //Las acciones a las que me comprometo
    })
}

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

prepararHuevos()
    .then( huevos => {
        console.log("Huevos listos", huevos);
        return prepararTostadas();
    })
    .then( tostadas => {
        console.log("Tostadas listas", tostadas);
        return exprimirJugo();
    })
    .then( jugo => {
        console.log("Jugo de naranja listo", jugo);
        console.log("¡Desayuno completo! Tenemos: ", huevos, tostadas, jugo);
    })
    .catch(error => { 
        console.error("Hubo un error", error)
    })