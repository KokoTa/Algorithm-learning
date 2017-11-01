function trangles(n) {
	if(n <= 1) return console.log([1]);

	var arr = [1];
	console.log(arr);

	var total = 1;
	while(total < n) {
		arr = [1].concat(inserts(arr)).concat(1);
		console.log(arr);
		total++;
	}
}

function inserts(lastArr) {
	var temp = [];
	for(var i=0; i<lastArr.length-1; i++) { // 填充个数 = 上一个数组的长度 - 1
		temp.push(lastArr[i] + lastArr[i+1]);
	}
	return temp;
}

trangles(5);