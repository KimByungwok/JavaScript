// 생성자 함수에 의한 객체 생성
// Object 생성자 함수

// 빈 객체의 생성
const person = new Object();

// 프로퍼티 추가
person.name = 'Lee';
person.sayHello = function () {
    console.log('Hello,' + this.name);
}

console.log(person); // {name: 'Lee', sayHello: f}
person.sayHello(); // Hello Lee 
