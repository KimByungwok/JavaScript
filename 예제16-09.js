const person = {};

Object.defineProperties(person, {
    // 데이터 프로퍼티 정의
    firstName: {
        Value: "Ungmo",
        writable: true,
        enumerable: true,
        configurable: true
    },
    lastName: {
        Value: "Lee",
        writable: true,
        enumerable: true,
        configurable: true
    },
    // 접근자 프로퍼티 정의
    fullName: {
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
    }
});

person.fullName = "Heegun Lee";
console.log(person); // {firstName: "Heegun", lastName : "Lee" }