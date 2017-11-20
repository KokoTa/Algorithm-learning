// 快速排序
// 这里是一个利用外存的方法(创建了数组lower/higher)
// 还有一种不利用外存的方法，见啊哈算法的内容

function quickSort(array) {
    if (array.length < 2) { // 基线条件
        return array;
    } else { // 递归条件
        var p = array[Math.floor(array.length/2)]; // 基准值最好是随机的
        var lower = [];
        for(var i=0; i<array.length; i++) {
            if (array[i] < p) lower.push(array[i]);
        }
        var higher = [];
        for (var i = 0; i < array.length; i++) {
            if (array[i] > p) higher.push(array[i]);
        }
        return quickSort(lower).concat(p).concat(quickSort(higher));
    }
}

console.log(quickSort([1,5,6,8,4,3]));