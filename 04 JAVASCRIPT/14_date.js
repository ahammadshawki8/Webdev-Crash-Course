console.dir(Date);

console.log(Date.now());
console.log(Date.parse("2023-10-01"));
console.log(Date.parse("2023-10-01T00:00:00Z"));
console.log(Date.parse("2023-10-01T00:00:00+00:00"));
console.log(Date.parse("28 Dec 2023 00:00:00 GMT"));

const date = new Date();
console.log(date);

console.log(date.getTime());
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());

console.log(date.getUTCFullYear()); // difference between getFullYear and getUTCFullYear is that getUTCFullYear returns the year in UTC time
console.log(date.getUTCMonth());
console.log(date.getUTCDate());
console.log(date.getUTCDay());
console.log(date.getUTCHours());
console.log(date.getUTCMinutes());
console.log(date.getUTCSeconds());
console.log(date.getUTCMilliseconds());

console.log(date.getTimezoneOffset());


const date2 = new Date("2023-10-01");
console.log(date2);

var date3 = new Date("2004, 12, 28");
console.log(date3);

var date4 = new Date(10000000000000);
console.log(date4);

var date5 = new Date(2023, 9, 1);
date5.setFullYear(2024);
date5.setMonth(11);
date5.setDate(25);
date5.setHours(10);
date5.setMinutes(30);
date5.setSeconds(45);
date5.setMilliseconds(500);
console.log(date5);

console.log(date5.toString());
console.log(date5.toDateString());
console.log(date5.toTimeString());
console.log(date5.toLocaleString());
console.log(date5.toLocaleDateString());
console.log(date5.toLocaleTimeString());
console.log(date5.toLocaleString("bn-BD"));
console.log(date5.toLocaleString("en-US", {timeZone: "America/New_York", day: "2-digit", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit"}));

console.log(date5.toISOString());
console.log(date5.toUTCString());
console.log(date5.toJSON());

