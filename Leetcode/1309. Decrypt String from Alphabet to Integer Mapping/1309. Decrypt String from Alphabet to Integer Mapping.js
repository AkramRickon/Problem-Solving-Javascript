var freqAlphabets = function (s) {
    let ans = '';
    let hash = {};
    let value = 97;
    for (let i = 1; i <= 26; i++, value++) {
        if (i >= 1 && i <= 9) {
            hash[i] = String.fromCharCode(value)
        }
        else {
            hash[i + '#'] = String.fromCharCode(value)
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (s[i + 2] === '#') {

            ans += hash[s.slice(i, i + 3)];
            i += 2;
        }
        else {
            ans += hash[s.slice(i, i + 1)];
        }
    }
    return ans;

};