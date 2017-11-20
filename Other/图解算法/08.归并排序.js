// 归并排序

function mergeSort(arr) { // 一分为二排序后再合并
    var len = arr.length;
    if (len < 2) return arr; // 基线条件
    var mid = Math.floor(len / 2);
    var left = arr.slice(0, mid);
    var right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    var res = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            res.push(left.shift());
        } else {
            res.push(right.shift());
        }
    }

    while (left.length) res.push(left.shift());
    while (right.length) res.push(right.shift());

    return res;
}

// test
console.log(mergeSort([5, 3, 1, 2, 4]));