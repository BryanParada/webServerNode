const http = require('http');

http.createServer( (req, res) => {
 
    // res.writeHead(200, { 'Content-Type': 'text/plain' } );
    // res.writeHead(200, { 'Content-Type': 'application/json' } );

    // const person = {
    //     id: 1,
    //     name: 'Bryan'
    // }

    // res.write(JSON.stringify(person)); 

    res.setHeader('Content-Disposition', 'attachment; filename=list.csv')
    res.writeHead(200, { 'Content-Type': 'application/csv' } );

    res.write('id; name\n');
    res.write('1; Juan\n');
    res.write('2; Eva\n');
    res.write('3; Pedro\n');
    res.end();

    res.end();
})
.listen(8080);

console.log('Listening in port', 8080); 

