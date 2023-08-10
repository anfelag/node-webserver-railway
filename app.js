const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials' );

// Servir contenido estático
app.use( express.static('public') );

// app.get('/', function (req, res) {
//     res.send('Home page')
// });

app.get('/', function (req, res) {
    res.render('home', {
        name: 'John Wick',
        title: 'Curso de Node'
    });
});

app.get('/generic', function (req, res) {
    res.render('generic', {
        name: 'John Wick',
        title: 'Curso de Node'
    });
});

app.get('/elements', function (req, res) {
    res.render('elements', {
        name: 'John Wick',
        title: 'Curso de Node'
    })
});

app.get('*', function (req, res) {
    res.send('404 | Page not found')
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: ${port}`)
});