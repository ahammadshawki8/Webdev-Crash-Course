var myMap = new Map();
myMap.set('name', 'John');
myMap.set('age', 30);
myMap.set('isStudent', true);
myMap.set('salary', 100000.87);
myMap.set('address', {
    city: 'New York',
    country: 'USA'
});
myMap.set('hobbies', ['reading', 'traveling', 'sports']);
myMap.set('nullValue', null);


console.log(myMap);

console.log(myMap.get('name'));
myMap.set('name', 'Doe');
console.log(myMap.get('name'));

console.log(myMap.has('age'));
console.log(myMap.size);
console.log(myMap.keys());
console.log(myMap.values());
console.log(myMap.entries());

myMap.forEach((value, key) => {
    console.log(key + ' -> ' + value);
});

for (var [key, value] of myMap.entries()) {
    console.log(key + ' -> ' + value);
}

myMap.delete('isStudent');
console.log(myMap.has('isStudent'));

myMap.clear();
console.log(myMap.size);