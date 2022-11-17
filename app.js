const express = require('express')
const app = express()
const port = 8080; 

// TODO: require('hbs')
app.set('view engine', 'hbs');

// MiddleWares
// Servir contenido estatico
//app.use( express.static('public'));

// app.use(express.static('public', {
//     extensions: ['html', 'htm'] 
// }));

app.use(express.static('public',{extensions:['html']}));

app.get('/', (req, res) => {
  // res.send('Hello World') 
  res.render('home');
})

app.get('/hello-world',  (req, res) =>{
  res.send('Hello World')
})

app.get('*',  (req, res) =>{
  res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () =>{
  console.log(`Listent at http://localhost:${port}`);
  
})


 