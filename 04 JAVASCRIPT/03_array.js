var numArray = new Array(10, 20, 30, 40, 50, 60);
var nameArray = new Array("John", "Jane", "Doe");
var mixedArray = new Array(10, "John", true, null, undefined);

console.log(numArray);
console.log(nameArray);

console.log(nameArray[2]);
nameArray[2] = "Smith";
console.log(nameArray[2]);

var [a, b, c, _] = numArray;
console.log(a);
console.log(b);

console.log(mixedArray.length);

nameArray.push("Doe");
console.log(nameArray);
var popped = nameArray.pop();
console.log(popped);    

numArray.unshift(70);
console.log(numArray);
var shifted = numArray.shift();
console.log(shifted);

console.log(numArray.indexOf(30));

console.log(numArray.splice(2, 3));
console.log(numArray);

for (var i = 0; i < numArray.length; i++) {
    console.log(numArray[i]);
}

for (var i in numArray) {
    console.log(numArray[i]);
}

for (var i of numArray) {
    console.log(i);
}

numArray.forEach(element => {
    console.log(element);
});