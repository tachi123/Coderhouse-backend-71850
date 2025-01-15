const sumar = (num1, num2) => num1 + num2;
const restar = (a,b) => { return a - b};
const multiplicar = (a,b) => a * b;
const dividir = (a,b) => a / b;

//Cuando creamos esta función no sabemos que operación va a recibir como callback
const realizarOperacion = ( num1, num2 , callback) =>{
    console.log("Voy a realizar una operación pero acá no se cual va a ser");
    let resultado = callback(num1,num2);
    //No sabemos cuál de las 4 funciones será, pero eso a nosotros no nos importa
    //Nosotros solo ejecutamos la operación y devolvemos el resultado
    console.log(`El resultado de la operación que no supe cuál fue, es: ${resultado}`);
}
realizarOperacion(2,5,sumar); //El resultado de la operación es 7
realizarOperacion(2,5,restar); //El resultado de la operación es -3
realizarOperacion(2,5,multiplicar); //El resultado de la operación es 10
realizarOperacion(2,5,dividir); //El resultado de la operación es 0.4

/**
 * Analizamos, realizarOperacion recibe una función callback y la ejecuta por dentro,
 * perooo.... ¡No tiene idea de qué hace la función, SOLO la ejecuta!
 * Así que hay que tener siempre cuidado de lo que pasamos como callback,
 * ya que si pasamos una función que no sea compatible con los valores que se esté trabajando
 * podríamos romper el código por el cual le pasamos el callback
 */