let text = 'nqxg w rcmjk';

const decode = (msg, key) => {
    return msg.split('').map(val => val === ' ' ? val : val.charCodeAt()).map(val => val === ' ' ? val : String.fromCharCode(val - key)).join('');
}

console.log(decode(text, 2));
