var fs = require('fs');

//Not everyone knows why it's important to write non-blocking
//programs in Node.js. One of these unfortunate souls has written
//some code to read a file off the file-system using the blocking
//function readFileSync. Convert the code to be non-blocking using
//the readFile function instead.

//Start by changing the call from readFileSync() to readFile().
//Next, add a callback method to the readFile() call.
// This method should accept error and contents parameters.

//In order to get readable contents, the encoding must be specified.
//Otherwise, if no encoding is specified, then the raw buffer is returned.
fs.readFile('index.html', "utf8", function (error, contents) {
    //To finish it up, remove the contents var declaration,
    //and move the call to console.log() inside your callback.
    console.log(contents);
});