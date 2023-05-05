const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('dev'));

//Motor de plantillas EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

const patpassRoutes = require('./routes/patpassRoutes');


app.use('/', patpassRoutes.routes);


app.listen(PORT, () => {
    //en vez de entrar por localhost reemplazar por la palabra mipagina:puerto


    console.log(`Visita: http://JaccN7:${PORT}\n______________________________________________\n\n`);
});