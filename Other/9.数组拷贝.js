// 多维数组运用递归，二维数组用concat/slice等

function arrayDeepCopy(arr) {
    var newArr = [];
    for(var i = 0; i < arr.length; i++) {
        if (arr[i] instanceof Array) { // 递归条件
            newArr[i] = arrayDeepCopy(arr[i]);
        } else { // 基线条件
            newArr[i] = arr[i];
        }
    }
    return newArr;
}

var test = [1, [2, 3, [4]]];
console.log(arrayDeepCopy(test) == test)