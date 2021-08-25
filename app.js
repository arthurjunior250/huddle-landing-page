function validateForm(){
    var email = document.forms["myForm"]["your-email"].value;

    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
        document.getElementById('error-email').innerHTML = "Email is Valid, Thanks"; 
        document.getElementById('fname').style.border= "1px solid green";
        document.getElementById('error-email').style.color= "green";
    }else if(email==""){
        document.getElementById('error-email').innerHTML = "Whoops! It looks like you forgot to add your email"; 
        document.getElementById('fname').style.border= "1px solid red";
        document.getElementById('error-email').style.color= "red";

    }else{
        document.getElementById('error-email').innerHTML = "Please provide a valid email address"; 
        document.getElementById('fname').style.border= "1px solid red";
        document.getElementById('error-email').style.color= "red";
    }
    if (email.match(pattern) || !email.match(pattern)) {
        return false;
    }        

}