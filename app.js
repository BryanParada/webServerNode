const express = require('express')
const app = express()
const port = 8080;

// MiddleWares
// Servir contenido estatico
app.use( express.static('public'));

app.get('/', (req, res) => {
  res.send('Home page')
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


 