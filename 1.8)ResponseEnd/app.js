var http = require('http');
//Our original Hello server can be shortened since the response.end()
//function optionally takes data as a parameter.
//Remove the response.write line altogether, and send the hello string
//as a parameter on the response.end function. This will send the data,
//and once finished add the end to the response.
http.createServer(function (request, response) {
    response.writeHead(200);
    // Now, remove the call to response.write().
    // response.write("Hello, this is dog");

    //Instead of passing the content to response.write(), pass it to response.end().
    response.end("Hello, this is dog");
}).listen(8080);
