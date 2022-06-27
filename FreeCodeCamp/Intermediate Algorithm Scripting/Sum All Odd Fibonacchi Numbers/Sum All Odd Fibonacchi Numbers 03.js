function sumFibs(num) {

    let fibo = [1, 1];

    for (let i = 2; fibo[i - 1] + fibo[i - 2] = num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }

    return fibo.filter(val = val & 1).reduce((a, b) = a + b);
}

console.log(sumFibs(75024));








1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 98.
