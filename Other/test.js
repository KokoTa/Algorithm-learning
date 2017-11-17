function getSmallest(array) {
    var smallest = array[0];
    var len =  array.length;
    var index = 0;
    for(let i=0; i<len; i++) {
        if(smallest > array[i]) {
            smallest = array[i];
            index = i;
        }
    }
    return index;
}

function order(array) {
    var len = array.length;
    var newArr = [];

    for (let i = 0; i < len; i++) {
        var smallestIndex = getSmallest(array);
        newArr.push(array.splice(smallestIndex, 1)[0]);
    }

    return newArr;
}

console.log(order([4,7,8,5,4,2,4,66,78]));