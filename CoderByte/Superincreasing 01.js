function Superincreasing(arr) {

    // code goes here
    let sumArray = [...arr];
    for (let i = 1; i < arr.length-1; i++) {
        sumArray[i] = sumArray[i] + sumArray[i - 1];
    }

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= sumArray[i - 1]) {
            return false;
        }
    }
    return true;

}

// keep this function call here 
console.log(Superincreasing([1, 2, 5, 10]))