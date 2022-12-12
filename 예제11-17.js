var person = {
    name : 'Lee'
};

// 참조 값을 복사 (얉은 복사). copy 와 person 은 동일한 참조 값을 갖는다.
var copy = person;

// copy 와 person 은 동일한 객체를 참조한다.
console.log(copy === person); // true

// copy 를 통해 객체를 변경한다.
copy.name = "kim";

// person 을 통해 객체를 변경한다.
person.address = "Seoul";

// copy 와 person 은 동일한 객체를 가리킨다.
// 따라서 어느 한쪽에서 객체를 변경하면 서로 영향을 주고받는다.
console.log(person);    // {name : "kim" , address : "Seoul" }
console.log(copy);      // {name : "kim" , address : "Seoul" }