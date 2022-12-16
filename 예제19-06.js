// __proto__ 접근자 프로퍼티
const obj = {};
const parent = { x: 1 };

// getter 함수인 get __proto__ 가 호출되어 obj 객체의 프로포타입을 취득
obj.__proto__;

// setter 함수의 set __proto__  가 호출되어 obj 객체의 프로토타입을 교체
obj.__proto__ = parent;

console.log(obj.x); // 1