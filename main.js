var https = require('https');
var fs = require('fs');

var httpsOptions = {
    key: fs.readFileSync('\key.pem'),
    cert: fs.readFileSync('\cert.pem')
};

var app = function (req, res) {
  res.writeHead(200);
  res.end("hello world\n");
  res.send();
}

https.createServer(httpsOptions, app).listen(443,'127.0.0.1');