

function SimpleEvens(num) {

    // code goes here  
    let flag = true;
    num = num.toString().split('').map(value => Number(value));
    num.forEach((value) => {
        if (value & 1) {
            flag = false;
        }
    })
    return flag;
}

console.log(SimpleEvens(20864646452))

