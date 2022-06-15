function translatePigLatin(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    str = [...str];
    let clustar = '';
    for (let i = 0; i < str.length; i++) {
        if (!vowels.includes(str[i])) {
            clustar += str[i];
        }
        else {
            break;
        }
    }
    return vowels.includes(str[0]) ? str.join('') + 'way' : str.slice(clustar.length).join('') + clustar + 'ay';
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("schwartz"));