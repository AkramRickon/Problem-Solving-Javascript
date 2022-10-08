
const numbers = [5, 10, -8, -6, 0, 1, 2, -5];

const onlyPositives = (nums) => {
    return nums.filter(num => num >= 0);
}

console.log(onlyPositives(numbers));
