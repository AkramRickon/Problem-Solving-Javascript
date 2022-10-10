
// Approach 1
const solve = (arr, n) => {
    let ans = [];
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        temp.push(arr[i]);
        if (temp.length === n) {
            ans.push(temp);
            temp = [];
        }
    }
    if (temp.length) {
        ans.push(temp);
    }
    return ans;
}

// Approach 2
const solve2 = (arr, n) => {
    let ans = [];
    while (arr.length) {
        ans.push(arr.splice(0, n));
    }
    return ans;
}

console.log(solve([1, 2, 3, 4, 5, 6], 2));
console.log(solve([1, 2, 3, 4, 5, 6, 7], 3));
console.log(solve(['a', 'c', 'f', 'k', 'a', 'o', 'n'], 4));