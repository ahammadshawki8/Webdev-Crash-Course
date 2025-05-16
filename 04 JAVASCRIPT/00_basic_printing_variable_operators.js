// Hello World
var country = "Bangladesh";
console.log("Hello World! I am from " + country + ".");

// Variables
var person = "Ahammad Shawki";
var age = 25;
var salary = 100000.87;
var isStudent = true;
var something = null;

// String concatenation
var message = "Name: " + person + ", Age: " + age + ", Salary: " + salary + ", Is Student: " + isStudent + ", Something: " + something;
console.log(message);

// String interpolation (template literals)
var message2 = `Name: ${person}, Age: ${age}, Salary: ${salary}, Is Student: ${isStudent}, Something: ${something}`;
console.log(message2);

// Typeof operator
console.log(typeof(person));
console.log(typeof(age));
console.log(typeof(salary));
console.log(typeof(isStudent));

age = "Hello";
console.log(typeof(age));

// operators
var a = 10;
var b = 20;

var c = a + b;
var d = a - b;
var e = a * b;
var f = a / b;
var g = a % b;
var h = a ** b;
var i = a++;
var j = ++a;
var k = a--;
var l = --a;

console.log(c + " " + d + " " + e + " " + f + " " + g + " " + h + " " + i + " " + j + " " + k + " " + l);

// Comparison operators
var x = 10;
var y = 20;
console.log(x == y); // false
console.log(x != y); // true
console.log(x === y); // false
console.log(x !== y); // true
console.log(x > y); // false
console.log(x < y); // true
console.log(x >= y); // false
console.log(x <= y); // true

console.log(10 == "10"); // true
console.log(10 === "10"); // false

// Logical operators
var p = true;
var q = false;
console.log(p && q); // false
console.log(p || q); // true
console.log(!p); // false

// Assignment operators
var m = 10;
var n = 20;
m += n; 
console.log(m); // 30
m -= n; 
console.log(m); // 10
m *= n; 
console.log(m); // 200
m /= n; 
console.log(m); // 10

// turnary operator
var age = 18;
var isAdult = (age >= 18) ? "Adult" : "Not Adult";
console.log(isAdult); // Adult