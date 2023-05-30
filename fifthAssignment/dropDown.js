
let colors = document.getElementById("colorSelect");

function removeColors(){
    if(colors.value !==""){
        colors.remove(colors.selectedIndex);
    }
}

function addColors(){
    let inputBox = document.getElementById("colorAddBox");
    let newColor = inputBox.value;
    if(newColor !== ""){
        let newOption = document.createElement("option");
        newOption.text=newColor;
        newOption.value=newColor;
        colors.add(newOption);
    }
    inputBox.value="";
}

function changeColor(){
    let boxColor = document.getElementById("colorBox");
    boxColor.style.background = colors.value;
    let paraColor = document.getElementsByTagName("p")[0];
    paraColor.style.color = colors.value;
}
