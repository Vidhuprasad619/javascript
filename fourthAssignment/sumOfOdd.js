var readlineSync = require("readline-sync");
let limit = readlineSync.question("Enter the limit : ");
limit=parseInt(limit);

let sum=0;

for(let i=1;i<=limit;i++){
    if(i%2!=0){
        sum +=i;
    }
}
console.log('Sum of odd numbers = ',sum);