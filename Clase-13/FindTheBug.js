//#FindTheBug

//Consulta 1: Insertar múltiples mascotas
db.pets.insertOne([{name:"aletas",specie:"fish"},{name:"Doby",{specie:"dog"}])

/**
 * Error 1:
 * Error porque insertOne se usa para un solo documento, hay que usar insertMany
 * Error 2:
 * En el segundo objeto del array, hay un { que hace la sintaxis incorrecta
 */
db.pets.insertMany([{name:"aletas",specie:"fish"},{name:"Doby",specie:"dog"}])

// Consulta 2: Obtener solo las últimas 5 mascotas que sean peces
db.pets.find({specie:"fish}).limit(5)

/**
 * Errores:
 * - Falta el cierre de comillas del valor fish
 * - No esta claro que se entiende por "últimas 5 mascotas", MongoDB no almacena automáticamente un orden
 * Podemos suponer que hay un campo que guarda la fecha de creación : createdAt
 */
db.pets.find({specie: "fish"}).sort( { createdAt: -1} ).limit(5)

// Consulta 3: Obtener solo el nombre de las últimas 5 mascotas cuya edad sea menor de 10 años
db.pets.find(age:{ $gte:{10}}},{name:1}).sort(age:1).limit(5)

/**
 * El operador $gte (greater than or equals) no tiene el propósito pedido.
 * Tenemos que usar $lt (less than) para menor a 10 años
 * Y además hay un cierre de llaves demás
 */
db.pets.find(age: { $lt:{10}},{name:1}).sort(age:1).limit(5)

/** 
 * Resumen de errores:
 * Sintaxis: comas, paréntesis y llaves deben estar correctamente balanceados
 * Uso de métodos: prestar atención al nombre de los métodos UPDATEONE vs UPDATEMANY
 * Faltas de comillas
 * Operadores: prestar atención a la lógica de cada operador
 */