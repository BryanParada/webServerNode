const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT; 


// HANDLEBARS 
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')

// MiddleWares
// Servir contenido estatico
//app.use( express.static('public'));

// app.use(express.static('public', {
//     extensions: ['html', 'htm'] 
// }));

app.use(express.static('public'));

app.get('/', (req, res) => {
  // res.send('Hello World') 
  res.render('home', {
    name: 'Bryan',
    title: 'Node Course'
  });
})

app.get('/index', (req, res) => {
  res.render('home', {
    name: 'Bryan',
    title: 'Node Course'
  });
})

app.get('/generic', (req, res) => { 
  res.render('generic', {
    name: 'Bryan',
    title: 'Node Course'
  });
})

// app.get('/generic',  (req, res) =>{
//  res.sendFile( __dirname + '/public/generic.html')
// });

app.get('/elements', (req, res) => { 
  res.render('elements', {
    name: 'Bryan',
    title: 'Node Course'
  });
})

// app.get('/elements',  (req, res) =>{
//   res.sendFile( __dirname + '/public/elements.html')
//  });

app.get('*',  (req, res) =>{
  res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () =>{
  console.log(`Listent at http://localhost:${port}`);
  
})


 