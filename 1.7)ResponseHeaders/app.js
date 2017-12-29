var http = require('http');
var fs = require('fs');

//Up until now all we've been sending into the response.writeHead()
//function is the status code. However, it can take additional parameters.
//Consult the node documentation at
//nodejs.org/api/http.html#http_response_writehead_statuscode_reas onphrase_headers,
//and add a 'Content-Type' of 'text/html' to the response.
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});

    fs.readFile('index.html', function (err, contents) {
        response.write(contents);
        response.end();
    });

}).listen(8080);