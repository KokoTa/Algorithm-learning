// 桶排序
// 计数排序的升级版
// 主要适用于小范围整数数据，且独立均匀分布，可以计算的数据量很大，而且符合线性期望时间

var insertionSort = require('./06.插入排序');

function bucketSort(arr, bucketSize) {
    if(arr.length === 0) return arr;
    var res = [];
    var minValue = Math.min.apply(null, arr);
    var maxValue = Math.max.apply(null, arr);

    var DEFAULT_SIZE = 5; // 一个桶能装多少
    bucketSize = bucketSize || DEFAULT_SIZE;
    var bucketCount = Math.floor((maxValue-minValue)/bucketSize) + 1; // 需要几个桶
    var buckets = new Array(bucketCount);
    for(var i=0; i<buckets.length; i++) buckets[i] = []; // 桶初始化

    for(var i = 0; i<arr.length; i++) {
        buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]); // 映射后分配到各个桶中
    }

    for(var i=0; i<buckets.length; i++) {
        insertionSort(buckets[i]); // 排序各个桶
        for(var j=0; j<buckets[i].length; j++) {
            res.push(buckets[i][j]); // 输出各个桶中已排序好的元素
        }
    }
    
    return res;
}

console.log(bucketSort([7, 36, 65, 56, 33, 60, 110, 42, 42, 94, 59, 22, 83, 84, 63, 77, 67, 101]));