// for 문 내 중첩 for 문 가능

for (var i = 1; i <=6; i++){
    for (var j = 1; j<=6; j++){
        if (i + j == 6) console.log(`[${i}, ${j}]`);
        // ` 백틱을 사용하면 문자는 문자로 인식 ${변수명} 으로 변수 값 출력 가능
    }
}