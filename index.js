const express = require('express');
const path = require('path');/* me une directorios */
const multer = require('multer'); 

const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),/* el codigo que vas a subir, lo haces en unload */
    filename:(req,file, cb) => {
        cb(null,file.originalname);
    }
});
// iniclizamos y exjecutamos express, tal vez luego lo ejecuto en una bd
const app = express();

app.set('port', 3000); 
app.set('views', path.join(__dirname, 'views')); /*  me une dos directorios, lo que hace es decir donde esta la carpeta views */
app.set('view engine', 'ejs');

//Middlewares: procesos que pasan entre el pedido y la respuesta, codigos que se ejecutan antes de llegar a las rutas. Ya que antes de recibir la imagen necesito precesar la imagen
app.use(multer({
    storage,
    dest: path.join(__dirname, 'public/uploads')
}).single('image'));

/* Routes */
app.get('/', (req, res) => {
    res.render('index');/* formulario o create  */
});
/* es lo qu em envia lo que hace el formulario */
app.post('/upload', (req, res) => {
    console.log(req.file);
    res.send('uploaded');
});

/* iniciamos el servidor */

app.listen(app.get('port'), () => {
console.log(`Server on port ${app.get('port')}`)
});