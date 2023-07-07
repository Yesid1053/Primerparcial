const express = require('express');

const router = express.Router();



const data = require('../resources/files/marvel.json');
//console.log(`tamaño de los datos: ${data.length}`);

let peliculasObject = new Map(Object.entries(data))
let peliculas = new Map()

peliculasObject.forEach((value, key) => {
    peliculas = new Map(Object.entries(value))

})


console.log(`la cantidad de peliculas es de : ${peliculas.size}`);

router.get('/', (req, res) => { 
    res.render('index',{title:'Esneider////', data: peliculas});

})

module.exports = router;

