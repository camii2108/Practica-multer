const express = require('express');
const path = require('path');/* me une directorios */
const multer = require('multer'); 
// iniclizamos y exjecutamos express, tal vez luego lo ejecuto en una bd

const app = express();


app.set('port', 3000); 
app.set('views', path.join(__dirname, 'views')); /*  me une dos directorios, lo que hace es decir donde esta la carpeta views */
app.set('view engine', 'ejs');

/* Routes */
app.get('/', (req, res) => {
    res.render('index');/* formulario o create  */
});
/* es lo qu em envia lo que hace el formulario */
app.post('/upload', (req, res) => {
    res.send('upload');
});

/* iniciamos el servidor */

app.listen(app.get('port'), () => {
console.log(`Server on port ${app.get('port')}`)
});