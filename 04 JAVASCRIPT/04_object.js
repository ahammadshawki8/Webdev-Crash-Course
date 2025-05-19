var shawki = new Object();
shawki.name = "Shawki";
shawki.age = 25;
shawki.salary = 100000.87;

var ahammad = {
    name: "Ahammad",
    age: 25,
    salary: 100000.87,
    isStudent: true,

    introduce: function() {
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    },
}

console.log(shawki);
console.log(ahammad);
ahammad.introduce();

for (var key in ahammad) {
    console.log(key + ": " + ahammad[key]);
}

var objArr = {
    name: ["Shawki", "Ahammad", "Ali"],
    age: [25, 30, 35],
}
console.log(objArr.name[1]);
console.log(objArr.age[1]);
console.log(objArr.name.length);

var {name, age} = ahammad;
console.log(name);
console.log(age);

var {name: myName, age: myAge} = ahammad;
console.log(myName);
console.log(myAge);

var comObj = {
    anotherObj : {
        anotherNewObj: {
            title: "Hello",
            description: "World",
        },
        key: "value",
    }
}

var {anotherObj: {anotherNewObj: {title, description}, key}} = comObj;
console.log(title);
console.log(description);
console.log(key);