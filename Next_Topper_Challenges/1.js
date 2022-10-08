let colors = ['red', 'blue', 'orange', 'black'];

const largestString = (colors) => {

    /*solution 01*/
    return colors.reduce((prev, curr) => prev.length > curr.length ? prev : curr);
    /*solution 02*/
    // let maxLength = Math.max(...colors.map(color => color.length));
    // return colors.find(color => color.length === maxLength);
    /*solution 03*/
    // let longString = '';
    // colors.forEach((color) => {
    //     longString = color.length > longString.length ? color : longString;
    // })
    // return longString;
}
console.log(largestString(colors));