/**
 * U (Update)
 * 
 * .updateOne(   query,   updateAction   , options(opcional))
 * .updateMany(   query,   updateAction   , options(opcional))
 * 
 * update actions: 
    $set: Asigna un nuevo valor a un campo existente.
    $unset: Elimina un campo existente.
    $inc: Incrementa o decrementa el valor de un campo numérico.
    $rename: Cambia el nombre de un campo.
    $mul: Multiplica el valor de un campo numérico por un número.
    $min: Establece el valor de un campo si es menor que el valor actual.
    $max: Establece el valor de un campo si es mayor que el valor actual.
    $currentDate
 */

//Aumentar 2 puntos la nota de los alumnos del curso de Matemáticas que sean mayores a 20 años
db.estudiantes.updateMany(
    { edad: {$gt: 20}, curso: "Matemática"},
    { $inc: {nota: 2}}
)
//Reescribir y establezco un máximo a los datos
db.estudiantes.updateMany( {} , { $max: {nota: 10}})

//Hago modificaciones masivas y quiero setear la fecha de modificación
db.estudiantes.updateMany( {los que modifique}, {$currentDate: {"lastModified": true}})

//Cambiamos el curso a Química al primer Pedro que encuentre
db.estudiantes.updateOne( { nombre: "Pedro"} , { $set: {curso: "Química"}})

//Elimino el campo edad al primer documento que se encuentra cone l filtro nombre "Ana"
db.estudiantes.updateOne( {nombre: "Ana"}, {$unset: {edad: ""}})

//Agarro todos los estudiantes que no tienen edad y le seteo algo para que el campo no este vacío
db.estudiantes.updateMany( {edad: {$exists: false}} , {$set : {edad: 0}})