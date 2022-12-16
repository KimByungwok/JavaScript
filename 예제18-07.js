function sum() {
    // arguments 객체를 배열로 전환
    const array = Array.prototype.slice.call(arguments);
    return array.reduce(function (pre, cur) {
        return pre + cur;
    }, 0);
}

console.log(sum(1, 2));
console.log(sum(1, 2,3,4,5));