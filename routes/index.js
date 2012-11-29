
/*
Get Eden page
*/
var http = require("http")

exports.index = function(req, res){
  http.get({host: 'edengame.net'}, function(response) {
      res.writeHead(200);
      res.end(response.body);
  });
};