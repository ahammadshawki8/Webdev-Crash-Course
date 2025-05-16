var myAge = 23;
if (myAge >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// && ||
if ((myAge >= 18) && (myAge < 60)) {
    console.log("You are a middle aged person");
}

if ((myAge >= 18) || (myAge < 60)) {
    console.log("You are a old or young person");
}


// else-if
var whatDay = "Monday";
if (whatDay == "Monday") {
    console.log("Today is Monday");
} else if (whatDay == "Tuesday") {
    console.log("Today is Tuesday");
} else if (whatDay == "Wednesday") {
    console.log("Today is Wednesday");
} else {
    console.log("Today is not Monday, Tuesday or Wednesday");
}

// nested
var num = 10;
if (num > 0) {
    console.log("Positive number");
    if (num % 2 == 0) {
        console.log("Even number");
    } else {
        console.log("Odd number");
    }
} else {
    console.log("Negative number");
}

// switch
var weekDay = "Sunday";
switch(weekDay) {
    case "Monday":
        console.log("Today is Monday");
        break;  
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    case "Thursday":   
        console.log("Today is Thursday");
        break;
    case "Friday":
        console.log("Today is Friday");
        break;
    case "Saturday":
        console.log("Today is Saturday");
        break;
    case "Sunday":
        console.log("Today is Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}
