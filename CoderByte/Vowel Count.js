
function VowelCount(str) {

    // code goes here  
    let numOfVowels = str.match(/[a,e,i,o,u]/g);
    return numOfVowels ? numOfVowels.length : 0;
}

// keep this function call here 
console.log(VowelCount("coderbyte"));