const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
let ans = [];
for (let i = 0; i < arr.length; i++) {
    const temp = [];
    for (let j = 0; j < arr[i].length; j++) {
        temp.push(arr[j][i]);
    }
    ans.push(temp);
}
console.log(ans);