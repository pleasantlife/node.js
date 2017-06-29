var http = require ('http');
//url 모듈을 require로 불러옴
var url = require('url');
//querystring 모듈을 require로 불러옴.
var querystring = require('querystring');

// http.createServer 함수를 이용해 서버 생성
var server = http.createServer(function(request, response){
  //브라우저에서 요청한 주소를 parsing하여 객체화 후 출력
  var parsedUrl = url.parse(request.url);
  console.log(parsedUrl);
  //parsedUrl에서 query string부분만 따로 가공 후 객체화하여 출력
  var parsedquery = querystring.parse(parsedUrl.query,'&','=');
  console.log(parsedquery);

  //http 연결이 되는 지 확인.
  response.writeHead(200, {'Content-Type' : 'text/html'});
  //보낸 값에 대한 처리를 받은 곳에서.
  //response.end('var1의 값은 :'+parsedquery.var1);
  response.end('var1 : ' + parsedquery.var1 + 'var2 : ' + parsedquery.var2 + 'var3 : ' + parsedquery.var3);
});

server.listen(8080, function(){
  console.log('Server is running...');
});
