


function Javascript_Dates(dateString) {
    let dayName;
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // Write your code here
    let day = new Date(`${dateString}`).getDay();
    dayName = days[day];

    return dayName;
}

//Testing input output 
console.log(Javascript_Dates('10/11/2009'));
console.log(Javascript_Dates('11/10/2010'));

