// 프로퍼티 정의에 대하여

const person = {};

// 데이터 프로퍼티 정의
Object.defineProperty(person, 'firstName', {
    value: 'Ungmo',
    writable: true,
    enumerable: true,
    configurable: true
});

Object.defineProperty(person, 'lastName', {
    value: "Lee"
});

let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log('firstName', descriptor);
// firstName { value: "Ungmo" , writable: true, enumerable: true, configurable: true }

// 디스크립터 객체의 프로퍼티를 누락시키면 undefined, false 가 기본값이다.
descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
console.log('lastName', descriptor);
// lastName { value: "Lee" , writable: false,enumerable: false ,configurable:false }

// [[ Enumerable ]] 의 값이 false 인 경우 해당 프로퍼티의 [[ Value ]] 의 값을 변경할 수 없다.
// lastName 프로퍼티는 [[writable]]의 값이 false 이므로 값을 변경할 수 없다.
// 이때 값을 변경하면 에러는 발생하지 않고 무시된다.
person.lastName = "Kim";

// [[ configurable ]] 의 값이 false 인 경우 해당 프로퍼티를 삭제할 수 없다.
// lastName 프로퍼티는 [[configuravble]]의 값이 false 이므로 삭제할 수 없다
// 이때 프로퍼티를 삭제하면 에러는 발생되지 않고 무시된다.
delete person.lastName;

// [[ configurable ]] 의 값이 false 인 경우 해당 프로퍼티를 재정의할 수 없다.
// Object.defineProperty (person, 'lastName', { enumerable: true });
// Uncaught TypeError : Cannot redefine property: lastName

descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
console.log('lastName', descriptor);
// lastName { value: "Lee", writable: false, enumerable: false, configurable: false }

// 접근자 프로퍼티 정의
Object.defineProperty(person, 'fullName', {
    // getter 함수
    get() {
        return `${this.firstName} ${this.lastName}`;
    },
    // setter 함수
    set(name) {
        [this.firstName, this.lastName] = name.split(' ');
    },
    enumerable: true,
    configurable: true
});

descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log('fullName', descriptor);
// fullName {get: f, srt: f, enumerable: true, configurable: true }

person.fullName = "Heegun Lee";
console.log(person); // {firstName: "Heegun Lee", lastName: "Lee" }

