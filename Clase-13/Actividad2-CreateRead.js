/** Actividad de clase: Crear y poblar una colección */

//Parte 1
//Crear una base de datos colegio
//Crear una colección llamada estudiantes
//Insertar múltiples documentos utilizando insertMany que tengan: nombre, apellido, edad, curso y sexo
//Insertar un SOLO estudiante que tenga sólo nombre, apellido y curso

use colegio
db.createCollection("estudiantes")
db.estudiantes.insertMany([
    { nombre: "Ana", apellido: "Pérez", curso: "Matemáticas", edad: 20, correo: "ana@example.com", sexo: "F" },
    { nombre: "Luis", apellido: "Gómez", curso: "Historia", edad: 22, correo: "luis@example.com", sexo: "M" },
    { nombre: "María", apellido: "López", curso: "Ciencias", edad: 21, correo: "maria@example.com", sexo: "F" },
    { nombre: "Carlos", apellido: "Sánchez", curso: "Física", edad: 23, correo: "carlos@example.com", sexo: "M" },
    { nombre: "Sofía", apellido: "Martínez", curso: "Química", edad: 20, correo: "sofia@example.com", sexo: "F" }    
])
db.estudiantes.insert({ nombre: "Nahuel", apellido: "Ramírez", curso: "Arte"})

//Parte 2: Realizar búsquedas

//Buscar todos los estudiantes
db.estudiantes.find()
//Buscar estudiantes por sexo
db.estudiantes.find( { sexo : "M"})
//Contar los documentos totales
db.estudiantes.countDocuments()
//Contar los estudiantes que tienen sexo femenino
db.estudiantes.countDocumentos( {sexo: "F"})

//Parte 3: Filtros con operadores

//Contar los estudiantes que tienen la propiedad sexo
db.estudiantes.countDocuments( {sexo: { $exists : true}})
//Contar los estudiantes que NO tienen la propiedad sexo
db.estudiantes.countDocuments( {sexo: { $exists : false}})

//Estudiantes que esten cursando Física o Ciencias
db.estudiantes.find( { $or: [ {curso: "Física"}, {curso: "Ciencias"} ]})
//Y además que sean mayores a 22 años
db.estudiantes.find( { $or: [ {curso: "Física"}, {curso: "Ciencias"} ], edad: {$gt: 22}, sexo: { $exists: true}})

//Estudiantes que tienen el sexo distinto a "F"
//Esto trae los documentos que NO tienen la propiedad igual a F y además toma los que no tienen esa propiedad
// $ne    not equals ; $gt    greater than ; $gte    greater than or iguals
db.estudiantes.countDocumentos({ sexo: {$ne: "F"}})

//Parte 3: Búsqueda avanzada

//Conocer los valores únicos que toma un campo en toda la colección
db.estudiantes.distinct("sexo")

//Filtrar documentos por un subdocumento
db.estudiantes.insertOne({ nombre: "Anabela", apellido: "Farias", curso: "Matemáticas", hobbies: {disciplina: "handball", club: "River"}})
db.estudiantes.find( { "hobbies.disciplina": "handball"})

//Utilizando expresiones regulares
//Filtrar todos los estudiantes que tengan le nombre que comience con "A"
db.estudiantes.find( { nombre: /^A/})
//Traer todos los estudiantes cuyo correo eléctronico tenga como dominio example.com
db.estudiantes.find( { correo: /@example\.com$/})