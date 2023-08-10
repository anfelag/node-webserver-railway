
const http = require('http');

http.createServer( (req, res) => {

    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead( 200, { 'Content-Type': 'application/csv' });
    // res.writeHead( 200, { 'Content-Type': 'text/plain' })

    res.write( 'id, name\n' );
    res.write( '1, Andres\n' );
    res.write( '2, Leo\n' );
    res.write( '3, Xavi\n' );
    res.write( '4, Marc\n' );
    res.end();
})
.listen( 8080 );


console.log('Escuchando el puerto ', 8080);