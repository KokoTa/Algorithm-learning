// 计数排序

function countingSort(arr, maxValue) {
    var b = new Array(maxValue + 1); // 要求用于计数的数组长度要 >= 传入数组中最大的值+1
    var sortedIndex = 0;
    var len = arr.length;
    var bLen = b.length;

    for(var i=0; i<len; i++) { // 计数
        if(!b[arr[i]]) {
            b[arr[i]] = 0;
        }
        b[arr[i]]++;
    }

    for(var i=0; i<bLen; i++) { // 赋值
        while(b[i] > 0) {
            arr[sortedIndex++] = i;
            b[i]--; 
        }
    }

    return arr;
}

console.log(countingSort([2,3,4,2,1], 4));