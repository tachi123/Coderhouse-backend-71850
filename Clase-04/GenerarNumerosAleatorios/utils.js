/* Archivo donde voy a crear funciones que voy a reutilizar en mi proyecto */
const generarUnNumeroAleatorio = (min,max) => Math.floor(Math.random() * (max-min+1)) + 1;

export const generarNumerosAleatorios = cantidad => {
    return new Promise((resolve, reject) => {
        let numeros = [];
        for(let i=0; i < cantidad; i++){
            numeros.push(generarUnNumeroAleatorio(1,20));
        }
        resolve(numeros);
    })
}

export const contarFrecuencia = numeros => {
    return new Promise((resolve, reject) => {
        let frecuencia = {};
        numeros.forEach(
            numero => {
                if(frecuencia[numero]){
                    frecuencia[numero]++;
                }else{
                    frecuencia[numero] = 1;
                }
            });
        resolve(frecuencia);
    })
}