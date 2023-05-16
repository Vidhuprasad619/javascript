var readlineSync = require("readline-sync");
let num = readlineSync.question("Enter a number :");

console.log('Multiplication Table');
for(let i=1;i<=10;i++){
    console.log(num,'*',i,'=',num*i);
}