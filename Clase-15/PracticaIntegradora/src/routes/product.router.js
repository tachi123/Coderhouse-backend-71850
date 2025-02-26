import { Router } from 'express';
import ProductModel from '../models/product.model.js';

const router = Router();

//C: Create
router.post('/', async (req, res) => {
    try{
        const newProduct = new ProductModel(req.body);
        console.log('Info del body: ', req.body);
        await newProduct.save();
        res.json({newProduct})
    }catch(error){
        return res.json({message: error})
    }
})


//R: Read
//Listado de productos
router.get('/', async (req, res) => {
    try{
        let products = await ProductModel.find();
        res.render('products', {products : products.map( product => product.toObject())});
    }catch(error){
        return res.json({message: error})
    }
})


//D: Delete

export default router;