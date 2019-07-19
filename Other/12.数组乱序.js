// 文章链接：https://juejin.im/post/5d004ad95188257c6b518056

// 多层随机得到的随机不准确(比如 50% x 50% = 25%)
function shuffle1(arr) {
	return arr.sort(() => Math.random() - 0.5);
}

// 确保随机值，但性能差
function shuffle2(arr) {
	let newArr = arr.map((item) => ({ val: item, ram: Math.random() }));
	newArr.sort((a, b) => a.ram - b.ram);
	arr.splice(0, arr.length, ...newArr.map((i) => i.val));
	return arr;
}

// Fisher–Yates 算法，乱序最优解
function shuffle3(arr) {
	let m = arr.length;
	while (m) {
		let index = Math.floor(Math.random() * m--);
		let cur = arr[m];
		arr[m] = arr[index];
		arr[index] = cur;
	}
	return arr;
}

// 测试
function test_shuffle(shuffleFn) {
	// 多次乱序数组的次数
	let n = 100000;
	// 保存每个元素在每个位置上出现的次数
	let countObj = {
		a: Array.from({ length: 10 }).fill(0),
		b: Array.from({ length: 10 }).fill(0),
		c: Array.from({ length: 10 }).fill(0),
		d: Array.from({ length: 10 }).fill(0),
		e: Array.from({ length: 10 }).fill(0),
		f: Array.from({ length: 10 }).fill(0),
		g: Array.from({ length: 10 }).fill(0),
		h: Array.from({ length: 10 }).fill(0),
		i: Array.from({ length: 10 }).fill(0),
		j: Array.from({ length: 10 }).fill(0)
	};
	for (let i = 0; i < n; i++) {
		let arr = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j' ];
		shuffleFn(arr);
		countObj.a[arr.indexOf('a')]++;
		countObj.b[arr.indexOf('b')]++;
		countObj.c[arr.indexOf('c')]++;
		countObj.d[arr.indexOf('d')]++;
		countObj.e[arr.indexOf('e')]++;
		countObj.f[arr.indexOf('f')]++;
		countObj.g[arr.indexOf('g')]++;
		countObj.h[arr.indexOf('h')]++;
		countObj.i[arr.indexOf('i')]++;
		countObj.j[arr.indexOf('j')]++;
	}
	console.table(countObj);
}

test_shuffle(shuffle1);
test_shuffle(shuffle2);
test_shuffle(shuffle3);
