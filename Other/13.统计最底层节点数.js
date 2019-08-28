/**
 * 统计每个节点下有多少个最底层节点
 * 比如以下树形结构，a 共有三个最底层节点，分别是 c/d/e；b 共有两个最底层节点，分别是 c/d；e 没有最底层节点
 */


const util = require('util')

const data = {
  a: {
    b: {
      c: {},
      d: {}
    },
    e: {}
  }
}

function fn(data) {
  const keys = Object.keys(data)

  keys.forEach((key) => {
    const obj = data[key]

    if (Object.keys(obj).length) {
      fn(obj)

      const objKeys = Object.keys(obj)
      objKeys.forEach((key) => {
        if (obj[key].number) {
          if (!obj.number) obj.number = 0
          obj.number += obj[key].number
        }
      })
    } else {
      obj.number = 1
    }
  })

}

fn(data)

console.log(util.inspect(data, {
  compact: false,
  depth: Infinity
}));
