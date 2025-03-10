import mongoose, { mongo } from "mongoose";
import orderModel from "./models/order.model.js";

const urlMongo = 'mongodb://localhost:27017/proyectoMascotas';

const environmentInit = async () => {
    await mongoose.connect(urlMongo);

    let orders = await orderModel.aggregate([
        //Stage 1: Filtrar las órdenes para obtener solo aquellas que tengan el tamaño mediano
        //Recordamos que match nos permitirá aplicar un filtro como cualquier de los que hemos hecho
        { $match: {size: "medium"}},
        //Stage 2: Agrupar por sabores y acumular el número de pizzas de cada sabor
        //NOTA IMPORTANTE: en el campo _id es donde nosotros especificamos el valor del documento por el cual queremos agrupar, en nuestro caso $name
        //Y después podemos acceder a cualquier valor del documento
        { $group: { _id: "$name", totalQuantity: { $sum: "$quantity"}}},
        //Stage 3: Ordenar los documentos ya agrupados de mayor a menor
        { $sort: { totalQuantity : -1}}, //Pongo -1 para que sea descendente
        //Stage 4: Guardar los documentos de la agregación, en un documento que tenga un array de resultados
        //Guardando los resultados en una colección, y $$ROOT tomo el documento para insertar
        { $group: {_id: 1, orders: { $push:  "$$ROOT" }}},
        //Stage 5: Una vez que agrupamos todos los elementos en único documento, utilizaremos $project para gener un nuevo ObjectId
        //Al generar un nuevo ObjectId, vamos a poder guardarlo sin coincidencias
        //Si colocamos _id:0 significa que queremos que se genere un ObjectId propio
        { $project: {_id: 0, orders : "$orders"}},
        //Stage FINAL: Agregar los elementos a la colección "reportes". Si se deseara agregar un nuevo stage, recordar que este es el último
        { $merge: { into: "reportes"}}
    ])

    console.log(orders);
}

environmentInit();