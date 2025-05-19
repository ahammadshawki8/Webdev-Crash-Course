console.log(this);
console.log(this === global);


function showThis() {  
    console.log(this);
    console.log(this === global);
}
showThis();

function showThisStrict() { 
    "use strict"; 
    console.log(this);
    console.log(this === global);
}
showThisStrict();

function unNamed() {
    this.name = "Shawki"; // work as global variable
}
unNamed();
console.log(name);

var obj = {
    name: "Shawki",
    age: 25,
    salary: 100000.87,
    isStudent: true,
    showThis: function() {
        console.log(this);
        console.log(this === global);
    },
}

obj.showThis();


// call method
var myCustomObj = {
    name: "Shawki",
    age: 25,
    salary: 100000.87,
    isStudent: true,
    anotherObj: {
        name: "Ahammad",
        show: function() {
            console.log(this);
        },
    },
}

myCustomObj.anotherObj.show();
myCustomObj.anotherObj.show.call(myCustomObj);

var karim = {
    name: "Karim Rahman",
    dob: 1990,
    age: function(currentYear) {
        return currentYear - this.dob;
    },
}

var rahim = {
    name: "Rahim Rahman",
    dob: 1995,
}

console.log(karim.age(2025));
console.log(karim.age.call(rahim, 2025));

// apply method
var karim = {
    name: "Karim Rahman",
    dob: 1990,  
    age: function(currentYear, msg) {
        console.log(msg);
        return currentYear - this.dob;
    },
};

var rahim = {
    name: "Rahim Rahman",
    dob: 1995,
}

console.log(karim.age(2025, "Hello"));
console.log(karim.age.apply(rahim, [2025, "Hello"]));

// bind method
var karim = {
    name: "Karim Rahman",
    dob: 1990,
    age: function(currentYear) {
        return currentYear - this.dob;
    },
};

var rahim = {
    name: "Rahim Rahman",
    dob: 1995,
}

var rahimAge = karim.age.bind(rahim);
console.log(rahimAge(2025));