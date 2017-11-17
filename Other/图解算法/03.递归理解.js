/**
 * 递归-分而治之
 */

// 递归累加数组

function sum(array) {
    if (array.length == 0) {
        return 0;
    }
    return array[0] + sum(array.slice(1));
}

console.log(sum([1,2,3,4,5,6,7,8,9]))

// 递归累加得到元素数量

function count(array) {
    if (array.length == 0) {
        return 0;
    }
    return 1 + count(array.slice(1));
}

console.log(count([1,1,1,1,1]))

// 递归找出数组中最大的数字

function max(array) {
    if (array.length == 2) {
        if (array[0] > array[1]) {
            return array[0];
        } else {
            return array[1];
        }
    }

    sub_max = max(array.slice(1));

    if (array[0] > sub_max) {
        return array[0];
    } else {
        return sub_max;
    }
}

// 12,50 返回50
// 56,50 返回56
// 24,56 返回56
// 1,56 返回56
console.log(max([1,24,56,12,50]))