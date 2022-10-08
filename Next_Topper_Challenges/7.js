let positions = '10100111000000';

const isDanger = (str) => {
    //solution 01
    // return (/(0){7}|(1){7}/g).test(str) ? 'YES' : 'NO';
    //solution 02
    let count = 1;
    for (let i = 0; i < str.length - 1; i++) {
        if (count === 7) {
            return 'YES';
        }
        if (str[i] === str[i + 1]) {
            count++;
        }
        else {
            count = 1;
        }
    }
    return 'NO';
}
console.log(isDanger(positions));