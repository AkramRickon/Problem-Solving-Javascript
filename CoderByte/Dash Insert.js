
function DashInsert(str) {

    // code goes here  
    
    return [...str].map((value,index)=> (value&1) && (str[index + 1]&1) ? value+'-' : value)
                    .join('');

}

// keep this function call here 
console.log(DashInsert('454793'));