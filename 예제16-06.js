const person = {
    // 데이터 프로퍼티
    firstName: "Ungmo",
    lastName: "Lee",

    // fullName 은 접근자 함수로 구성된 접근자 프로퍼티다.
    // getter 함수
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    // setter 함수
    set fullName(name) {
        // 배열 디스트럭처링 할당: "31.1 배열 디스트럭처링 할당" 참고
        [this.firstName, this.lastName] = name.split(' ');
    }
};

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조
console.log(person.firstName + ' ' + person.lastName); // Ungmo Lee

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName 에 값을 저장하면 setter 함수가 호출된다.
person.fullName = "heegun Lee";
console.log(person); // {firstName: "heegun", LastName: "Lee"}

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼피 fullName 에 접근하면 getter 함수가 호출된다.
console.log(person.fullName); // Heegun Lee

// firstName 은 데이터 프로퍼티다.
// 데이터 프로퍼티는 [[ value ]], [[ writable ]], [[ enumerable ]], [[ configurable ]]
// 프로퍼티 어트리뷰트를 갖는다.
let descriptor = Object.getOwnPropertyDescriptors(person, 'firstName');
console.log(descriptor);
// { value: 'Heegun Lee', writable: true, enumerable: true, configurable: true }

// fullName은 접근자 프로퍼티다.
// 접근자 프로퍼티는 [[ Get ]], [[ Set ]], [[ enumerable ]], [[ configurable ]]
// 프로퍼티 어트리뷰트를 갖는다
descriptor = Object.getOwnPropertyDescriptors(person, 'fullName');
console.log(descriptor);
// { get: f, set: f, enumerable: true, configurable: true }