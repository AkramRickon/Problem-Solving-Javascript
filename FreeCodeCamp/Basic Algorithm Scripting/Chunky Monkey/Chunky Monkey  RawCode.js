function chunkArrayInGroups(arr, size) {
    let finalArray = [];
    let tempArray = [];
    for (let i = 0; i < arr.length; i++) {
        tempArray.push(arr[i]);
        if (tempArray.length % size === 0) {
            finalArray.push(tempArray);
            tempArray = [];
        }
    }
    if (tempArray.length) {
        finalArray.push(tempArray);
    }
    return finalArray;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));

