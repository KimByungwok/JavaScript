// 1. String 생성자 함수를 new 연산자 없이 호출하는 방법
// 숫자 타입 => 문자열 타입

String (1);     // "1"
String (NaN);   // "NaN"
String (Infinity);  // "Infinity"
// 불리언 타입 => 문자열 타입
String (true);  // "true"
String (false); // "false"

// 2. Object.prototype.toString 메서드를 이용한 방법
(1).toString();
(NaN).toString();
(Infinity).toString();
// 불리언 타입 => 문자열 타입
(true).toString();
(false).toString();

// 3. 문자열 연결 연산자를 이용하는 방법
// 숫자 타입 => 문자열 타입
1 + '';
NaN +'';
Infinity +'';
// 불리언 타입 => 문자열 타입
true+'';
false+'';