//모듈화한 custom_module.js를 module 변수로 가져옴.
//함수를 객체처럼 사용함..ㄷㄷㄷ
var module = require('./custom_module');

console.log('sum = %d', module.sum(100));
console.log('var1 = %s', module.var1);
