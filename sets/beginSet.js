var myFirstSet = new Set();

myFirstSet.add(100);
console.log(myFirstSet);

myFirstSet.add(200);
console.log(myFirstSet);

myFirstSet.add('three hundred');
console.log(myFirstSet);

var four = { a: 400, b: 500}
myFirstSet.add(four);
console.log(myFirstSet);

myFirstSet.add(four); // Does not add since already inside
console.log(myFirstSet);

console.log(myFirstSet.has(100)); // true
console.log(myFirstSet.has(400)); // false
console.log(myFirstSet.has(10 * 10)); // true
console.log(myFirstSet.has('THREE HUNDRED'.toLowerCase())); // true
console.log(myFirstSet.has(four)); // true

console.log(myFirstSet.size); // 4

myFirstSet.delete(100);
console.log(myFirstSet.size); // 3

////////////////////////////////////

var mySecondSet = new Set([1, 2, 3]);
console.log(mySecondSet);

////////////////////////////////////

var myThirdSet = new Set([1, 1, 1, 2, 3]);
console.log('This is my third', myThirdSet);

////////////////////////////////////

var fourArray = [1, 1, 1, 2, 3, 4, 5]
var myFourthSet = new Set(fourArray);
console.log('This is my fourth', myFourthSet);

console.log(myFourthSet.has(3)); // true
console.log(myFourthSet.has(300)); // false
