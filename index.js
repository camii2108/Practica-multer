const express = require('express');
const path = require('path');
// iniclizamos y exjecutamos express, tal vez luego lo ejecuto en una bd

const app = express();


app.set('port', 3000); 
app.set('port', 3000); 
app.set('view engine', 'ejs');

/* Routes */
app.get('/', (req, res) => {
    res.render();
})

/* iniciamos el servidor */

app.listen(app.get('port'), () => {
console.log(`Server on port ${app.get('port')}`)
});