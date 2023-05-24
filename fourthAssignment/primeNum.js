var readlineSync = require("readline-sync");
let num = readlineSync.question("Enter a number : ");
num = parseInt(num);

let flag=0;
for(i=2;i<=num/2;i++){
    if(num%i==0){
        flag=1;
        break;
    }
}

if(flag==1 || num==1){
    console.log("Entered number is not a prime number");
}
else{
    console.log("Entered number is a prime number");
}