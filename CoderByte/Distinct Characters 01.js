function DistinctCharacters(str) {

    // code goes here  
    let s = new Set(str);
    return s.size;
}

// keep this function call here 
console.log(DistinctCharacters('abcdefabc'));

