// 재귀 함수
/*
function countdown(n){
    for (var i=n; i >= 0; i--) console.log(i);
}

countdown(10);
*/

function countdown(n){
    if (n < 0) return;
    console.log(n);
    countdown(n-1); // 재귀 호출
}
countdown(10);

