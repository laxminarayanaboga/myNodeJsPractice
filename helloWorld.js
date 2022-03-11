var http = require('http');
var mydate = require('./myfirstmodule.js');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Current date and time: " + mydate.myDateTime());
  res.write("<br>");
  res.write("the request url: " + req.url);
  res.write("<br>");
  var q = url.parse(req.url, true).query;
  res.write(q.year + " " + q.month);

  res.end();
}).listen(8080);