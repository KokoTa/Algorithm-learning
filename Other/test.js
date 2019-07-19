function insertSort(list = []) {
    for(let i = 1 , len = list.length; i < len; i++){
        let j = i - 1;
        let temp = list[ i ]; // 被抽出来比较的数
        while (j >= 0 && list[ j ] > temp){ // 这个数和前面的每个数比较，如果前面的数大于被比较数，则让这个数后移一位
            list[j + 1] = list[ j ];
            j = j - 1;
        }
        list[j + 1] = temp;
    }
    return list;
}

console.log(insertSort([1,6,5,2,4,3]));

