// 이 예제는 브라우저 (개발자 도구 콘솔) 에서 실행해야 함.
let x = 1;

// let, const 키워드로 선언한 전역 변수는 전역 객체 window의 프로퍼티가 아나디ㅏ.
console.log(window.x); // undefined
console.log(x); // 1

const foo = 1;

const foo; // Syntax error: Missing initialization in const declarations
{
    // 변수 호스팅이 발생하지 않는 것처럼 동작함
    console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
    const foo = 1;
    console.log(foo); // 1
}

// 블록 레벨 스코프를 갖는다.
console.log(foo); // ReferenceError: foo is not defined

// 재할당 금지
const foo1 = 1;
foo1 = 2; // TypeError: Assignment to constant variable

