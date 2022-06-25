function sumFibs(num) {
    let fibo = [];
    fibo[0] = 1;
    fibo[1] = 1;
    let sum = 2;
    for (let i = 2; sum < num; i++) {
        // console.log('Sum :', sum, 'num : ', num);
        fibo[i] = fibo[i - 1] + fibo[i - 2];
        // console.log('Fibo : ', fibo[i]);
        if (fibo[i] > num) {
            break;
        }
        else if ((fibo[i] & 1)) {
            sum += fibo[i];
        }
    }
    return num > 2 ? sum : num;
}

console.log(sumFibs(75024));


// 1, 1, 2, 3, 5, 8, 13, 21 , 34, 55 , 98.