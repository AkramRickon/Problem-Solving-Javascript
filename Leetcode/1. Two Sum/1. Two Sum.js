var twoSum = function (nums, target) {
    const hashMap = {};
    for (let i = 0; i < nums.length; i++) {
        if ((target - nums[i]) in hashMap) {
            return [hashMap[target - nums[i]], i];
        }
        hashMap[nums[i]] = i;
    }
    return -1;
};

console.log(twoSum([1, 3, 4, 2], 6))
console.log(twoSum([3, 2, 3], 6))

