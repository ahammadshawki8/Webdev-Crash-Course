var str = "My name is John Doe";

// String length
console.log(str.length);

// String index
console.log(str.indexOf("name")); // returns the index of the first occurrence of "name"
console.log(str.lastIndexOf("o")); // returns the index of the last occurrence of "o"
console.log(str.indexOf("name", 5)); // returns the index of the first occurrence of "name" after index 5
console.log(str.lastIndexOf("o", 10)); // returns the index of the last occurrence of "o" before index 10

// String slice
console.log(str.slice(3, 7)); // returns "name"
console.log(str.slice(3)); // returns "name is John Doe"
console.log(str.slice(-3)); // returns "Doe"
console.log(str.slice(-3, -1)); // returns "Do"

console.log(str.startsWith("My")); // returns true
console.log(str.endsWith("Doe")); // returns true
console.log(str.includes("name")); // returns true
console.log(str.includes("name", 5)); // returns whether "name" is present in the string starting from index 5

// String replace
console.log(str.replace("John", "Jane")); // returns "My name is Jane Doe"
console.log(str.replace(/o/g, "a")); // returns "My name is Jahn Dae"
console.log(str.replace(/o/g, "a", 1)); // returns "My name is Jahn Doe"

// String toUpperCase and toLowerCase
console.log(str.toUpperCase()); // returns "MY NAME IS JOHN DOE"
console.log(str.toLowerCase()); // returns "my name is john doe"

console.log(str.charAt(0)); // returns "M"
console.log(str.charCodeAt(0)); // returns the Unicode value of "M"
console.log(str.split(" ")); // returns ["My", "name", "is", "John", "Doe"]
console.log(str.split(" ", 2)); // returns ["My", "name"]

// String trim
var strWithSpaces = "   Hello World!   ";
console.log(strWithSpaces.trim()); // returns "Hello World!"
console.log(strWithSpaces.trimStart()); // returns "Hello World!   "
console.log(strWithSpaces.trimEnd()); // returns "   Hello World!"

// String repeat
console.log("Hello".repeat(3)); // returns "HelloHelloHello"
console.log("Hello".repeat(0)); // returns ""

// String padStart and padEnd
console.log("Hello".padStart(10, "*")); // returns "*****Hello"
console.log("Hello".padEnd(10, "*")); // returns "Hello*****"
console.log("Hello".padStart(10)); // returns "     Hello"
console.log("Hello".padEnd(10)); // returns "Hello     "

// String localeCompare
console.log("apple".localeCompare("banana")); // returns -1 (apple comes before banana)
