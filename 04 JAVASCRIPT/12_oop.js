class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}

var student1 = new Student("John Doe", 20, "A");
var student2 = new Student("Jane Smith", 22, "B");

console.log(student1.getDetails());
console.log(student2.getDetails());
console.log(student1 instanceof Student);
console.log(student1.age);

// prototype based inheritance
Student.prototype.getAge = function() {
    return this.age;
}

console.log(student1.getAge());


// class based inheritance
class Graduate extends Student {
    tagName = "Graduate";
    constructor(name, age, grade, specialization) {
        super(name, age, grade);
        this.specialization = specialization;
    }

    getSpecialization() {
        return this.specialization;
    }

    static getUniversity() {
        return "XYZ University";
    }
}

var gradStudent = new Graduate("Alice Johnson", 24, "A", "Computer Science");
console.log(gradStudent.getDetails());
console.log(gradStudent.getSpecialization());

// static method
console.log(Graduate.getUniversity());
// console.log(gradStudent.getUniversity()); 
// undefined, as getUniversity is static and not an instance method

// static properties
console.log(Graduate.tagName);
console.log(gradStudent.tagName);

// private properties and methods
class Person {
    #name;
    #age;
    #salary = 50000;

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    getName() {
        return this.#name;
    }

    getAge() {
        return this.#age;
    }

    #getSalary() { // only used for internal logic
        return this.#salary;
    }
}
var person = new Person("John Doe", 30);
console.log(person.getName());
console.log(person.getAge());
// console.log(person.#name); 
// SyntaxError: Private field '#name' must be declared in an enclosing class
