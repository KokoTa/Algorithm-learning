// 希尔排序(插入排序的优化)
// 图解：http://blog.csdn.net/mevicky/article/details/46041657
// 可视化：http://www.atool.org/sort.php

function shellSort(arr) {
    var len = arr.length;
    var temp;
    var gap = 1; // 间隔
    while (gap < len/3) {
        gap = gap * 3 + 1;  // 自定义间隔
    }
    while (gap > 0) { // 假设数组长度为9，则执行两次，间隔为4一次，间隔为1一次
        for (var i = gap; i < len; i++) { // 假设数组长度为9，假设间隔为4，则按间隔分割的组数为9-4=5组(可画图理解)，每组都要进行插入排序
            temp = arr[i]; // 取得这组间隔数组的最后一个元素
            for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) { // 使用插入排序，前面一个是否大于后面一个  
                arr[j + gap] = arr[j];
            }
            arr[j + gap] = temp;
        }
        gap = Math.floor(gap / 3);
    }
    return arr;
}

// test
console.log(shellSort([5, 3, 1, 2, 4, 8, 9, 6, 7]));