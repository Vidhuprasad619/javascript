var readlineSync = require("readline-sync");
let num = readlineSync.question("Enter a number : ");
num = parseInt(num);

for(let i=1;i<=10;i++){
    console.log(num,' * ',i,' = ',num*i);
}