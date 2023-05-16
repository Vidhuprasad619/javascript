var readlineSync = require("readline-sync");
let num = readlineSync.question("Enter a number :");

if(num%2==0){
    console.log('Entered number is an even number');
}
else{
    console.log('Entered number is aa odd number');
}