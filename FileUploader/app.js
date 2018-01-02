var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

var uploaDir = __dirname + '/Upload';

//Create the upload directory if does not exist.
if (!fs.existsSync(uploaDir)) {
    fs.mkdirSync(uploaDir);
}

http.createServer(function (req, res) {
    console.log("URL: " + req.url);

    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var filetoupload = files.filetoupload;
            var oldpath = filetoupload.path;
            var newpath = uploaDir + '/' + filetoupload.name;

            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;

                var stat = fs.statSync(newpath);

                res.writeHead(200,
                    {
                        'Content-Type': 'image',
                        'Content-Length': stat.size
                    });

                fs.createReadStream(newpath).pipe(res);
            });
        });
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload" accept=".png,.jpg" required><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8080);