//1. 서버 사용을 위해서 http 모듈을 http 변수에 담는다.
//모듈과 변수의 이름은 달라도 ok!

var http = require('http');

//2. http 모듈로 서버를 생성한다.
var server = http.createServer(function(request,response){
  response.writeHead(200, {'Content-Type' : 'text/html'});
  response.end('Hello nodejs!!!');
});

server.listen(8080, function(){
  console.log('Server is running...');
});
