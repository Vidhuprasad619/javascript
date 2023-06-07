let array = [5,10,20,15,10,50,45,30,80,100];

console.log(array.length); // finding array length

console.log(array.map(ele => ele/5)); // iterate array and return a new array

array.forEach(ele => console.log(ele)); // iterate array

console.log(array.filter(ele => ele>=50)); // iterate array and return a new array of values which satisfy the specified condition

let result = array.reduce((result ,ele) => result+ele); // iterate array values and return a single value according to the operation
console.log(result); 

console.log(array.reverse()); // to reverse the array and store it to the same array

array.push(110); // to add an element in the last position
console.log(array); 

array.pop(); // to remove the last element
console.log(array);

array.unshift(200); // to add element in the 0th position
console.log(array);

array.shift(); // to remove the 0th position element
console.log(array);

console.log(array.join("-")); // to seperate one element to next with a string

console.log(Array.isArray(array)); // to check whether it is an array or not 

console.log(array.includes(5)); // to check a certain element in an array

let array1 = [11,22,33];
array=array1.concat(array); // to combines 2 or more array
console.log(array);

console.log(array.slice(0,3)); // return a shallow copy of a portion of an array

array.splice(0,3,1,2,3); // to removing,replacing or adding data in an array
console.log(array);

console.log(array.indexOf(10)); // returns the position of 1st occurance of the specified element in an array

console.log(array.some(ele => ele%50===0)); // to check whether at least one element in an array passes a specified condition

console.log(array.every(ele => ele%5===0)); // to check whether all elements in an array passes a specified test

console.log(array.find(ele => ele%10===0)); // it returns the value of the 1st element that matches the condition

console.log(array.findIndex(ele => ele%10===0)); // it returns the position of the 1st element thwat matches the condition

console.log(array.lastIndexOf(10)); // it returns the last position of last occurance of the specified element in an array

let iterateValue = array.entries();     // it allows to iterate over the array and obtain both the index and the corresponding element in the form of an array
console.log(iterateValue.next().value);
console.log(iterateValue.next().value);
console.log(iterateValue.next().value);

console.log(array.toString()); // to convert an array to string values

console.log(array.valueOf()); // it returns the array itself

console.log(array.fill(99,0,3)); // modifies an array by filling all or a portion of its elements with a static value