var http = require ('http');
var querystring = require ('querystring');

var server = http.createServer(function(request, response){
  var postdata ='';
  //request 객체가 data 이벤트가 발생할 때, data 변수를 callback 함수에 담아서 내부 로직을 실행
  request.on('data', function (data){
    postdata = postdata + data;
  });

  request.on('end', function(){
    var parsedquery = querystring.parse(postdata);
    console.log(parsedquery);
    //응답하는 데이터의 헤더 부분을 설정.
    //여기서는 상태코드와 타입을 설정함.
    response.writeHead(200, {'Content-Type' : 'text/html'});
    //바디 부분에 response.write(내용)으로 html 태그를 보낼 수 있음.
    //그렇지만 불편하니까 response.end(내용)으로 한번에 보내는게 편함.
    response.end('var1 = ' + parsedquery.var1);
  });

});

server.listen(8080, function(){
  console.log('server is running...');
});
