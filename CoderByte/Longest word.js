function LongestWord(sen) { 

    // code goes here  
    return sen.replace(/[^A-Za-z0-9\s]/g,'')
              .split(' ')
              .reduce((prev,curr)=>curr.length > prev.length ? curr :prev)
  }