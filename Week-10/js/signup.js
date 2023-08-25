var signUpName = document.getElementById("signUpName");
var signUpEmail = document.getElementById("signUpEmail");
var signUpPassword = document.getElementById("signUpPassword");
var massageName = document.getElementById("massageName")
var items = [];

var btn = document.getElementById("signUpBtn")

btn.addEventListener("click" , function(){
    signUpBtn();
})
function signUpBtn(){
    if(validateName() == true && validateEmail() == true && validatePassword() == true){
        var signUpInfo = {
            name: signUpName.value,
            email: signUpEmail.value,
            password: signUpPassword.value
        };
        items.push(signUpInfo);
        localStorage.setItem("signup",JSON.stringify(items))
        clearform();
        console.log ("saved");
            
        massageName.classList.add("d-none");
        massageName.classList.remove("d-block");
        }
        else{
massageName.classList.remove("d-none")
massageName.classList.add("d-block")
        }
    }


function clearform(){
    signUpName.value="";
    signUpEmail.value="";
        signUpPassword.value="";
    }






    function validateName(){
        var regexName = /^[A-Z][a-z]{3,9}$/;
        var signName = signUpName.value;
    if(regexName.test(signName)== true){

    return true


    }
    else{
        console.log("invalid name")

        return false


    }
}
function validateEmail(){
    var regexEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/;
    var signEmail = signUpEmail.value;
if(regexEmail.test(signEmail)== true){

return true


}
else{
    console.log("invalid mail")
    return false


}
}
function validatePassword(){
    var regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    var signPassword = signUpPassword.value;
if(regexPassword.test(signPassword)== true){

return true


}
else{
    console.log("invalid password")
    return false


}
}


