import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true})); //Sirve para que nuestro servidor pueda entender y procesar datos más complejos que se envían en la URL

app.get('/ejemploQueries', (req, res) => {
    /**
     * Nota algo interesante: aquí no es necesario adelantarnos al parámetro que tiene que meter el cliente
     * Con el simple hecho de llamar al endpoint, el cliente puede meter los queries que necesite en la url después del símbolo ?
     */
    let consultas = req.query; 
    /**
     * A diferencia de req.params, acá no tengo contemplado que tipo de cosas me pueden pedir
     * aunque si podemos delimitarlo haciendo un destructuring
     */
    let {nombre, apellido, edad} = req.query;
    /**
     * No nos importa que llegue del query, solo extraemos el nombre, el apellido y la edad
     * Nos aumenta la seguridad del servidor porque evitamos recibir elementos extraños en la url
     */
    res.json({consultas});
})

app.listen(8080, () => console.log("Listo para recibir peticiones"));

