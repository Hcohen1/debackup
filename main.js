var https = require('https');
var fs = require('fs');
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

var httpsOptions = {
    key: fs.readFileSync('\key.pem'),
    cert: fs.readFileSync('\cert.pem')
};

var app = function (req, res) {
  res.writeHead(200);
  res.end("hello world\n");
  res.send();
}

https.createServer(httpsOptions, app).listen(server_port,server_ip_address);