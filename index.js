const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use('/',require('./routes/index'));

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use('views',express.static(__dirname+ '/views'));
app.set('view engine','ejs');

app.delete('/registros/:id', (req, res) => {
    const id = req.params.id;
  
    // Lógica para eliminar el registro de la base de datos
  
    res.sendStatus(200);
  });
  
