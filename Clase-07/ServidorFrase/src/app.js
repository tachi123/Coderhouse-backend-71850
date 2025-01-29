import express from 'express';

const app = express();

app.use(express.json()); //Como indica el método, ahora el servidor podrá recibir jsons al momento de la petición
app.use(express.urlencoded({encoded: true})); //Permite que se pueda enviar información también desde la URL

app.listen(8080, () => { console.log("Escuchando en el puerto 8080")});

let frase = "Frase inicial con muchas palabras";

//Método GET /api/frase: Obtener toda la frase
app.get('/api/frase', (req,res) => {
    res.json({frase});
})

//Método GET /api/palabra/:pos : Para obtener una palabra específica
app.get('/api/palabra/:pos', (req,res) => {
    const pos = parseInt(req.params.pos) - 1;
    //Transformar el string en un array de elementos separados por ' '
    const palabrasEnArray = frase.split(' '); // [ frase, inicial, con, muchas, palabras]
    const palabraBuscada = palabrasEnArray[pos];
    if(!palabraBuscada){
        return res.status(404).json({error: "Palabra no encontrada"})
    }
    res.json({buscada: palabraBuscada});
})

//Método POST /api/palabra : Agregar una palabra al final de la frase
app.post('/api/palabra', (req,res) => {
    const { palabra } = req.body; //{ palabra: unaPalabra}
    frase += ` ${palabra}`; //es lo mismo que frase = frase + ` ${palabra}`;
    const pos = frase.split(' ').length;
    res.json({agregada: palabra, pos})
})

//Método PUT /api/palabra/:pos : reemplazar una palabra por otra
app.put('/api/palabra/:pos', (req,res) => {
    //1. Buscar y verificar que exista la palabra en esa posición
    const pos = parseInt(req.params.pos) - 1;
    const { palabra } = req.body;
    const palabrasEnArray = frase.split(' ');
    const palabraAnterior = palabrasEnArray[pos];
    //2. Reemplazarla. Para reemplazar vamos a tener que reemplazar el elemento en elarray
    palabrasEnArray[pos] = palabra;
    //3. Almacenar la frase, vamos a tener que volver a unir el array con espacios
    frase = palabrasEnArray.join(' ');
    res.json({actualizada: palabra, anterior: palabraAnterior})
})

//Método DELETE /api/palabra/:pos : eliminar una palabra
app.delete('/api/palabra/:pos', (req,res) => {
    const pos = parseInt(req.params.pos) - 1;
    const palabrasEnArray = frase.split(' ');
    palabrasEnArray.splice(pos, 1); //Posición, cantidad de elementos a eliminar
    frase = palabrasEnArray.join(' ');
    res.json({mensaje: "Palabra eliminada"});
})