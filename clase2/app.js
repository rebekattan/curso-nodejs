const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200,{"Content-Type":"aplication/json"})
    res.write("Hola, Me llamaste?")
    res.end();
})

server.listen(8080);