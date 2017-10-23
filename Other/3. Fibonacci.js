// 阶乘求和
// 普通递归(复杂度O(n))
function factorial(n) {
	if(n == 1) return 1;
	return n * factorial(n - 1);
}
//test
console.log(factorial(10));



// 阶乘求和
// 尾递归优化(复杂度O(1))
function factorial2(n, total = 1) {
	if(n == 1) return total;
	return factorial2(n - 1, n * total);
}
//test
console.log(factorial2(10));



// 斐波那契显示
function showFibo(n) {
	if(n == 1) return [1];
	if(n == 2) return [1, 1];
	if(n > 2) {
		var arr = [1, 1];
		var a = 1, b = 1, c = 2;
		for(var i = 0; i < n; i++) {
			arr.push(c);
			a = b;
			b = c;
			c = a + b;
		} 
		return arr;
	}
}
// test
console.log(showFibo(10))



// 斐波那契求和
// 普通递归(会栈溢出)
function getFibo(n) {
	if(n <= 1) return 1;
	return getFibo(n - 1) + getFibo(n - 2);
}
//test
console.log(getFibo(10));



// 斐波那契求和
// 尾递归优化
function getFibo2(n, a = 1, b = 1) {
	if(n <= 1) return b;
	return getFibo2(n - 1, b, a + b);
}
//test
console.log(getFibo2(10));