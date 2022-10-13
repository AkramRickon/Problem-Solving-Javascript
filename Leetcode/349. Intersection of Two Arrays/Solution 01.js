var intersection = function (nums1, nums2) {
    let hash = {};
    nums1 = nums1.filter((val, index) => index === nums1.indexOf(val));
    nums2 = nums2.filter((val, index) => index === nums2.indexOf(val));

    nums1.forEach(val => {
        hash[val] = true;
    })

    return nums2.filter(val => hash[val]);

};