/**
 * Métodos asociados al trabajo con objetos
 */
let impuestos = {
    impuestoGas : 2000,
    impuestoLuz: 3000,
    impuesto3: 312000,
    impuesto4: 30000,
    impuesto5: 30030,
    impuesto6: 3000,
}
console.log(impuestos);

//Object.entries
let parLlaveValor = Object.entries(impuestos);
console.log(parLlaveValor);

//Object.keys --- quedarme con las propiedades o las keys
let soloPropiedades = Object.keys(impuestos); //[ 'impuestoGas', 'impuestoLuz' ]
console.log(soloPropiedades);

//Object.values --- quedarme con los valores o los values
let soloValores = Object.values(impuestos); //
console.log(soloValores);
let impuestosTotales = soloValores.reduce(
    (valorInicial , valorAcumulado) => valorAcumulado+valorInicial
)

impuestosTotales = Object.values(impuestos).reduce( (valorInicial , valorAcumulado) => valorAcumulado+valorInicial);

console.log(`Impuestos totales: ${impuestosTotales}`);

/**
 * Operador NULLISH ??
 * Para asignar valores por defecto
 * Entiende que una variable no tiene valor cuando es NULL o UNDEFINNED
 */
let nombre;
//let saludo = nombre ? nombre : "Invitado"; // condición ? TRUE : FALSE;
let saludo = nombre ?? "Invitado";
console.log(saludo);


/**
 * Propiedades privadas
 */
class Persona{

    #dni;

    constructor(nombre, apellido, dni){
        //Atributos de instancia
        this.nombre = nombre;
        this.apellido = apellido ?? "S/D";
        this.#dni = dni ?? "S/D";
    }


    //Getter MÉTODOS PARA MOSTRAR LAS PROPIEDADES
    get dni(){
        return this.#dni;
    }

    //Setter MÉTODOS PARA SETEAR
    //No voy a crear ninguno para DNI
}

const unaPersona = new Persona("Nahuel", "Ramirez", "36363636");
//unaPersona.dni = "asdfasdf"; //Esta línea de código agrega otra propiedad PÚBLICA distinta a la privada por más que se llamen igual
console.log(`${unaPersona.nombre} ${unaPersona.apellido} tiene como dni: ${unaPersona.dni}`);

class Circulo{

    #radio = 0;

    constructor(radio){
        this.#radio = radio;
    }

    get radio(){
        return this.#radio;
    }

    get diametro(){
        return this.#radio * 2;
    }

    get area(){
        return Math.PI * this.#radio**2;
    }

    #metodosPrivados(){
        
    }

/*
    set radio(nuevoRadio){
        if(nuevoRadio > 0) 
            this.#radio = nuevoRadio;
    }
*/
}

const miCirculo = new Circulo(5);
miCirculo.radio = 10;
console.log(`El radio de mi círculo es: ${miCirculo.radio}`);
console.log(`El diametro de mi círculo es: ${miCirculo.diametro}`);
console.log(`El área de mi círculo es: ${miCirculo.area}`);