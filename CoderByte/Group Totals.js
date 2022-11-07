function GroupTotals(strArr) {

    // code goes here 
    let obj = {};
    let finalStr = [];

    strArr.forEach((value) => {
        const [key, val] = value.split(':');
        if (obj[key] !== undefined) {
            obj[key] += Number(val);
        }
        else {
            obj[key] = Number(val);
        }
    })

    for (let key in obj) {
        if (obj[key] !== 0) {
            finalStr.push(`${key}:${obj[key]}`);
        }
    }

    return finalStr.sort().join(',');
}

// keep this function call here 
console.log(GroupTotals(["X:-1", "Y:1", "X:-4", "B:3", "X:5"]));