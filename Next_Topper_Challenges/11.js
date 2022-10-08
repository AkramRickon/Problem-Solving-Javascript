

const favouriteNumbers = (n) => {
    const numbers = [];
    for (let i = 1; i <= 2000; i++) {
        if (i % 3 === 0 || i % 10 === 3) {
            continue;
        }
        else {
            numbers.push(i);
        }
    }
    return numbers[n - 1]
}

console.log(favouriteNumbers(1000));