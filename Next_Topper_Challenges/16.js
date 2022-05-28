
//Approach 1
const solve1 = (arr) => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return max - min;
}
//Approach 2
const solve2 = (arr) => {
    let max = arr[0];
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        else {
            min = arr[i];
        }
    }
    return max-min;
}

console.log(solve2([3, 4, 2, 4, 1, 2]));