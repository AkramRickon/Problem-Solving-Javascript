

function modifyArray(nums) {
    return nums.map(value => value & 1 ? value * 3 : value * 2)
}

// Testing input output
console.log(modifyArray([1, 2, 3, 4, 5]));
