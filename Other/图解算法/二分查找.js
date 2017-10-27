// 二分查找

function binary_search(list, item) {
	var low = 0; // 范围左边界
	var high = list.length - 1; // 范围右边界

	while(low <= high) { // 只要范围没有缩小到只包含一个元素
		var mid = Math.floor((low + high) / 2); // 中间索引
		var guess = list[mid]; // 中间值
		if(guess == item) {
			return mid;
		}
		if(guess > item) { // 缩小范围
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}

	return false; // 没有找到
}

// test
console.log(binary_search([1,3,4,7,8], 7));