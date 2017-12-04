// 递归
function flatten1(arr) {
    var res = [];
    for(var i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            res = res.concat(flatten1(arr[i]));
        } else {
            res.push(arr[i]);
        }
    }
    return res;
}

console.log(flatten1([1,[2,[3,[4]]]]));



// reduce
function flatten2(arr) {
    return arr.reduce((prev, item) => {
        return prev.concat(Array.isArray(item) ? flatten2(item) : item);
    }, [])
}

console.log(flatten2([1, [2, [3, [4]]]]));



// toString()
function flatten3(arr) {
    return arr.toString().split(',').map((item) => Number(item));
}

console.log(flatten3([1, [2, [3, [4]]]]));



// ES6扩展运算符
function flatten4(arr) {
    while(arr.some((item) => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}

console.log(flatten4([1, [2, [3, [4]]]]));