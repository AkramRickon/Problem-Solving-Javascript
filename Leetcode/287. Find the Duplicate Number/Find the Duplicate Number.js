var findDuplicate = function (nums) {

    let hashMap = {};
    for (let i = 0; i < nums.length; i++) {
        hashMap[nums[i]] = hashMap[nums[i]] + 1 || 1;
    }

    for (let key in hashMap) {
        if (hashMap[key] > 1) {
            return key;
        }
    }

};

console.log(findDuplicate([1, 3, 4, 2, 2]));
console.log(findDuplicate([3, 1, 3, 4, 2]));
console.log(findDuplicate([1, 3, 4, 2, 2]));
