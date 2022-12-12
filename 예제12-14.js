var add1 = (function (){
    var a = 10;
    return function (x,y){
        return x + y + a;
    };
}());

console.log('add1: '+add1(1,2)); // 13

var add2 = (function(){
    var b = 10;
    return new Function('x','y','return x + y + b;');
}());

console.log('add2: '+add2(1,2));     // ReferenceError: a is not defined