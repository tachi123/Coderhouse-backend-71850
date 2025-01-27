import express from 'express';

const app = express();
const productos = [
    {id: "1", nombre: "Martillo"},
    {id: "2", nombre: "Pala"}
]

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(8080, () => console.log("Listo para recibir peticiones"));

app.get('/productos', (req, res) => {
    const idProducto = req.query.idProducto;
    console.log(idProducto);
    if(!idProducto) return res.json({productos});
    let producto = productos.find( prod => prod.id === idProducto);
    if(!producto) return res.json({error: "Producto no encontrado"})
    res.send({producto});
})