var readlineSync = require("readline-sync");
let option = readlineSync.question("Eneter 1 for Addition , Eneter 2 for Subtraction , Eneter 3 for Multiplication , Eneter 4 for Division : ");
option = parseInt(option);

var readlineSync = require("readline-sync");
let num1 = readlineSync.question("Enter the first number : ");
num1 = parseInt(num1);

var readlineSync = require("readline-sync");
let num2 = readlineSync.question("Enter the second number : ");
num2 = parseInt(num2);

if(option==1){
    addition(num1,num2);
}
else if(option==2){
    subtraction(num1,num2);
}
else if(option==3){
    multiplication(num1,num2);
}
else if(option==4){
    division(num1,num2);
}
else{
    console.log("Eneter correct option");
}

function addition(num1,num2){
    let result = num1+num2;
    return console.log("Sum of ",num1,"+",num2," = ",result);
}
function subtraction(num1,num2){
    let result = num1-num2;
    return console.log("Subtraction of ",num1,"-",num2," = ",result);
}
function multiplication(num1,num2){
    let result = num1*num2;
    return console.log("Multiplication of ",num1,"*",num2," = ",result);
}
function division(num1,num2){
    let result = num1/num2;
    return console.log("Division of ",num1,"/",num2," = ",result);
}