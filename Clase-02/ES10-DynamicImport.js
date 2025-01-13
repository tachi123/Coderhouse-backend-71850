// "type" : "module"
/**
 * ARCHIVO QUE GUARDA EL MÓDULO CALCULADORA
 */
//Crear una calculadora como módulo
export default class Calculadora{
    sumar = (num1,num2) => num1+num2;
    restar = (num1,num2) => num1-num2;
}

/**
 * ARCHIVO PRINCIPAL DE NUESTRA APLICACIÓN
 */
//imports estáticos
//import Calculadora from 'calculadora';
//++++ IMPORTS

if(PASA ALGO){
    //lo importo
    const {default: Calculadora} = await import('calculadora');
}
