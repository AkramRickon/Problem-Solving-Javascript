
function chunkArrayInGroups(arr, size) {
    let finalArray = [];
    let i = 0;
    while (i < arr.length) {
        finalArray.push(arr.slice(i, i + size));
        i += size;
    }
    return finalArray;
}
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));

