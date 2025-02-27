/**
 * En este router tengo las operaciones CRUD pero devuelvo las respuestas con vistas renderizadas
 */
import { Router } from 'express';
import ProductModel from '../models/product.model.js';
import { uploader } from '../utilsMulter.js';

const router = Router();

//C: Create
router.post('/', uploader.single('file'), async (req, res) => {
    try{
        const newProduct = new ProductModel(req.body);
        console.log('Info del body: ', req.body);
        if(req.file){
            console.log(req.file); //Revisar que campos vienen por parte de multer
            newProduct.thumbnail = req.file.filename; //Agregar el filename me permite a mí hace las imagenes relativas al proyecto
        }
        await newProduct.save();
        res.render('product', {product : newProduct.toObject()});
    }catch(error){
        console.error(error);
        return res.render('error',{error: "Error al crear un producto"})
    }
})

//R: Read
//Ver un producto
router.get('/:cod', async (req, res) => {
    try{
        const product = await ProductModel.findOne({cod: req.params.cod});
        if(!product){
            return res.render('error',{error: "Producto no encontrado"})
        }
        res.render('product', {product : product.toObject()});
    }catch(error){
        console.error(error);
        return res.render('error',{error: "Error al obtener el producto solicitado"})
    }
})


//Listado de productos
router.get('/', async (req, res) => {
    try{
        let products = await ProductModel.find();
        res.render('products', {products : products.map( product => product.toObject())});
    }catch(error){
        console.error(error);
        return res.render('error',{error: "Error al obtener todos los productos"})
    }
})


//D: Delete
router.delete('/:pid', async (req, res) => {
    try{
        const productoAEliminar = await ProductModel.findByIdAndDelete(req.params.pid);
        if(!productoAEliminar){//Si la variable sigue vacía, es que no encontro el producto a eliminar
            return res.render('error', {error: "No se encontró el producto a eliminar"});
        }
        console.log(`Producto con id ${req.params.pid} eliminado exitosamente`);
        res.redirect('/product'); //Redirecciono al listado de productos
    }catch(error){
        console.error(error);
        return res.render('error',{error: "Error al borrar el producto"})
    }
})

export default router;