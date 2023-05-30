
let i=0;
let newImage = document.getElementById("imageFrame");

function image(){
    i +=1;
    if(i===1){
        newImage.src = "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg";
    }
    if(i===2){
        newImage.src = "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg"
    }
    if(i===3){
        newImage.src = "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg"
        i=0;
    }
}