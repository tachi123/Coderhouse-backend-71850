/** Proyecciones 
 * .find( {filtros, opts}  ,  {los campos que queremos traer}   )
 * opción 1 para indicar que lo queremos traer
 * opción 0 para indicar que lo excluya de los resultados
 */
db.estudiantes.find( {} , {correo: 1})
db.estudiantes.find( { correo: {$exists: true}} , {correo: 1})

db.estudiantes.find( {} , {correo: 0, curso: 0, edad: 0})

//.sort
db.estudiantes.find().sort( {apellido: 1, nombre: -1})

//Dame los primeros 2 estudiantes ordenados alfabéticamente por el nombre de manera ascendente
db.estudiantes.find().sort({nombre: 1}).limit(2)
//Dame 2 estudiantes ordenados alfabéticamente por el nombre de manera ascendente pero salteame 2
db.estudiantes.find().sort({nombre: 1}).skip(2).limit(2)

//Ejemplo de paginación
db.estudiantes.find().sort({apellido:1}).skip(cantElementosXPag * numeroPagPrevio).limit(cantElementsXPag)
//Página 1 donde cantidad de elementos por página es 10
db.estudiantes.find().sort({apellido:1}).skip(10*0).limit(10)
//Página 2 donde cantidad de elementos por página es 10
db.estudiantes.find().sort({apellido:1}).skip(10*1).limit(10)

//Traer un documento aleatorio
db.estudiantes.find().skip( UNNUMEROALEATORIO).limit(1)

//Agregamos estudiantes
db.estudiantes.insertMany([
    { nombre: "Juan", apellido: "Díaz", curso: "Música", instrumento: "Guitarra" },
    { nombre: "Laura", apellido: "Fernández", curso: "Arte", técnica: "Pintura" },
    { nombre: "Diego", apellido: "López", curso: "Deportes", deporte: "Fútbol" },
    { nombre: "Ana", apellido: "González", curso: "Informática", lenguaje: "Python" },
    { nombre: "Sofía", apellido: "Pérez", curso: "Literatura", autorFavorito: "Cervantes" }
])

db.estudiantes.insertOne( {nombre: "Marcos"})

//Obtener solo el nombre y el curso de todos los estudiantes
db.estudiantes.find( {} , {nombre:1, curso:1} )
//Obtener todos los datos de los estudiantes, excepto el curso
db.estudiantes.find( {} , {curso:0} )
//Ordenar los estudiantes por nombre alfabético
db.estudiantes.find().sort({ apellido: 1, nombre: -1})
//Traer los 5 estudiantes más grandes
db.estudiantes.find().sort( {edad: -1}).limit(5)


//Escenario
{ comment: "text", author: "autor"}
{ comment: "text", author: "autor", reacciones: ["reacciones"]}