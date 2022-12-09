var elem = null;

// elem 이 null 또는 undefined 이면 undefined 를 반환하고, 그렇지 않으면 우항의 프로퍼티 참조를 이어간다

var value = elem?.value;
console.log(value);     // undefined

// elem 이 falsy 값이면 elem 으로 평가, elem 이 truthy 값이면 elem.value 로 평가
var value = elem && elem.value;
console.log(value);     // null

var str = '';

// 문자열의 길이 (length) 를 참조한다.
var length = str && str.length;

// 문자열의 길이를 참조하지 못한다.
console.log(length);    // '' 

// 문자열의 길이를 참조, 좌항 피연산자가 false 로 평가 되는 값이라도
// null 또는 undefined 가 아니면 우항의 프로퍼티 참조를 이어감

var length = str?.length;
console.log(length);    // 0