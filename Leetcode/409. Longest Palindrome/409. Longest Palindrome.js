
//Solution 1
var longestPalindrome = function (s) {
    let map = {};
    let ans = 0;
    for (let char of s) {
        map[char] = (map[char] || 0) + 1;
        if (map[char] % 2 === 0) {
            ans += 2;
        }
    }
    return s.length > ans ? ans + 1 : ans;
};

//Solution 2
var longestPalindrome = function (s) {
    let hash = {};
    let even = 0;
    let odd = 0;
    for (let i = 0; i < s.length; i++) {
        hash[s[i]] = hash[s[i]] + 1 || 1;
    }
    for (let key in hash) {
        if (hash[key] % 2 === 0) {
            even += hash[key];
        }
        else {
            even += hash[key] - 1;
            odd = 1;
        }
    }
    return even + odd;

};
