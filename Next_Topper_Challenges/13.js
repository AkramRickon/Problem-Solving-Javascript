const numbers = [9,9,9,9,9];

const removeItemns = (numbers) => {
    let avg = (numbers.reduce((a, b) => a + b, 0) / numbers.length).toFixed(2);
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < avg) {
            count++;
        }
    }
    return count;
}

console.log(removeItemns(numbers));