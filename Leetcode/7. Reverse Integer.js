// Reverse digits of an integer.

// Example1: x = 123, return 321
// Example2: x = -123, return -321

// Note:
// The input is assumed to be a 32-bit signed integer. Your function should return 0 when the reversed integer overflows.

// 注意32位整数的范围在 -2^31 ~ 2^31-1 不包括边界
// +这个符号的作用就是把字符串变为数字

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var min = Math.pow(-2, 31);
    var max = Math.pow(2, 31) - 1;
    var res = 0;
    var arr = x.toString().split('');
    
    if(x === 0) return 0;
    if(x > 0) res = +(arr.reverse().join(''));
    if(x < 0) res = -(+arr.slice(1).reverse().join(''));

    if(res > min && res < max) {
        return res;
    } else {
        return 0;
    }
    
};

// test
console.log(reverse(-123));

// 更加优化的方法
var reverse = function(x) {
    var num = 0;
    while(x != 0){
        num = num*10 + x%10;
        x = parseInt(x/10);
        if( num > 2147483648 || num<-2147483648){
            return 0;
        }
    }
    return num;
};