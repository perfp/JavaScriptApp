var http = require('http');
http.createServer(handle_request).listen(process.env.C9_PORT, '0.0.0.0');
console.log('Server running at javascriptapp.perfp.cloud9ide.com:' + process.env.C9_PORT);


function handle_request(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('PFP test\n');
}