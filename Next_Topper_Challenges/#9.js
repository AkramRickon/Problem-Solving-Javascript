const str = 'ACBCBC';

const isEMpty = (str) => {
    //*solution 01 */
    // return (/(AC)|(CA)/).test(str) ? "NO" : "YES";
    //Solution 02
    for (let i = 0; i < str.length - 1; i++) {
        if ((str[i] === 'A' && str[i + 1] === 'C') || (str[i] === 'C' && str[i + 1] === 'A')) {
            return 'NO';
        }
    }
    return 'YES';

}
console.log(isEMpty(str));