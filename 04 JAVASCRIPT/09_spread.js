var numbers = [1, 2, 3, 4, 5];
var newNumbers = [6, 7, 8];

function calculateSum(a, b, c, d, e) {
    return a + b + c + d + e;
}

console.log(calculateSum(...numbers));

var persons = ["John", "Doe", "Jane", "Smith"];
var newPersons = ["Ronaldo", ...persons, "Michael", "Sarah"];

console.log(newPersons);

var numArray = [...numbers, ...newNumbers];
console.log(numArray);


var myFunction = function(...args) {
    console.log(args);
    console.log(args.length);
}
myFunction(1, 2, 3, 4, 5);

