import mongoose from "mongoose";
import studentModel from "./models/student.model.js";

const urlMongo = 'mongodb://localhost:27017/proyectoMascotas';

const environment = async () => {
    await mongoose.connect(urlMongo);

    console.log('1. Obtener a los estudiantes agrupados por calificación del mejor al peor');
    let student = await studentModel.aggregate([
        {
            $group: {
                _id: "$grade", //Agrupamos por calificación
                count: { $sum: 1} //Contando cuántos estudiantes hay en cada grupo
            }
        },
        {
            $sort: {_id: -1} //Ordeno los grupos de mayor a menor calificación
        }
    ])

    console.log(student);

    console.log('2. Obtener a los estudiantes agrupados por grupo');
    student = await studentModel.aggregate([
        {
            $group: {
                _id: "$group", //Agrupamos por grupo
                count: {$sum: 1} //Contamos la cantidad de estudiantes por grupo
            }
        }
    ])

    console.log(student);

    console.log('3. Obtener el promedio de los estudiantes del grupo 1B');
    student = await studentModel.aggregate([
        {
            $match: { group: "1B"} //Filtramos solo los estudiantes del grupo 1B
        },
        {
            $group: {
                _id: "Promedio_notas_1B", //Como no agrupamos por nada, podemos dejarlo vacío o poner una etiqueta
                averageGrade: { $avg: "$grade"} //Calcular el promedio de las calificaciones
            }
        }
    ])

    console.log(student);

    console.log('4. Obtener el promedio de los estudiantes del grupo 1A');
    student = await studentModel.aggregate([
        {
            $match: { group: "1A"} //Filtramos solo los estudiantes del grupo 1B
        },
        {
            $group: {
                _id: "Promedio_notas_1B", //Como no agrupamos por nada, podemos dejarlo vacío o poner una etiqueta
                averageGrade: { $avg: "$grade"} //Calcular el promedio de las calificaciones
            }
        }
    ])
    console.log(student);

    console.log('4 BIS. Obtener el promedio de los estudiantes según los grupos');
    student = await studentModel.aggregate([
        {
            $group: {
                _id: "$group", //Agrupo por grupo
                averageGrade: { $avg: "$grade"} //Calcular el promedio de las calificaciones
            }
        }
    ])
    console.log(student);

    console.log('5. Obtener el promedio general de los estudiantes');
    student = await studentModel.aggregate([
        {
            $group: {
                _id: "Promedio general", //Como no agrupamos por nada, podemos dejarlo vacío o poner una etiqueta
                averageGrade: { $avg: "$grade"} //Calcular el promedio de las calificaciones
            }
        }
    ])

    console.log(student);

    console.log('6. Obtener el promedio de los estudiantes que tienen gender = Male');
    student = await studentModel.aggregate([
        {
            $match: {gender: "Male"}
        },        
        {
            $group: {
                _id: "Promedio de los estudiantes con sexo masculino", //Como no agrupamos por nada, podemos dejarlo vacío o poner una etiqueta
                averageGrade: { $avg: "$grade"} //Calcular el promedio de las calificaciones
            }
        }
    ])

    console.log(student);

    console.log('7. Obtener el promedio de los estudiantes que tienen gender = Female');
    student = await studentModel.aggregate([
        {
            $match: {gender: "Female"}
        },        
        {
            $group: {
                _id: "Promedio de los estudiantes con sexo femenino", //Como no agrupamos por nada, podemos dejarlo vacío o poner una etiqueta
                averageGrade: { $avg: "$grade"} //Calcular el promedio de las calificaciones
            }
        }
    ])

    console.log(student);

}

environment();