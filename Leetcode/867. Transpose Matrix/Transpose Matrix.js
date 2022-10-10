var transpose = function (matrix) {
    let transparentMatrix = [];
    let m = matrix[0].length;
    let n = matrix.length;
    for (let i = 0; i < m; i++) {
        let temp = [];
        for (let j = 0; j < n; j++) {
            temp.push(matrix[j][i])
        }
        transparentMatrix.push(temp);
    }
    return transparentMatrix;
};

console.log(transpose([[1, 2, 3], [4, 5, 6]]));