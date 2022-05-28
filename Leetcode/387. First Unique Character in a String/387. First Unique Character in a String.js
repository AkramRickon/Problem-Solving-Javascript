
//solution 1
var firstUniqChar = function (s) {
    let nonReaptingValues = [];
    for (let i = 0; i < s.length; i++) {
        let flag = 1;
        for (let j = 0; j < s.length; j++) {
            if (s[i] === s[j] && i !== j) {
                flag = 0;
                break;
            }
        }
        if (flag) {
            nonReaptingValues.push(i);
            break;
        }
    }
    return nonReaptingValues.length ? nonReaptingValues[0] : -1;

};

//Soution 2
var firstUniqChar = function (s) {
    const map = {};
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = map[s[i]] + 1 || 1;
    }
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === 1) return i;
    }
    return -1;
};

//solution 3
var firstUniqChar = function (s) {
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return i;
        }
    }
    return -1;
};