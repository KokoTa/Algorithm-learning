// There are two sorted arrays nums1 and nums2 of size m and n respectively.
// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

// Example 1:
// nums1 = [1, 3]
// nums2 = [2]
// The median is 2.0

// Example 2:
// nums1 = [1, 2]
// nums2 = [3, 4]
// The median is (2 + 3)/2 = 2.5

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
	var mid = 0;
	var arr = nums1.concat(nums2);
	arr.sort((a, b) => a - b);
	var len = arr.length;

	if(len % 2 === 0) {
		mid = ((arr[(len/2)-1]) + (arr[len/2])) / 2; // Look!这里(() + ())可以优化性能噢！
	} else {
		mid = arr[Math.floor(len/2)];
	}

	return mid;
};

// test
console.log(findMedianSortedArrays([1,2],[3,4]))