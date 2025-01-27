import express from 'express';

const app = express();

const usuarios = [
    {id: "1", nombre: "Dalia", apellido: "Gómez", sexo: "F"},
    {id: "2", nombre: "Myrna", apellido: "Flores", sexo: "F"},
    {id: "3", nombre: "Armando", apellido: "Mendoza", sexo: "M"},
    {id: "4", nombre: "Dalia", apellido: "Gómez", sexo: "F"},
    {id: "5", nombre: "Herminio", apellido: "Fuentes", sexo: "M"},
    {id: "6", nombre: "Juan", apellido: "Zepeda", sexo: "F"},
]

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(8080, () => console.log("Listo para recibir peticiones"));

//Crear un endpoint para filtrar por género
app.get('/', (req, res) => {
    let sexoIngresado = req.query.sexo; //Agarro el params query.genero
    //Si no se ingresó género, o el género no es M ni es F, filtro no vale y retorno todos los usuarios
    if(!sexoIngresado||(sexoIngresado!=="M"&&sexoIngresado!=="F")) 
        return res.json({usuarios});
    //En caso contrario, continuamos con el filtro y devolvemos los usuarios filtrados
    let usuariosFiltrados = usuarios.filter(user => user.sexo === sexoIngresado);
    res.json({usuarios: usuariosFiltrados});
})