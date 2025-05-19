function printSomething() {
  console.log("Something");
}

printSomething();

var printSomething2 = function() {
  console.log("Something2");
}

printSomething2();

function add(a, b) {
  return a + b;
}

var sum = add(5, 10);
console.log(sum);

function callMyName(name, callback) {
    var age = 20;
    callback(age);
    console.log("Hello " + name);
}

function printAge(age) {
    console.log("Your age is " + age);
}

callMyName("Shawki", printAge);


function welcomeMsg(name){
    console.log("Welcome " + name);
    return function(menu){
        console.log("Goodbye " + name + ", your order is " + menu);
    }
}

welcomeMsg("Shawki")("Pizza");

// IIFE
(function() {
    console.log("I am an IIFE");
})();

var sum = (function(a,b) {
    return a + b;
})(5, 10);

console.log(sum);

// Arrow function
var controller = (function() {
    var a = {
        name: "Shawki",
        age: 25,
        salary: 100000.87,
        isStudent: true,
    }
    return a;
})();

var interface = (function() {
    return "Hello " + controller.name;
})();

console.log(interface);

// Auto Global Variable
function printName() {
    name = "Shawki";
}
printName();
console.log(name);

// closure
function outerFunction() {
    var outerVariable = "I am outside!";
    function innerFunction() {
        var innerVariable = "I am inside!";
        console.log(innerVariable);

        console.log(outerVariable);
    }
    return innerFunction;
}

var innerFunc = outerFunction();
innerFunc();

// closure with parameters
function outerFunction2(name) {
    console.log("My name is " + name);
    function innerFunction2(age) {
        console.log(name + " is " + age + " years old.");
    }
    return innerFunction2;
}

outerFunction2("Shawki")("25");


// default parameter
function add(a, b = 10) {
    return a + b;
}
console.log(add(5)); 
console.log(add(5, 20));