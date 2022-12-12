var obj = {};
var key = 'hello';

// es5 : 프로퍼티 키 동적 생성
obj[key] = "world";
// es6 : 개선된 프로퍼티 이름
// var obj = { [key] : "world" };

console.log(obj);  // {hello : "world" }