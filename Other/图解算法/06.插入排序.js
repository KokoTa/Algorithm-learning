// 插入排序

function insertionSort(arr) {
	var len = arr.length;
	var current; // 抽出用来比较的数
	var preIndex; // 与current比较的数
	for (var i = 1; i < len; i++) {
		preIndex = i - 1;
		current = arr[i];
		while (preIndex >= 0 && arr[preIndex] > current) {
			arr[preIndex + 1] = arr[preIndex]; // 元素后移一位
			preIndex--;
		}
		arr[preIndex + 1] = current;
	}
	return arr;
}

if (/06/.test(process.argv[1])) {
	// 防止执行桶排序时输出插入排序的结果
	// test
	console.log(insertionSort([ 5, 3, 1, 2, 4 ]));
}

module.exports = insertionSort;
