function sumPrimes(num) {
    let primes = [];
    let sieve = Array(num + 1).fill(0);
    sieve[0] = sieve[1] = 1;
    primes.push(2);
    for (let i = 4; i <= num; i += 2) {
        sieve[i] = 1;
    }
    for (let i = 3; i <= Math.floor(Math.sqrt(num)); i += 2) {
        if (sieve[i] === 0) {
            for (let j = i * i; j <= num; j += i + i) {
                sieve[j] = 1;
            }
        }
    }
    for (let i = 3; i <= num; i += 2) {
        if (sieve[i] === 0) {
            primes.push(i);
        }
    }

    return primes.reduce((x, y) => x + y);
}

console.log(sumPrimes(977));
