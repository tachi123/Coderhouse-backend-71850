import mongoose, { mongo } from "mongoose";
import orderModel from "./models/order.model.js";

const urlMongo = 'mongodb://localhost:27017/proyectoMascotas';

const environmentInit = async () => {
    await mongoose.connect(urlMongo);

    let orders = await orderModel.aggregate(
        [
            {
              $match:{name: "Pepperoni"}
            },
            {
              $group:
                {
                  _id: "$price",
                  cantidadTotalVendidas: { $sum: "$quantity"}
                }
            },
            {
              $project:
                {
                  _id: 1,
                  cantidadTotalVendidas: 1,
                  dineroRecaudado: {$multiply: ["$cantidadTotalVendidas","$_id"]}
                }
            },
            {
              $group:
                {
                  _id: null,
                  totalDineroRecaudado: {$sum: "$dineroRecaudado"}
                }
            }
          ]
    );

    console.log(orders);
}

environmentInit();