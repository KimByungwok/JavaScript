// 모든 객체가 __proto__ 접근자 프로퍼티를 사용할 수 있는 것이 아니기 때문에 다른 방법을 살펴보자

const obj = {};
const parent = { x: 1 };

// obj 객체의 프로토타입을 취득
Object.getPrototypeOf(obj);     // obj.__proto__; 와 동일한 것
// obj 객체의 프로토타입을 교체
Object.setPrototypeOf(obj, parent); // obj.__proto__ = parent; 와 동일한 것

console.log(obj.x); // 1