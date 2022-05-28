
let arr = [1, 2, 3, 6, 9, 8, 7, 4];
let buttons = [1, 2, 3, 6, 9, 8, 7, 4]

document.getElementById('btn5').addEventListener('click', () => {
    arr.unshift(arr.pop());
    for (let i = 0; i < arr.length; i++) {
        document.getElementById(`btn${buttons[i]}`).innerHTML = arr[i];
    }
})