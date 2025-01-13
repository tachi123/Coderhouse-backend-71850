/**
 * Operador OR || 
 * Si lo usamos para asignar valores por defecto
 * Entiende que una variable no tiene valor usando los valores falsey
 * Falsey: null, undefined, false, 0, "", NaN
 */
let variable = "";
//Operador OR
console.log(`Variable con OR: ${variable || "Sin valor"}`); //Falsey: null, undefined, false, 0, "", NaN
//Operador Nullish
console.log(`Variable con ??: ${variable ?? "Sin valor"}`); //null o undefined
