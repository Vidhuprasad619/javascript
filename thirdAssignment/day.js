
for(let j=0;j<2;j++){
    var readlineSync = require("readline-sync");
    let num = readlineSync.question("Enter a date of this month(May) : ");

    if(num>0 && num<=31){
        if(num%7==6){
            console.log('May ',num,' of this month is Saturday');
        }
        else if(num%7==5){
            console.log('May ',num,' of this month is Friday');
        }
        else if(num%7==4){
            console.log('May ',num,' of this month is Thursday');
        }
        else if(num%7==3){
            console.log('May ',num,' of this month is Wednesday');
        }
        else if(num%7==2){
            console.log('May ',num,' of this month is Tuesday');
        }
        else if(num%7==1){
            console.log('May ',num,' of this month is Monday');
        }
        else{
            console.log(num,' date of this month is Sunday');
        }
    }
    else{
        console.log('Enetr correct date in this month');
    }
    var readlineSync = require("readline-sync");
    j = readlineSync.question("Enter '0' for continue or '1' for exit : ");
}
