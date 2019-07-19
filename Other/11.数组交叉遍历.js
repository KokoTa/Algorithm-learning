// 二维数组，第一层数组循环，第一次循环显示第二层数组第一个数据，第二次循环显示第二层数组第二个数据，以此类推
// eg:
// [[1], [2, 3], [], [4, 5, 6, 7], [8]] 应该返回 [ 1, 2, 4, 8, 3, 5, 6, 7 ]

const arr = [[1], [2, 3], [], [4, 5, 6, 7], [8]]

function show(arr) {
  let maxLength = 0
  let index = 0
  let newArr = []

  arr.forEach((d) => {
    if (d.length > maxLength) maxLength = d.length
  })

  while (index < maxLength) {
    arr.forEach((d) => {
      if (d[index]) newArr.push(d[index])
    })
    index++
  }

  console.log(newArr)
}

show(arr)
