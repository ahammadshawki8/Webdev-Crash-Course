const regexToMatch = /My/;
const str = "My name is John Doe. My age is 30.";

const newStr = str.replace(regexToMatch, "Your");
console.log(newStr); // Your name is John Doe. My age is 30.

const regexToMatch2 = /My/g; // all occurrences
const str2 = "My name is John Doe. My age is 30.";
const newStr2 = str2.replace(regexToMatch2, "Your");
console.log(newStr2); // Your name is John Doe. Your age is 30.

const regexToMatch3 = /My/gi; // case insensitive
const str3 = "My name is John Doe. my age is 30.";
const newStr3 = str3.replace(regexToMatch3, "Your");
console.log(newStr3); // Your name is John Doe. Your age is 30.

const regexToMatch4 = /[abc]/;
const str4 = "My name is John Doe. My age is 30.";
console.log(str4.match(regexToMatch4)); // [ 'a', index: 3, input: 'My name is John Doe. My age is 30.', groups: undefined ]

const regexToMatch5 = /[^abc]/;
const str5 = "My name is John Doe. My age is 30.";
console.log(str5.match(regexToMatch5)); // [ 'a', index: 3, input: 'My name is John Doe. My age is 30.', groups: undefined ]

console.log(str5.match(/[a-z]/));
console.log(str5.match(/[A-Z]/));
console.log(str5.match(/[0-9]/));
console.log(str5.match(/[^0-9]/));

console.log(str5.match(/[\w]/));
console.log(str5.match(/[\W]/));
console.log(str5.match(/[\s]/));
console.log(str5.match(/[\S]/));
console.log(str5.match(/[\d]/));
console.log(str5.match(/[\D]/));
console.log(str5.match(/[\b]/)); // word boundary
console.log(str5.match(/[\B]/)); // non-word boundary
console.log(str5.match(/[\r]/)); // carriage return
console.log(str5.match(/[\n]/)); // new line
console.log(str5.match(/[\t]/)); // tab
console.log(str5.match(/[\0]/)); // null character

const str6 = "abab bc ab bc";
console.log(str6.match(/(ab|bc)/)); // either ab or bc
console.log(str6.match(/(ab|bc)+/)); // one or more occurrences of ab or bc
console.log(str6.match(/(ab|bc)*/)); // zero or more occurrences of ab or bc
console.log(str6.match(/(ab|bc)?/)); // zero or one occurrence of ab or bc

console.log(str6.match(/(ab|bc){2}/)); // exactly 2 occurrences of ab or bc
console.log(str6.match(/(ab|bc){2,}/)); // 2 or more occurrences of ab or bc
console.log(str6.match(/(ab|bc){1,4}/)); // 1 to 4 occurrences of ab or bc
console.log(str6.match(/(ab|bc){1,4}?/)); // 1 to 4 occurrences of ab or bc (non-greedy)

console.log(str6.match(/./)); // any character except newline
console.log(str6.match(/a.b/)); // a followed by any character followed by b
console.log(str6.match(/a.*b/)); // a followed by any character (zero or more) followed by b
console.log(str6.match(/a.+b/)); // a followed by any character (one or more) followed by b

const str7 = "My name is John Doe. My age is 30";
console.log(str7.match(/30$/)); // 30 at the end of the string
console.log(str7.match(/^My/)); // My at the beginning of the string
console.log(str7.match(/^My.*30$/)); // My followed by any character (zero or more) followed by 30 at the end of the string

const regexToMatch8 = /ab/g;
let match;
while (match = regexToMatch8.exec(str6)) {
    console.log(match)
    console.log(`Found ${match[0]} at index ${match.index}`);
    console.log(`Last index: ${regexToMatch8.lastIndex}`);
}

// test
const regexToMatch9 = /ab/g;
console.log(regexToMatch9.test(str6)); // true
console.log(regexToMatch9.test("bc")); // false

// search
const regexToMatch10 = /ab/g;
console.log(str6.search(regexToMatch10)); // 0
console.log(str6.search(/bc/)); // 4
console.log(str6.search(/xyz/)); // -1

// split
const regexToMatch11 = /[ab]/g;
const str8 = "My name is John Doe. My age is 30.";
const str9 = str8.split(regexToMatch11);
console.log(str9); // [ 'My n', 'me is John Doe. My ', 'ge is 30.' ]