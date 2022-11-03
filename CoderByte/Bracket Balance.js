function RemoveBrackets(str) {

    // code goes here
    let stack = [];
    function stackTop() {
        return stack[stack.length - 1];
    }

    [...str].forEach((bracket) => {
        if (bracket === '(') {
            stack.push(bracket);
        }
        else if (bracket == ')' && stackTop() === '(') {
            stack.pop();
        }
        else if (bracket === ')' && stackTop() !== '(') {
            stack.push(bracket);
        }
    })

    return stack.length;

}

// keep this function call here 
console.log(RemoveBrackets(readline()));