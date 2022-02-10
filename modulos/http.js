const http = require('http');

http.createServer(router).listen(3000);

function router(req, res) {
    console.log('Nueva petición al sever');
    console.log(req.url);

    // res.writeHead(201, {'Content-Type': 'text/plain', 'Author': 'Mary'});
    // // Escribir respuesta al usuario
    // res.write('Hola, ya se usar HTTP de NodeJS');
    // res.end();

    switch (req.url) {
        case '/hola':
            res.write('Hola, que tal?');
            res.end();
            break;
    
        default:
            res.write('Error 404 : no se lo que quieres');
            res.end();
            break;
    }
}

console.log('Escuchando por el puerto 3000');



