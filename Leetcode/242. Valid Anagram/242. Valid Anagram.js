//Solution 1
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    let f1 = [];
    let f2 = [];
    for (let i = 0; i < 26; i++) {
        f1[i] = 0;
        f2[i] = 0;
    }

    for (let i = 0; i < s.length; i++) {

        f1[s.charCodeAt(i) - 97]++;
    }

    for (let i = 0; i < t.length; i++) {
        f2[t.charCodeAt(i) - 97]++;
    }

    for (let i = 0; i < 26; i++) {
        if (f1[i] !== f2[i]) {
            return false;
        }
    }
    return true;
};

// Solution 2 
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    let f = [];
    for (let i = 0; i < 26; i++) {
        f[i] = 0;
    }
    for (let i = 0; i < s.length; i++) {
        f[s.charCodeAt(i) - 97]++;
        f[t.charCodeAt(i) - 97]--;
    }
    for (let i = 0; i < 26; i++) {
        if (f[i] !== 0) { return false };
    }
    console.table(f);
    return true;
};

// Solution 3
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    let map = {};
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = map[s[i]] + 1 || 1;
    }
    for (let i = 0; i < t.length; i++) {
        if (map[t[i]]) {
            map[t[i]]--;
        }
        else return false;
    }
    return true;
};

// solution 4
var isAnagram = function (s, t) {
    s = s.split('').sort().join('');
    t = t.split('').sort().join('');
    return s === t;
};