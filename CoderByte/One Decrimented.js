function OneDecremented(str) {

    let count = 0;
    [...str].forEach((value, index) => {
        if ((value - str[index + 1]) === 1) {
            count++;
        }
    });
    return count;

}

console.log(OneDecremented("5655984"));