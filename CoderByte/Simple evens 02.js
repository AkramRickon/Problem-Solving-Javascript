

function SimpleEvens(num) {

    // code goes here  
    return num.toString().split('').map(value => Number(value)).every(value => value % 2 === 0);

}

console.log(SimpleEvens(20864646425));



