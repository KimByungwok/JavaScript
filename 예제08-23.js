// continue 문

var string = "Hello World";
var search = 'l';
var count = 0;

// 문자열은 유사 배열이므로 for 문으로 순회할 수 있다.
// for (var i = 0; i<string.length; i++){
//     // 'l' 이 아니면 현 지점에서 실행을 중단하고 반복문의 증감식으로 이동한다.
//     if (string[i] !== search)continue;
//     count++; // continue 문이 실행되면 이 문은 실행되지 않는다.
// }
//

// 위 for 문 과 동일한 결과를 뽑는 다른 구문 08-24
// for(var i =0; i<string.length; i++){
//     // 'l' 이면 카운트 증가
//     if(string[i] == search) count++;
// }

// continue 문을 사용하지 않으면 if 문 내에 코드를 작성해야 한다. 08-25
for (var i = 0; i<string.length; i++){
    // 'l' 이면 카운트 증가
    if (string[i] == search){
        count++
        // code;
        // code;
        // code;
    }
}

// continue 문을 사용하면 if 문 밖에 코드를 작성할 수 있다 08-25
for (var i = 0; i<string.length; i++){
    // 'l' 이면 카운트 증가
    if (string[i] == search) continue;

    count++
    // code;
    // code;
    // code;
}


console.log(count);

// 참고로 string.prototype.match 메서드를 사용해도 같은 동작을 한다
const regexp = new RegExp(search, 'g');
console.log(string.match(regexp).length); //3


