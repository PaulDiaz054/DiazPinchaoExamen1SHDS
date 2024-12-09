//protocolo de intercambio
var http = require('http');
//creando el servidor
var server = http.createServer();

//servicio web
function Diaz(request, response ){
    response.writeHead(200, {'content-type':'text/plain'});
    response.write('Paul Diaz, 20 anios, Estudiante de la carrera de Desarrollo de Software, fan de los videojuegos');
    response.end();
}

server.on('request', Diaz);
server.listen(3000, function(){
    console.log('la solicitud fue realizada');
});