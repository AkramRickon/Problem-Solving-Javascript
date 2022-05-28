


function hackerrankInString(s) {
    let temp = "hackerrank";
    let i, j;
    for (i = 0, j = 0; i < s.length; i++) {
        if (s[i] == temp[j]) {
            j++;
        }
    }
    return j == temp.length ? "YES" : "NO";
}

// testing input output 
console.log(hackerrankInString('ashackkerrawrnkl'));