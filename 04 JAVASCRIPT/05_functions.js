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