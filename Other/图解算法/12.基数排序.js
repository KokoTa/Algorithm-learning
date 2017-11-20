// 基数排序(LSD低位到高位)
// 按个位->十位->百位的顺序来排序

function radixSort(arr, digit) {
    var mod = 10;
    var dev = 1;
    var buckets = [];
    for (var i = 0; i < digit; i++) { // digit：几位数
        for (var j = 0; j < arr.length; j++) {
            var index = parseInt((arr[j]%mod)/dev); // 桶的序号，求法好神奇0 0
            if(buckets[index] == null) {
                buckets[index] = [];
            }
            buckets[index].push(arr[j]);
        }

        var pos = 0;
        for(var j=0; j<buckets.length; j++) {
            if(buckets[j] != null) { // 如果桶里有值
                var len = buckets[j].length;
                for(k=0; k<len; k++) { // 生成新数组
                    arr[pos++] = buckets[j].shift();
                }
            }
        }

        mod *= 10;
        dev *= 10;
    }
    
    return arr;
}

// test
console.log(radixSort([7, 36, 65, 56, 33, 60, 110, 42, 42, 94, 59, 22, 83, 84, 63, 77, 67, 101], 3));





// 基数排序：根据键值的每位数字来分配桶；
// 计数排序：每个桶只存储单一键值；
// 桶排序：每个桶存储一定范围的数值；