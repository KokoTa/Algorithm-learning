// Given a string, find the length of the longest substring without repeating characters.

// Examples:
// Given "abcabcbb", the answer is "abc", which the length is 3.
// Given "bbbbb", the answer is "b", with the length of 1.
// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

// 思路：
// 指定一个子字符串和一个截取起始点
// 然后开始遍历每个字母，如果子字符串里找不到这个字母，那么就截取从起始点到该字母之间的字段作为子字符串
// 如果子字符串中找到了字母，说明有重复，更新起始点位置为最新字母的位置，然后截取这个字母作为新的子字符串
// 最后对比得到字符串最大值

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