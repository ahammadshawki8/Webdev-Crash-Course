var Person = function(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;   
}

var shawki = new Person("Shawki", 25, "Developer");
var ahammad = new Person("Ahammad", 30, "Designer");
var ali = new Person("Ali", 35, "Manager");

console.log(shawki);
console.log(ahammad.job);

Object.preventExtensions(ali);
ali.salary = 100000.87; // This will not work

Person.prototype.introduce = function() {
    console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
}

console.log(Person.prototype);
console.log(shawki.__proto__);
console.log(shawki.__proto__ === Person.prototype);

shawki.introduce();

ahammad.introducePersonal = function() {
    console.log("Hi, this is " + this.name + " and My job is " + this.job);
}

ahammad.introducePersonal();
// shawki.introducePersonal();
ahammad.introducePersonal.call(shawki);

var PersonWithMethod = function(name, age, job) {  
    this.name = name;
    this.age = age;
    this.job = job;
    
    this.dateofBirth = function() {
        var dob = 2025 - this.age;
        console.log("My date of birth is " + dob);
    }
}

var ahammad = new PersonWithMethod("Ahammad", 30, "Designer");
ahammad.dateofBirth();



var Teacher = function(name, age, job, subject, salary) {
    Person.call(this, name, age, job);
    this.subject = subject;
    this.salary = salary;
}

var teacher = new Teacher("Shawki", 25, "Teacher", "Math", 50000);
console.log(teacher);