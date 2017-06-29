//events 모듈 생성.
var EventEmitter = require('events');
//생성한 events 모듈을 사용하기 위해 custom_object 객체에 담음.
var custom_object = new EventEmitter();

//events 모듈 내에 있는 on()함수를 재정의하여 'call' 이벤트를 처리함.
//그러나 이것만으로는 실행되는 것은 아무것도 없음.
custom_object.on('call', () => {
  console.log('called events!');
});

//그래서 강제로 'call'이벤트를 발생시킴.
custom_object.emit('call');
