// 좌항의 피연산자가 null 또는 undefined 이면 우항의 피연산자를 반환하고, 
// 그렇지 않으면 좌항의 피연산자를 반환한다

var foo = null ?? 'default string';
console.log(foo);   // default string

// falsy 값인 0이나 '' 도 기본값으로서 유효하다면 예기치 않은 동작이 발생할 수 있다.
var foo = '' || 'default string';
console.log(foo);   // default string

// 좌항의 피연산자가 falsy 값이라도 null 또는 undefined 가 아니면 좌항의 피연산자를 반환
var foo = '' ?? 'default string';
console.log(foo);   // ''