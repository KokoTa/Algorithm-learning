// 判断输入的数是否是回文数

// 方法1
var isPalindrome = function(x) {
  var num = x;
  var res = 0;
  var dig;
  while(num > 0) {
      dig = num % 10;
      res = res * 10 + dig;
      num = ~~(num / 10); // 取整
  }
  return (res === x );
};

// 方法2
var isPalindrome2 = function(x) {
	if(x < 0) return false;
	var re = x.toString().split('').reverse().join('');
	if(Number(re) === x) {
		return true;
	} else {
		return false;
	}
};