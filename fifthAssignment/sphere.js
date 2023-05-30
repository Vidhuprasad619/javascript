
function volumeOfSphere(){
    let radius = parseFloat(document.getElementById("radiusValue").value);
    let volume = (4/3)* Math.PI * Math.pow(radius,3);
    document.getElementById("volume").value = volume.toFixed(4);
}