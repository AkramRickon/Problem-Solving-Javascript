function myReplace(str, before, after) {
    after = (before[0] > 'A' && before[0] <= 'Z') && (after[0] >= 'a' && after[0] <= 'z') ? String.fromCharCode([...after][0].charCodeAt(0) - 32) + after.slice(1) : after;
    after = (before[0] > 'a' && before[0] <= 'z') && (after[0] >= 'A' && after[0] <= 'Z') ? String.fromCharCode([...after][0].charCodeAt(0) + 32) + after.slice(1) : after;

    return str.replace(before, after);

}

console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"))