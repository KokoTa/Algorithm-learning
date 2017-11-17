// 找到最小值
function findSmallest(arr) {
	var smallest = arr[0];
	var smallestIndex = 0;
	for(var i=1; i<arr.length; i++) {
		if(arr[i] < smallest) {
			smallest = arr[i];
			smallestIndex = i;
		}
	}
	return smallestIndex;
}

// 选择排序
function selectionSort(arr) {
	var newArr = [];
	var smallestIndex;
	var len = arr.length; // 由于传入的数组会一直减少，因此需要把长度另存
	for(var i=0; i<len; i++) {
		smallestIndex = findSmallest(arr);
		newArr.push(arr.splice(smallestIndex, 1)[0]);
	}
	return newArr;
}

console.log(selectionSort([4,6,1,22,5,124,55,33,126]));