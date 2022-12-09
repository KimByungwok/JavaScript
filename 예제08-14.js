var count = 0;
// count 가 3보다 작을 때까지 코드 블럭을 계속 반복

// while(count < 3){
//     console.log(count);
//     count++;
// }

// 동일한 방법으로 좀 다르게 쓰면

// while(true){
//     console.log(count)
//     count++;
//     if(count == 3) break;
// }

// do while 문으로도 가능

do{
    console.log(count);
    count++;
} while(count < 3 );