var readlineSync = require("readline-sync");
let size = readlineSync.question("Enter the size of an array : ");
size = parseInt(size);

const array=[];

console.log('Enter the values of array : ');

for(let i=0;i<size;i++){
    var readlineSync = require("readline-sync");
    let value = readlineSync.question();
    value = parseInt(value);
    array[i]=value;
}
console.log('array = ',array);

let even=0;
for(let i=0;i<size;i++){
    if(array[i]%2==0){
        even+=1;
    }
}
console.log("Number of even numbers in the given array is : ",even);