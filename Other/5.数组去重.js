const ArrayFilter = {
  /**
   * 使用 indexOf
   */
  useIndexof(arr) {
    return arr.filter((item, index) => {
      // indexOf返回第一个索引值
      // 如果这个索引不是第一个索引，说明是重复值
      // arr.indexOf(NaN) 永远等于 -1
      return arr.indexOf(item) === index;
    })
  },
  /**
   * 使用 indexOf
   */
  useIndexOf2(arr) {
    let res = [] // 结果数组
    arr.forEach((item) => {
      if (res.indexOf(item) === -1) {
        res.push(item)
      }
    })
    return res
  },
  /**
   * 使用 includes
   */
  useIncludes(arr) {
    var res = [];
    arr.forEach((item) => {
      if(!res.includes(item)) {
        res.push(item);
      }
    });
    return res;
  },
  /**
   * 使用遍历
   * 碰到一样的值就跳过，当跳到最后一个值时推入结果数组
   */
  useTraverse(arr) {
    let res = [];
    let len = arr.length;
    for(let i=0; i<len; i++){
        for(let j=i+1; j<len; j++){
            if(arr[i] === arr[j]){
              i++; // i和j位置的值重复了，跳到下一位
              j=i+1; // 重置对比标识
            }
        }
        // 跳出内循环的i的值都是唯一的，推入数组
        res.push(arr[i]);
    }
    return res;
  },
  /**
   * 使用遍历和 splice
   */
  useTraverse2(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          arr.splice(j--, 1)
        }
      }
    }
  },
  /**
   * 使用对象 key-value
   */
  useObject(arr) {
    let res = [];
    let len = arr.length;
    // 这里有坑，key只能为字符串，因此会有局限：
    // 1. 无法区分隐式转换字符串后的值，比如1被转为'1'
    // 2. 无法处理复杂数据类型，比如对象被传伟'[object Object]'
    // 3. 特殊属性，比如key为'__proto__'会挂掉，因为它无法被重写
    // 因此需要创造特殊的字符串形式
    let temp = {};
    let tempKey;
    for(let i=0; i<len; i++) {
      tempKey = typeof arr[i] + JSON.stringify(arr[i]);
      if(!temp[tempKey]) {
        temp[tempKey] = 1;
        res.push(arr[i]);
      }
    }
    return res;
  },
  /**
   * 使用 Map，key 没有类型限制
   */
  useMap(arr) {
    let res = [];
    let len = arr.length;
    let temp = new Map();
    for(let i=0; i<len; i++) {
      if(!temp.get(arr[i])) {
        temp.set(arr[i], 1);
        res.push(arr[i]);
      }
    }
    return res;
  },
  /**
   * 使用 Set
   */
  useSet(arr) {
    let set = new Set(arr);
    return Array.from(set);
  }
}


// 测试用例
// [1,1,'1','1',0,0,'0','0',undefined,undefined,null,null,NaN,NaN,{},{},[],[],/a/,/a/]
