//require 예약어로 http 모듈을 불러옴. 자바의 import 같은 기능.
var http = require('http');

//http 모듈 내의 createServer 함수를 호출하여 서버 생성.
//함수명 없이 function이라고만 작성된 파라미터는 이벤트 발생시 callback됨.

var server = http.createServer(function(request,response){

  //response->200 = http.ok!
  response.writeHead(200, {'Content-Type' : 'text/html'});
  response.end('Hello node.js!!');
});

server.listen(8080,function(){
  console.log('Server is running...');
});
