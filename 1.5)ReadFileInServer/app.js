var http = require('http');
var fs = require('fs');

//Now that you know how to create an HTTP server and how to read a file
//off the filesystem in a non-blocking way, let's try to combine the two.
//Instead of just writing a string to the HTTP response, write the
//contents of index.html to the response instead.

http.createServer(function (request, response) {
    response.writeHead(200);
    //After response.writeHead(200), add a call to fs.readFile()
    //that reads index.html asynchronously. Remember to pass a
    //callback function, that accepts an error parameter,
    //and a contents parameter.

    var begin = new Date();
    console.log("Begin reading: " + begin.toLocaleTimeString() + "\n");

    fs.readFile("someText.txt", function (error, contents) {
        response.write(contents + "\n");

        var end = new Date();
        console.log("End reading: " + end.toLocaleTimeString() + "\n");

        response.end();
    });

    if (!response.finished) {
        var waiting = new Date();
        console.log("Waiting: " + waiting.toLocaleTimeString() + "\n");
    }
}).listen(8080);