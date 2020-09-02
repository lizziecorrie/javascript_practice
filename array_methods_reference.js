let newArray = [1, 2, 3, 4, 5];

//delete from front
newArray.shift(); 

console.log(newArray);//[2, 3, 4, 5]

//add to front
newArray.unshift(1);

console.log(newArray); //[1, 2, 3, 4, 5]

//delete from back
newArray.pop();

console.log(newArray); //[1, 2, 3, 4]

//add to back
newArray.push(5);

console.log(newArray); //[1, 2, 3, 4, 5]

//return index
const find = newArray.indexOf(3);

console.log(find); //2

//return index of first element that evaluates to true for the given condition
const othrFind = newArray.findIndex(num => {return num < 2});

console.log(othrFind); //0

//reverse the array - changes array itself so cannot be used to store in new variable
newArray.reverse();

console.log(newArray); //[5, 4, 3, 2, 1]

newArray.reverse();

//take a subset  slice(startIndex, upToIndex)
const shortArray = newArray.slice(0, 3);

console.log(shortArray); //[1, 2, 3]

//executes function on every item and returns undefined
newArray.forEach(num => console.log(num)); //prints each number in turn

//returns a new array of the return value from the given function
const mapArray = newArray.map(num => num+=1);

console.log(mapArray); //[2, 3, 4, 5, 6]

console.log(newArray); //[1, 2, 3, 4, 5]

//returns a new array containing the items for which callback returned true.
let filtArr = newArray.filter(num => {return num >= 4});

console.log(filtArr); //[4, 5]

console.log(newArray); //[1, 2, 3, 4, 5]

//check if some or every element meets a condition, returning true or false
newArray.every(num => num>3); //false

newArray.some(num => num>3); //true

//reduce: initial accumulator value is index0 and currentValue is index1
let total = newArray.reduce(function(accumulator, currentValue) { return accumulator + currentValue }, 0);
console.log(total); //15
console.log(newArray); //[1, 2, 3, 4, 5]

//can set starting value for reduce by changing final value
let total2 = newArray.reduce(function(accumulator, currentValue) { return accumulator + currentValue }, 100);
console.log(total2); //115
console.log(newArray); //[1, 2, 3, 4, 5]



