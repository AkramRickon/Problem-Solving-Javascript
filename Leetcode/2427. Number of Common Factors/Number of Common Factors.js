
const factorsOfNumbers = (n) => {

    // all the divisors are present in pairs
    // so we dont need to iterate from 1 to n 
    // we can get all the devisors by iterating from 1 to the square root of n
    // have to be careful if there are two equal divisors (10, 10)
    // In such case we will take only one of them 
    const sqRt = Math.floor(Math.sqrt(n));
    let factors = [];

    for (let i = 0; i <= sqRt; i++) {
        if (n % i === 0) {

            //check  if divisors are equal like (6,6)
            //if yes push only one divisor
            if (n / i === i) {
                factors.push(i);
            }
            //otherwise push both divisors
            else {
                factors.push(i);
                factors.push(n / i);
            }
        }
    }
    return factors.sort((a, b) => a - b);
}

var commonFactors = function (a, b) {
    let factorsA = factorsOfNumbers(a);
    let factorsB = factorsOfNumbers(b);
    let commonValues = factorsA.filter(val => factorsB.includes(val));
    return commonValues.length;

};

console.log(commonFactors(12, 6));