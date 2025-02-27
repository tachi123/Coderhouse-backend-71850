/**
 * Archivo de configuración que asume la responsabilidad de la carga de las variables de entorno
 * según el environment en el que se este ejecutando la aplicación

 */

//Importar dotenv e inicializo las variables de entorno
import dotenv from 'dotenv';

/**
 * Por defecto dotenv.config() carga el archivo .env posicionado en la carpeta raíz del proyecto,
 * es decir, donde esta el package.json
 * Si llegara el caso que no carga el archivo .env es importante indicar el path por ejemplo así:
 * dotenv.config({ path: "../.env"}); Hubo conflicto en instalaciones de otros framework
 */
dotenv.config(); //Nos permite poder trabajar con las variables de entorno

export const config = {
    PORT : process.env.PORT ?? 8080, //Pongo por defecto el puerto 8080 en el caso que no venga la variable seteada
    URL_MONGODB : process.env.URL_MONGODB
}
