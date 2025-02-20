/**
 * D (Delete): Eliminar recurso
 * .deleteOne( query )     .deleteMany(query)
 * 
 * query: {key: val} compara el valor tal cual, o tenemos operadores como en el FIND()
 */

db.estudiantes.deleteMany( {curso: "Historia"} )

//Eliminar todos los estudiantes con una edad menor a 18 años
db.estudiantes.deleteMany( {edad: { $lt: 18}} )