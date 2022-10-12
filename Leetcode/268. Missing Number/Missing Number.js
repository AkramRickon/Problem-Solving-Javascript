/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    nums = nums.sort((a, b) => a - b);
    for (let i = 0; i <= nums.length; i++) {
        if (i !== nums[i]) {
            return i;
        }
    }
};
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
console.log(missingNumber([3, 1, 0]));
console.log(missingNumber([1, 0]));



// 0 1 2 3 4 5 6 7  9 