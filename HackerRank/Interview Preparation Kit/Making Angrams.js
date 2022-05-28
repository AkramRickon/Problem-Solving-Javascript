


function makeAnagram(a, b) {
    a = a.split('').map(char => char.charCodeAt());
    b = b.split('').map(char => char.charCodeAt());
    let f1 = [];
    let f2 = [];
    let result = 0;
    for (let i = 0; i < 26; i++) {
        f1[i] = f2[i] = 0;
    }
    for (let i = 0; i < a.length; i++) {
        f1[a[i] - 97]++;
    }
    for (let j = 0; j < b.length; j++) {
        f2[b[j] - 97]++;
    }
    for (let i = 0; i < 26; i++) {
        if (f1[i] !== f2[i]) {
            result += Math.abs(f1[i] - f2[i]);
        }
    }
    return result;
}