//http es un modulo que nodejs trae por defecto
const http = require('http');
//const hola = require('../codigo-tercero/app2');

//create server toma una callback que tiene 2 parametrso, la peticion y la respuesta
const server = http.createServer((req, res) => {
    res.writeHead(200,{"Content-Type":"aplication/json"})
    res.write("Hola, Me llamaste?")
    res.end();
})

/*const server = http.createServer(callback);
//el servidor tiene otra funcion: listen a la que le tenemos que pasar el puerto
server.listen(8080);
function callback(req, res){

}*/

server.listen(8080);