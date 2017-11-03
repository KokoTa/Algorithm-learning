// Array.prototype.indexOf()
// 测试结果：NaN被全部删除
function unique(arr) {
	return arr.filter((item, index) => {
		// indexOf返回第一个索引值
		// 如果这个索引不是第一个索引，说明是重复值
		return arr.indexOf(item) === index;
	})
}
// 测试结果：NaN全部被保留
function unique2(arr) {
	var res = [];
	arr.forEach((item) => {
		if(res.indexOf(item) === -1) {
			res.push(item);
		}
	});
	return res;
}

// Array.prototype.includes() ES6新增
// 可以判断NaN
// 测试结果：OK
function unique3(arr) {
	var res = [];
	arr.forEach((item) => {
		if(!res.includes(item)) {
			res.push(item);
		}
	});
	return res;
}

// 使用遍历
// 碰到重复的值就跳过，碰到唯一的值就推入
// 测试结果：NaN全部被保留
function unique4(arr) {
    var res = [];
    var len = arr.length;
    for(var i=0; i<len; i++){
        for(var j=i+1; j<len; j++){
            if(arr[i] === arr[j]){
            	i++; // i和j位置的值重复了，跳到下一位
            	j=i+1; // 重置对比标识
            }
        }
        // 跳出内循环的i的值都是唯一的，推入数组
        res.push(arr[i]);
    }
    return res;
}

// 使用对象Key
// 测试结果：字符串和数字无法区分，对象/数组/正则执行OK
function unique5(arr) {
	var res = [];
	var len = arr.length;
	// 这里有坑，key只能为字符串，因此会有局限：
	// 1. 无法区分隐式转换字符串后的值，比如1被转为'1'
	// 2. 无法处理复杂数据类型，比如对象被传伟'[object Object]'
	// 3. 特殊属性，比如key为'__proto__'会挂掉，因为它无法被重写
	// 因此需要创造特殊的字符串形式
	var temp = {};
	var tempKey;
	for(var i=0; i<len; i++) {
		tempKey = typeof arr[i] + JSON.stringify(arr[i]);
		if(!temp[tempKey]) {
			temp[tempKey] = 1;
			res.push(arr[i]);
		}
	}
	return res;
}

// MapKey ES5
// Map是一种新的数据类型，可以把它想象成key类型没有限制的对象。
// 它的存取使用单独的get()、set()接口。
// 测试结果：OK
function unique6(arr) {
	var res = [];
	var len = arr.length;
	var temp = new Map();
	for(var i=0; i<len; i++) {
		if(!temp.get(arr[i])) {
			temp.set(arr[i], 1);
			res.push(arr[i]);
		}
	}
	return res;
}

// Set ES6
// 测试结果：OK
function unique7(arr) {
	var set = new Set(arr);
	return Array.from(set);
}

// 测试用例
// [1,1,'1','1',0,0,'0','0',undefined,undefined,null,null,NaN,NaN,{},{},[],[],/a/,/a/]