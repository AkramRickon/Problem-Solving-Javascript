function ChangingSequence(arr) {

    // code goes here  
    for (let i = 1; i < arr.length - 1; i++) {
        if ((arr[i] < arr[i - 1]) && (arr[i] < arr[i + 1])) {
            return i;
        }
        else if ((arr[i] > arr[i - 1]) && (arr[i]) > arr[i + 1]) {
            return i;
        }
    }
    return -1;
}