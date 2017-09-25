// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example:
// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.

// Example:
// Input: "cbbd"
// Output: "bb"

// 这里用到了Manacher算法

/**
 * @param {string} s
 * @return {string}
 */

// return the Longest Palindromic Substring of s
function Manacher(s) {
  var str = '*#' // 加*为了不用判断是否已经到了边界
    , dp = [] // 回文半径
    , maxn = 0 // 回文最右端+1(即达不到的位置)
    , idx = 0; // 回文对称轴

  // 首先我们格式化字符串
  for (var i=0, len=s.length; i<len; i++) {
    str += s[i] + '#';
  }
  console.log(str);
  console.log('0123456789');

  // 然后求出dp数组
  for (var i=1, len=str.length; i<len; i++) {
  	// 如果当前索引小于最右端，因为回文对称，所以可以对称赋值
  	// 比如对称轴为dp[2]，那么就可以让dp[1] = dp[3]，从而避免从头推断增加性能损耗
  	// 注意Math.min的作用，假设dp[1]的回文半径很大(为10)，而dp[3]是倒数第二个值的话，dp[3]的半径不可能为10，所以我们要取最小值
    if (i < maxn) { 
    	console.log(true, 2*idx - i, dp[2*idx - i], maxn - i);
    	dp[i] = Math.min(dp[2*idx - i], maxn - i);
    } else {
    	dp[i] = 1;
    }
    console.log('dp['+i+'] '+dp[i]);

    // 对称点向两边扩散，看是否两边对称
    while (str[i - dp[i]] === str[i + dp[i]]) dp[i]++; 
    console.log('dp['+i+'] '+dp[i]);

    // 当前位置+当前位置的回文半径 是否大于 最右端，是的话就更新最右端值，同时更新对称点
    if ( i + dp[i] > maxn) {
      maxn = dp[i] + i, idx = i
    }
    console.log('maxn '+maxn, 'idx '+idx);
    console.log('-----');
  }

  // 然后找出最大回文半径和对应的位置
  var r = 0, pos = 0;
  for(var i=1; i< len; i++) {
  	if(dp[i] > r) {
  		r = dp[i];
  		pos = i;
  	}
  }

  // 最后得到相应字段
  var temp = str.slice(pos-r+1,pos+r).split('#').join('');
  return temp
}

var longestPalindrome = function(s) {
  var str = Manacher(s);
  return str;
};

// test
console.log(longestPalindrome('abab'))
// *#a#b#a#b#
// 0123456789