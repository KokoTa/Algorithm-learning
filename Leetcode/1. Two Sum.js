// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// 直接双重循环进行扫描

let twoSum = function(nums, target) {
	let len = nums.length;
	for(let i=0; i<len-1; i++) {
		for(let j=i+1; j<len; j++) {
			if(nums[i] + nums[j] == target) {
				return [i, j];
			}
		}
	}
	return null;
}

// test
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([13, 43, 15, 2], 45)); // [1, 3]