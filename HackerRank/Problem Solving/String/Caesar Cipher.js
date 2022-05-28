function caesarCipher(s, k) {
    let value = s.split('').map(letter => letter.charCodeAt(0));
    for (let i = 0; i < value.length; i++) {
        
        if (value[i] >= 65 && value[i] <= 90) {
            value[i] += k % 26;
            if (value[i] > 90) {
                value[i] -= 26;
            }
        }
        else if (value[i] >= 97 && value[i] <= 122) {
            value[i] += k % 26;
            if (value[i] > 122) {
                value[i] -= 26;
            }
        }
    }
    value=value.map(value=>String.fromCharCode(value)).join('');
    return value;
}
