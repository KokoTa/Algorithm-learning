// 栈：先进后出

// 数据结构
function Stack() {
  let items = [];

  this.push = (e) => items.push(e);
  this.pop = () => items.pop();
  this.peek = () => items[items.length - 1];
  this.isEmpty = () => items.length === 0;
  this.size = () => items.length;
  this.clear = () => items = [];
  this.print = () => console.log(items.toString());

}

// 应用1：二进制转换
// 因为转换方式是除以基数后结果的反序，用栈很OK
// 以下函数可以将十进制转为其他进制
function divideBy2(num, base) {
  let stack = new Stack();
  let rem;
  let result = '';
  let digits = '0123456789ABCDEF';
  // 获得结果数组
  while (num > 0) {
    rem = Math.floor(num % base);
    stack.push(rem);
    num = Math.floor(num / base);
  }
  // 反序抽出
  while (!stack.isEmpty()) {
    result += digits[stack.pop()].toString();
  }

  return result;  
}

console.log(divideBy2(100, 2));

// 应用2：括号平衡
// 创建一个栈，将左括号放入栈中，当遇到右括号时，从栈中提取一个括号，在匹配函数中对比两者是否类型相同

// 判断括号类型是否一致
function match(open, close) {
  let opens = '([{';
  let closes = ')]}';
  return opens.indexOf(open) === closes.indexOf(close);
}

function parenthesesChecker(str) {
  let stack = new Stack();
  let char = '';
  let open = '';
  let index = 0;
  let balance = true;

  while (index < str.length && balance) { // 如果出现不平衡就跳出循环
    char = str.charAt(index);
    if (char == '(' || char == '[' || char == '{') { // 如果是左括号就推入栈
      stack.push(char);
    } else {
      if (stack.isEmpty()) { // 栈已经空了但这一轮还有char，说明不平衡，比如 '[])'
        balacne = false;
      } else { // 栈没空，栈取出的char和当前char对比是否同类型，若不是则说明不平衡，比如 '(]'
        open = stack.pop();
        if (!match(open, char)) {
          balance = false;
        }
      }
    }

    index++;
  }

  if (balance && stack.isEmpty()) return true;  // 这里判断栈是否空是因为有可能匹配完后栈还有残留，说明不平衡，比如 '[()'
  
  return false;
}

console.log(parenthesesChecker('{{([][])}()}'));
console.log(parenthesesChecker('[{()]'));
