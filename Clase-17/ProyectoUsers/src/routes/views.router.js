/** Voy a crear puntos de acceso que renderizan plantillas */
import {Router} from 'express';
import userModel from '../models/user.model.js';

const router = Router();

router.get('/', async (req, res) => {

    const elementosPorPagina = req.query.limit ?? 10;
    const pagActual = req.query.page ?? 1;

    let infoPaginate = await userModel.paginate(
        {}, //Filtro los usuarios, si no tengo ningún friltro pongo las {}
        {
            limit: elementosPorPagina, //Indico la cantidad de elementos por página
            page: pagActual
        }
    );

    console.log(infoPaginate);
    infoPaginate.docs = infoPaginate.docs.map( doc => doc.toObject());
    res.render('index', {info: infoPaginate});
})

export default router;