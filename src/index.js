import express from "express";
import {dirname, join} from "path"; //Son funciones proporcionadas por Node.js para manejar rutas de archivos y directorios.
import {fileURLToPath} from "url";  //Es una función que convierte una URL en un formato de objeto URL a una ruta de archivo en formato de cadena
import ejs from "ejs";  // Es un motor de plantillas que permite incrustar JavaScript en HTML para generar dinámicamente el contenido de las páginas web.
import router from "./routes/index.js";

export const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url))   //Ruta completa para indicarla despues

app.set('views', join(__dirname, 'views')) //Indicamos cual es la carpeta views a express, Establecemos la carpeta views como el directorio donde se encuentran las plantillas de vistas de la aplicación. 
app.set('view engine', 'ejs')  //Establece el motor de plantillas como EJS. Es basicmanete un HTML con caracteristicas extras

app.use(router);

app.use(express.static(join(__dirname, 'public')))  //static se utiliza para servir archivos estáticos, como archivos HTML, imágenes, archivos CSS, archivos JavaScript, etc.
                                                    //Join nos permite concatenar el directorio actual (__dirname) con el directorio 'public'

app.listen(3000);
console.log(`Servidor corriendo en el puerto ${3000}`)