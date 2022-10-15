
// Splice returs the number of element that it deletes
function chunkArrayInGroups(arr, size) {
    let finalArray = [];
    for (let i = 0; i < arr.length; i++) {
        finalArray.push(arr.splice(i, size));
        i--;
    }
    return finalArray;
}
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));