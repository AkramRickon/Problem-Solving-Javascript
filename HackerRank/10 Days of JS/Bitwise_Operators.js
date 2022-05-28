
function getMaxLessThanK(n, k) {
    let max = 0;
    for (let i = 1; i < n; i++) {
        for (let j = i + 1; j <= n; j++) {
            let temp = (i & j);
            if (temp < k && temp > max) {
                max = temp;
            }
        }
    }
    return max;
}

// Testing input output
console.log(getMaxLessThanK(5, 2));
console.log(getMaxLessThanK(8, 5));
console.log(getMaxLessThanK(2, 2));
console.log(getMaxLessThanK(9, 2));
console.log(getMaxLessThanK(8, 3));