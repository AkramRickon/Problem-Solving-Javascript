function FindIntersection(strArr) {

    let [strA, strB] = strArr;

    strA = strA.split(', ');
    strB = strB.split(', ');

    let intersectedArr = strA.filter(value => strB.includes(value));
    return intersectedArr.length ? intersectedArr.join(',') : false;
}