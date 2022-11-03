function Superincreasing(arr) {

    // code goes here
    let sum = 0;
    let flag = true;
    arr.forEach((value) => {
        if (sum >= value) {
            flag = false;
        }
        else {
            sum += value;
        }
    })
    return flag;
}

// keep this function call here 
console.log(Superincreasing([1, 2, 3, 4]));
