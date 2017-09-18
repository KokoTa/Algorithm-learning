// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order and each of their nodes contain a single digit. 
// Add the two numbers and return it as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8

// 提示1：我们可以看到上面的规律，2+5=7；4+6=10，进1取0；3+4+1=8。
// 提示2：While循环的判断使用的是||，因而需要在循环内分别判断l1和l2的存在情况。
// 提示3：head变量作为指针。
// 提示4：考虑最终退出循环是否有进位。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
	let sum = l1.val + l2.val;
	let l = new ListNode(sum % 10);
	let head = l;
	let carry = sum >= 10 ? 1 : 0;

	l1 = l1.next;
	l2 = l2.next;

	while(l1 !== null || l2 !== null) {
		let v1 = l1 !== null ? l1.val : 0;
		let v2 = l2 !== null ? l2.val : 0;

		sum = v1 + v2 + carry;
		carry = sum >= 10 ? 1 : 0;
		head.next = new ListNode(sum % 10);
		head = head.next;

		if(l1 !== null) l1 = l1.next;
		if(l2 !== null) l2 = l2.next;
	}

	if(carry === 1) {
		head.next = new ListNode(1);
		head = head.next;
	}

	return l;
};

//test

function ListNode(val) {
	this.val = val;
	this.next = null;
}

var a1 = new ListNode(2);
var a2 = new ListNode(4);
var a3 = new ListNode(3);
a1.next = a2;
a2.next = a3;

var b1 = new ListNode(5);
var b2 = new ListNode(6);
var b3 = new ListNode(4);
b1.next = b2;
b2.next = b3;

var s = addTwoNumbers(a1, b1);
console.log(s);