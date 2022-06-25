function sumFibs(num) {
    let fibo = [1, 1];
    let sum = 0;
    for (let i = 2; fibo[i - 1] + fibo[i - 2] <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
        sum += (fibo[i] & 1) ? fibo[i] : 0;
    }
    return sum + 2;

}

console.log(sumFibs(75025));