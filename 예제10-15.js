var person = {
    'last-name' : 'lee',
    1: 10
};


// 옳은 표기법 나머지는 다 X
person["last-name"]; 
person[1];

// es6 의 메서드 축약 표현
const obj = {
    name : 'Lee',
    // 메서드 축약 표현
    sayHi() {
        console.log('hi ' + this.name);
    }
};

obj.sayHi();