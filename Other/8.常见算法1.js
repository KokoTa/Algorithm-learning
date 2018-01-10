// 01.找出整型数组中乘积最大的三个数
// 最大值的情况只有两种：min1 * min2 * max1 || max1 * max2 * max3
function maxThreeInt(array) {
    var sortedArr = array.sort((a, b) => a - b);
    var p1;
    var p2;
    var len = sortedArr.length;
    if (len < 3) throw new Error("Array length must be >= 3");
    p1 = array[0] * array[1] * array[len-1];
    p2 = array[len-1] * array[len-2] * array[len-3];
    if(p1 > p2) {
        return p1;
    } else {
        return p2;
    }
}

console.log(maxThreeInt([-10, 7, 29, 30, 5, -10, -70]));


// 02.寻找连续数组中的缺失数
// 给定某无序数组，其包含了 n 个连续数字中的 n - 1 个，已知上下边界，要求以O(n)的复杂度找出缺失的数字。
// 方法一，土味方法
function findMissing(array, left, right) {
    var arr = array.sort((a, b) => a - b);
    var leftIndex = array.indexOf(left);
    var rightIndex = array.indexOf(right);
    arr = array.slice(leftIndex, rightIndex+1);
    for(var i=0; i<arr.length-1; i++) {
        var dif = arr[i+1] - arr[i];
        if (dif !== 1) {
            return arr[i] + 1;
        }
    }
}
// 方法二，以高斯求和公式计算理论上的数组和
function findMissing2(array, lower, upper) {
    var sum = array.reduce((a, b) => a + b, 0);
    var lower_limit = (lower * (lower - 1)) / 2;
    var upper_limit = (upper * (upper + 1)) / 2;
    var theoretical_sum = upper_limit - lower_limit;
    return theoretical_sum - sum;
}

console.log(findMissing([2, 5, 1, 4, 9, 6, 3, 7], 1, 9));
console.log(findMissing2([2, 5, 1, 4, 9, 6, 3, 7], 1, 9));


// 03.数组去重
// 最简单粗暴的方法(深入了解见文件5)
// ES5
function unique(array) {
    return array.filter((item, i) => {
        return array.indexOf(item) === i;
    });
}
// ES6
function unique2(array) {
    return Array.from(new Set(array));
}

console.log(unique([1,1,2,2,3,3]));
console.log(unique2([1,1,2,2,3,3]));


// 04.数组中元素最大差值计算
// 给定某无序数组，求取任意两个元素之间的最大差值
// 注意，这里要求差值计算中较小的元素下标必须小于较大元素的下标。
// 譬如[7, 8, 4, 9, 9, 15, 3, 1, 10]这个数组的计算值是 11( 15 - 4 ) 而不是 14(15 - 1)，因为 15 的下标小于 1。
function maxDif(array) {
    var minIndex = array.indexOf(Math.min.apply(null, array));
    var maxIndex = array.indexOf(Math.max.apply(null, array));
    if(minIndex <= maxIndex) {
        return array[maxIndex] - array[minIndex];
    } else {
        array.splice(minIndex, 1);
        return maxDif(array);
    }
}

console.log(maxDif([7, 8, 4, 9, 9, 15, 3, 1, 10]));

// 05.数组中元素乘积
// 给定某无序数组，要求返回新数组 output
// 其中 output[i] 为原数组中除了下标为 i 的元素之外的元素乘积，要求以 O(n) 复杂度实现：
// [2, 2, 4, 1] -> [8, 8, 4, 16]
// [-2, -2, -3, 2] -> [12, 12, 8, -12]
// [0, 0, 0, 2] -> [0, 0, 0, 0]
function productExceptSelf(array) {
    var arr = [];
    var p = 1;
    array.forEach((item) => p *= item);
    array.forEach(() => arr.push(p));
    array.forEach((item, i) => {
        arr[i] = arr[i] / array[i];
        if(isNaN(arr[i])) arr[i] = 0;
    });
    return arr;
}

console.log(productExceptSelf([2, 2, 4, 1]));
console.log(productExceptSelf([-2, -2, -3, 2]));
console.log(productExceptSelf([0, 0, 0, 2]));

// 06.数组交集
// 简单粗暴法
function intersection(arr1, arr2) {
    var arr = arr1.filter((item, index) => {
        return arr2.indexOf(item) > -1;      
    });
    return Array.from(new Set(arr));
}

console.log(intersection([2, 2, 4, 1], [1, 2, 0, 2]))

// 07.反转字符串
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("Welcome to Los Santos"));

// 08.乱序同字母字符串
// 给定两个字符串，判断是否颠倒字母而成的字符串，譬如Mary与Army就是同字母而顺序颠倒：
function isAnagram(str1, str2) {
    str1 = str1.toLowerCase().split('').sort().join('');
    str2 = str2.toLowerCase().split('').sort().join('');
    return str1 === str2;
}

console.log(isAnagram("Mary", "Army"));

// 09.回文字符串
// 判断某个字符串是否为回文字符串，譬如racecar与race car都是回文字符串：
// 要考虑空字符串~
function isPalindrome(str) {
    str = str.toLowerCase().replace(/\s/g, "");
    return str === str.split('').reverse().join('');
}

console.log(isPalindrome("race Car"));

// 10.判断大括号是否闭合
function isBalanced(str) {
    if (str.length === 0) return true;
    var left = str.match(/\{/g);
    var right = str.match(/\}/g);
    return left.length === right.length; 
}

console.log(isBalanced("{{}}{}{}"));
console.log(isBalanced("{}{{}"));
console.log(isBalanced(""));

// 11.二进制转换
// 通过递归函数将输入的数字转化为二进制字符串：
function decimalToBinary(num) {
    if (num < 1) return ""; // 隐式转换
    if (num % 2) {
        return decimalToBinary((num - 1) / 2) + 1;
    } else {
        return decimalToBinary((num) / 2) + 0;
    }
}

console.log(decimalToBinary(3));
console.log(decimalToBinary(12));
console.log(decimalToBinary(1000));

// 12.二进制转换2
// 通过循环除2将得数推入数组后再取出进行字符串拼接
function decimalToBinary2(num) {
    let arr = [];
    let rem;
    let bString = '';
    while (num > 0) {
        rem = num % 2;
        arr.push(rem);
        num = Math.floor(num / 2);
    }
    while (arr.length) {
        bString += arr.pop().toString();
    }
    return bString;
}

console.log(decimalToBinary2(3));
console.log(decimalToBinary2(12));
console.log(decimalToBinary2(1000));

// 13.判断是否为2的指数
// 利用&运算符
// `&` uses the bitwise n.
// In the case of number = 4; the expression would be identical to:
// `return (4 & 3 === 0)`
// In bitwise, 4 is 100, and 3 is 011. Using &, if two values at the same
// spot is 1, then result is 1, else 0. In this case, it would return 000,
// and thus, 4 satisfies are expression.
// In turn, if the expression is `return (5 & 4 === 0)`, it would be false
// since it returns 101 & 100 = 100 (NOT === 0)
function isPowerOfTwo(num) {
    return (num !== 0) && ((num & (num - 1)) === 0);
}

console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(0));
console.log(isPowerOfTwo(-1));