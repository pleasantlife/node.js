var http = require ('http');
var url = require ('url');

var server = http.createServer(function(request, response){
  console.log(request.url);
  var parsedUrl = url.parse(request.url);
  var resource = parsedUrl.pathname;
  console.log('resource path=%s', resource);

  if(resource == '/address'){
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.end('서울특별시 강남구 논현1동 111');

  }else if(resource == '/phone'){
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.end('<p>012-345-6789</p><br> <a href="http://localhost:8080/address">주소확인하기</a>');
  }else if(resource == '/name'){
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.end('Hong Gil Dong');
  }else {
    response.writeHead(404, {'Content-Type' : 'text/html'});
    response.end('<p><h1>404 Page Not Found</h1></p> <br> <a href="http://www.naver.com">나가기</a> ');
  }

});
server.listen(8080, function(){
  console.log('server is running...');
});
