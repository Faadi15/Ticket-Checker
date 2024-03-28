// =================================else if Assingment=================================
let visitor_age: number = 31

if (visitor_age <= 12){
    console.log("Hey kid Welcome to our National Park.");
}
else if  (visitor_age <= 18){
console.log ("Hey Teenager! Your ticket amount is Rs.100, Welcome to Our Park.");
}
else if (visitor_age <= 30) {
console.log ("Your ticket amount is Rs.200, Welcome to our National Park.");
}
else if (visitor_age <= 60){
console.log ("Most Welcome! You are Senior Citizen and your ticket is free.");  
}
else {
    console.log ("Sorry you can't enter, becouse you are too Late.")
}