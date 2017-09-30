// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: 
// (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R

// And then read line by line: "PAHNAPLSIIGYIR"
// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string text, int nRows);
// convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".

// ZigZag：比如输入0-20后存储格式如下，而输出则按行输出：0 8 16 1 7 9 15 17...
// 0	 	 	 	8	 	 	 		16	 	 	 
// 1	 	 	7	9	 	 		1517	 	 	 
// 2	 	6	 	10	 	14	18	 	 	 
// 3	5	 	 	11	13	 	19	 	 	 
// 4	 	 	 	12	 	 	 	20	 	 	 


// 从上面的示例我们可以找到规律
// 垂直循环的次数 = numRows
// 斜面循环的次数 = numRows - 2
// 这道题可以用二维数组存放各个字符，然后循环取出拼接
// 但是我们用另外一种更方便的方法，只需要用到一维数组
// 我们在一维数组中存放numRows个空字符串，然后按ZigZag的顺序扫描字符串，找到对应数组项并添加扫描到的字符

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
	var temp = [];
	for(var i = 0; i < numRows; i++) {
		temp[i] = '';
	}

	var i = 0;
	while(i < s.length) {
		for(var k = 0; k < numRows && i < s.length; k++) {
			temp[k] += s[i];
			i++;
		}
		for(var k = numRows-2; k > 0 && i < s.length; k--) {
			temp[k] += s[i];
			i++;
		}
	}

	for(var i = 1; i < temp.length; i++) {
		temp[0] += temp[i];
	}

	return temp[0];
}

// test
console.log(convert('ABCDEFGHIJKLMN', 4));