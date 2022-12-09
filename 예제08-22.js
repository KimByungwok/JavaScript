var string = "Hello World";
var search = 'l';
var index;

// 문자열은 유사 배열이므로 for 문으로 순회할 수 있다.
for (var i = 0; i < string.length; i++){
    if (string[i] == search){
        index = i;
        break;
    }
}

console.log('index : ',index);
console.log();
console.log('index : ',string.indexOf(search)); // 참고로 string.prototype.indexOf 메서드를 써도 똑같은 값이 나옴
