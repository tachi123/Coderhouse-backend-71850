/**
 * Operador OR || 
 * Si lo usamos para asignar valores por defecto
 * Entiende que una variable no tiene valor usando los valores falsey
 * Falsey: null, undefined, false, 0, "", NaN
 */
let variable = "";
//Operador OR Más amplio y considera más valores como falsey
console.log(`Variable con OR: ${variable || "Sin valor"}`); //falsey: null, undefined, false, 0, "", NaN
//Operador Nullish Más específico y sólo considera null y undefined
console.log(`Variable con ??: ${variable ?? "Sin valor"}`); //null o undefined
