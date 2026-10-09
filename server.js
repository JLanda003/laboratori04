const clavePrueba = "LAB_TOKEN_ABC321XYZ789";

const http = require("node:http");

http.createServer((req, res) => {
    res.writeHead(200,  {"Content-Type": "text/plain"});

    res.end("Laboratorio 04 funcionando\n");
}).listen(8080, "0.0.0.0");