/** ESTRUCTURA COMÚN DE LOS CALLBACK */
const ejemploCallback = (error, resultado) => {
    if(error){
        //hacer algo con el error
    }else{
        //hacer algo con el resultado
    }
}

/**Voy a simular la preparación de un desayuno*/
function prepararHuevos(callback){
    console.log("Preparar los huevos...");
    //Simular el tiempo de cocción
    setTimeout( 
        () => {
            console.log("¡Huevos listos!");
            callback( null, "Huevos");
        },
    2000) //Cantidad de milisegundos
}
function prepararTostadas(callback){
    console.log("Preparar las tostadas...");
    //Simular el tiempo de cocción
    setTimeout( 
        () => {
            console.log("Tostadas listas!");
            callback( null, "Tostadas");
        },
    4000) //Cantidad de milisegundos
}
function exprimirJugo(callback){
    console.log("Exprimiendo el jugo de naranja...");
    //Simular el tiempo de cocción
    setTimeout( 
        () => {
            console.log("¡Jugo de naranja listo!");
            callback( null, "Jugo de naranja");
        },
    2000) //Cantidad de milisegundos
}

prepararHuevos( (error, huevos)  => {
    if(error){
        console.error("Error con los huevos", error);
    }else{
        prepararTostadas( (error, tostadas)  => {
            if(error){
                console.error("Error con las tostadas", error);
            }else{
                exprimirJugo( (error, jugo) => {
                    if(error){
                        console.error("Error con el jugo", error);
                    }else{
                        console.log("¡Desayuno completo! Tenemos: ", huevos, tostadas, jugo);
                    }
                })
            }

    })
    }
})