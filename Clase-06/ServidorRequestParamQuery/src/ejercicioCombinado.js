import express from 'express';

const app = express();

const usuarios = [
    {id: "1", nombre: "Dalia", apellido: "Gómez", sexo: "F", edad: 25},
    {id: "2", nombre: "Myrna", apellido: "Flores", sexo: "F", edad: 11},
    {id: "3", nombre: "Armando", apellido: "Mendoza", sexo: "M", edad: 44},
    {id: "4", nombre: "Dalia", apellido: "Gómez", sexo: "F", edad:33},
    {id: "5", nombre: "Herminio", apellido: "Fuentes", sexo: "M", edad:66},
    {id: "6", nombre: "Juan", apellido: "Zepeda", sexo: "F", edad:44},
]

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(8080, () => console.log("Listo para recibir peticiones"));

//Crear un endpoint para filtrar por sexo y además puedo tener otros filtros
app.get('/:sexoIngresado', (req, res) => {
    let sexoIngresado = req.params.sexoIngresado; //Agarro el params query.genero
    //El sexo no es M ni es F, filtro no vale y retorno todos los usuarios
    if(sexoIngresado!=="M"&&sexoIngresado!=="F") 
        return res.json({usuarios});
    //En caso contrario, continuamos con el filtro y devolvemos los usuarios filtrados
    let usuariosFiltrados = usuarios.filter(user => user.sexo === sexoIngresado);

    let menoresDe = parseInt(req.query.menorde);
    usuariosFiltrados = usuariosFiltrados.filter(user => user.edad < menoresDe);
    res.json({usuarios: usuariosFiltrados});
})