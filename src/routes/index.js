import {Router} from "express";

const router = Router()

router.get('/', (req, res) =>{
    res.render('index.ejs', {titulo: 'Sitio Web desde el Backend'})     //Renderizamos un archivo HTML de ejs
})

router.get('/about', (req, res) =>{ 
    res.render('about.ejs', {titulo: 'Sobre Mi',    //Pasamos un objeto de js con valores con podemos utilizar en html
                             h1: 'Sobre Frank:'
    })     
})

router.get('/contact', (req, res) =>{
    res.render('contact.ejs', {titulo: 'Contacto'})     
})

export default router;