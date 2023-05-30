

function getFormvalue(event){
    event.preventDefault();
    let userForm = document.getElementById("form1");
    let firstName = userForm[0].value;
    let lastName = userForm[1].value;
    let paragraph = document.getElementById("paragraph");
    paragraph.textContent = "Fname : "+firstName+"   |   Lname : "+lastName; 
}