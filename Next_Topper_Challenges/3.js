const grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]


const transform = (grid) => {
    let transformedArray = [];
    for (let i = 0; i < grid.length; i++) {
        let temp = [];
        for (let j = 0; j < grid.length; j++) {
            temp.push(grid[j][i]);
        }
        transformedArray.push(temp);
    }
    return transformedArray;
}

console.log(transform(grid));