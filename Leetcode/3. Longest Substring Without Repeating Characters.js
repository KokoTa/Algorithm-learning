// Given a string, find the length of the longest substring without repeating characters.

// Examples:
// Given "abcabcbb", the answer is "abc", which the length is 3.
// Given "bbbbb", the answer is "b", with the length of 1.
// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

// 思路：
// 指定一个子字符串和一个截取起始点
// 然后开始遍历每个字母，如果子字符串里找不到这个字母，那么就截取从起始点到该字母之间的字段作为子字符串
// 如果子字符串中找到了字母，说明有重复，舍弃子字符串中对应字母和字母之前的所有数据，更新起始点，然后截取获得新的子字符串
// 最后对比得到字符串最大值

// 以例三为例：
// pw不存在于子字符串，子字符串赋值为'pw'
// 下一个字母w存在于子字符串中，对应索引为1，舍弃w之前所有数据，即更新起始点为 0 + 1 + 1 = 2
// 截取以索引2为起始的单个字符w作为子字符串的值，子字符串值为'w'
// ke不存在于子字符串，子字符串赋值为'wke'
// 下一个字母w存在于子字符串中，对应索引为0，舍弃w之前所有数据，即更新起始点为 2 + 0 + 1 = 3
// 截取以索引3为起始的单个字符k作为子字符串的值，子字符串值为'k'
// ew不存在于子字符串，子字符串赋值为'kew'
// 最终得到最大值为3

// PS：
// slice 性能比 substring 性能好0_0


/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
	var string = ''; // 子字符串
	var start = 0; // 截取起始点
	var maxLength = 0;

	for(var i = 0; i < s.length; i++) {
		var index = string.indexOf(s[i]);

		if(index === -1) {
			string = s.slice(start, i + 1);
		} else {
			start = start + index + 1;
			string = s.slice(start, i + 1);
		}

		if(string.length > maxLength) {
			maxLength = string.length;
		}
	}

	return maxLength;
};

// test
console.log(lengthOfLongestSubstring('pwwkew'));