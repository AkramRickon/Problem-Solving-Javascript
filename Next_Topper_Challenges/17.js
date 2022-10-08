
const arr = [
    ["name", "javascript"],
    ["age", 23]
]
const arrayToObject = (arr) => {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        const [key, value] = arr[i];
        obj[key] = value;
    }
    return obj;
}

console.log(arrayToObject(arr));