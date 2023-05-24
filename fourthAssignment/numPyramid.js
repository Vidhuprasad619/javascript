var readlineSync = require("readline-sync");
let limit = readlineSync.question("Enter the limit : ");


for(let i=1;i<=limit;i++){
    let line='';
    for(let j=1;j<=i;j++){
        line += j+' ';
    }
    console.log(line);
}