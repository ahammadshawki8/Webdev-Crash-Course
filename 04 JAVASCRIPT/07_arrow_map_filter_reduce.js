var aFunc = (a, b) => (a + b);

console.log(aFunc(5, 10));

var dob = [1996, 1997, 1998, 1999, 2000];

// map method
var ages = dob.map((year) => 2025 - year);

console.log(ages);

var ages2 = dob.map((year, index, fullArr) =>`${index} : ${2025 - year} : ${fullArr}`);
console.log(ages2);


// filter method
var newArr = dob.filter((year) => year > 1998);
console.log(newArr);

var newArr2 = dob.filter((year, index) => year > 1998 && index > 1);
console.log(newArr2);


// reduce method
var sum = dob.reduce((sum, year) => sum + (2025 - year), 0);
console.log(sum);


// determining the value of this
var obj = {
    name: "Shawki",
    dob: 1996,
}

var anotherArr = [1, 2, 3, 4, 5];
var newArr3 = anotherArr.map(function() {
    console.log(this === global);
});
var newArr4 = anotherArr.map(function() {
    console.log(this === obj);
    console.log(this === global);
}, obj);


// some method
var numArr = [1, 2, 3, 4, 5];
console.log(numArr.some(item => item % 2 == 0));

console.log(numArr.some(item => {
    console.log(item);
    return item % 2 == 0;
}));


// every method
console.log(numArr.every(item => item > 0));