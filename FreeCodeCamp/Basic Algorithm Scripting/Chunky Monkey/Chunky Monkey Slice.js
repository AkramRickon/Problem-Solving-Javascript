
function chunkArrayInGroups(arr, size) {
    let finalArray = [];
    for (let i = 0; i < arr.length; i = i + size) {
        finalArray.push(arr.slice(i, i + size));
    }
    return finalArray;
}
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));