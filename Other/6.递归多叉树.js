// 递归多叉树
// https://www.zhihu.com/question/67695533
// 理解：
// 先把字符串路径转为单颗树，形成树的集合
// 然后开始累加，数组第一颗树合并第二颗树
// 如果第一颗树当前层和第二颗树当前层的名字不想等，也就意味着两者及子集都是独立的
// 因此可以将第二颗树的内容添加到第一棵树
// 如果名字相等，那就检查两棵树的子集
// 第一棵树的子集作为被查找树，第二颗树的子集的节点作为查找目标
// 重复步骤后返回合并完的第一棵树
// 接着返回这棵树作为累加的结果，然后再继续累加第三棵树，第四棵树...

var strData = [
	"path1/path2/file1",
	"path1/path3/file2",
	"path100/file3",
	"path1/path2/path4/file3"
]

function path_to_tree(path) {
	let head = path.shift();
	return path[0] ? {name : head, children: [path_to_tree(path)]} : {name : head};
}

function merge_tree(forest, tree) {
  let tree2 = forest.find(x => x.name === tree.name) // 如果name相同，返回name所在的这个对象，否则返回undefined
	if(!tree2) {
    forest.push(tree)
	} else {
		tree.children.forEach(node => {
			merge_tree(tree2.children, node) // 在总树中寻找欲合并树的节点
		})
	}
}

function parseData(strData) {
	return strData
		.map(x => x.split('/')) // 分割成二维数组
		.map(path_to_tree) // 生成单颗树
		.reduce((f, tree) => { // 累加合并这些树
			merge_tree(f, tree)
			return f
		}, [])
}

console.log(parseData(strData))
