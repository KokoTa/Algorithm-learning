// 字符串转数字

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
	var MIN = Math.pow(-2, 31);
	var MAX = Math.pow(2, 31) - 1;
	var num = parseInt(str);
	if(str.length <= 0 || isNaN(num)) return 0;
	if(num < MIN) return MIN;
	if(num > MAX) return MAX;
	return num;
};

console.log(myAtoi("-12A"))