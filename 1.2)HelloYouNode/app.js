var http = require('http');//How we include the http module

//Let's start with a simple Hello server. Follow the tasks below to create a simple Node server that outputs a greeting.
http.createServer(function (request, response) {//How we create the server
    //First, tell the response which status it should have (a successful status is 200).
    response.writeHead(200);
    //Next, write a message to the response body in the form of "Hello, this is <your name here>".
    response.write("Hello, this is Maurizio");
    //To finish it up, tell the response to end so the client on the other side knows it has received all the data.
    response.end();
}).listen(8080);