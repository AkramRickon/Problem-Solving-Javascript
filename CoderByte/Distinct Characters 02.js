function DistinctCharacters(str) {

    // code goes here  
    let hashMap = {};
    str.split('').forEach((value) => {
        hashMap[value] = true;
    })
    return Object.keys(hashMap).length >= 10 ? true : false;
}

// keep this function call here 
console.log(DistinctCharacters('abcdefghijcccbbbaa'));

