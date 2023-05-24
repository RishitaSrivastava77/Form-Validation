function clearErrors(){
    error = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }
}
function seterror(id,error){
 element = document.getElementById(id);
 element.getElementsByClassName('formerror')[0].innerHTML=error;
}
function validateForm(){
    var returnval = true;
    var name = document.forms['myForm']["fname"].value;
    if(name.length<5){
        seterror("name","**Length of the name is too short");
        returnval= false;
    }
    if(name.length==0){
        seterror("name","**Name is required");
        returnval= false;
    }
    var email = document.forms['myForm']["femail"].value;
    if(email.length>25){
        seterror("email","**Length of the email is too long");
        returnval= false;
    }
    var password = document.forms['myForm']["fpass"].value;
    if(password.length<5){
        seterror("password","**Password Should be 5 characters long");
        returnval= false;
    }
    var Cpassword = document.forms['myForm']["fcpass"].value;
    if(Cpassword!= password){
        seterror("Cpassword","**Password and confirm password should match");
        returnval= false;
    }
   
    
    return returnval;
}
