const friends = ["Murad", "Sefuda", "Pori Moni", "Mahi", "Emon"];

const whoWillGetCane = (n) => {
    return friends[(n - 1) % 5];
}

console.log(whoWillGetCane(1803));