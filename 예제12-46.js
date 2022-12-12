// 함수 표현식
var factorial = function foo(n){
    // 탈출 조건 : n 이 1 이하일 때 재귀 호출을 멈춘다.
    if (n <= 1) return 1;
    // 함수를 가리키는 식별자로 자기 자신을 재귀 호출
    return n* factorial(n - 1);

    // 함수 이름으로 자기 자신을 재귀 호출할 수도 있다.
    // console.log(factorial === foo); // true
    // return n * foo (n -1);
};

console.log(factorial(5));