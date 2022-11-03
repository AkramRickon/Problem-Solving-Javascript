


let longest = "";
return sen.replace(/[^A-Za-z0-9\s]/g, "").split(' ').reduce((a, b) => a.length >= b.length ? a : b, '')