
function SwapCase(str) {

    // code goes here  
    return str.split('')
        .map(value => value >= 'A' && value <= 'Z' ? value.toLowerCase() :
            (value >= 'a' && value <= 'z') ? value.toUpperCase() : value)
        .join('');

}

// keep this function call here 
console.log(SwapCase(readline()));