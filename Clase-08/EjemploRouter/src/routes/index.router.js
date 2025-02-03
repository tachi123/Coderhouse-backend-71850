//En este router organizo todos los puntos de acceso asociados a información
import { Router } from 'express';

const router = Router();

router.get('/', (req,res) => { //URI es localhost:8080/index
    res.send('Hola desde la aplicación')
})

//Otro endpoint
router.get('/about', (req,res) => { //URI es localhost:8080/index/about
    res.send('Acerca de')
})

export default router;