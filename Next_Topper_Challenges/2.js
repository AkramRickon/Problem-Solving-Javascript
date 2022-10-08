

let string = 'hello123abc5ed99';
const sumOfAllDigits = (string) => {
    let numbers = string.match(/[0-9]/g);
    return numbers.map(number => Number(number)).reduce((a, b) => a + b, 0);
}

console.log(sumOfAllDigits(string));