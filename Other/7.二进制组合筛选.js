// 12位的二进制
// 找出其所有排列组合中包含连续4个及以上1的比例

console.log(

[...Array(Math.pow(2, 12))]
	.map((x, i) => i)
	.filter(x => x.toString(2).match(/1111/)).length / Math.pow(2, 12)
);