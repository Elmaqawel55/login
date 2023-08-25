var homeEmail = document.getElementById("homeEmail")
var homePassword = document.getElementById("homePassword")
var homeMassage = document.getElementById("inCorrect value")
var key=[];

var homeBtn = document.getElementById("loginBtn")
homeBtn.addEventListener("click" , function(){
loginBtn()
})
function loginBtn(){
    if(validateLoginEmail() == true && validateLoginPassword() == true){
var loginInfo = {
    email : homeEmail.value,
    password : homePassword.value
}
key.push(loginInfo);
homeClearForm();
        homeMassage.classList.remove("d-block");
        homeMassage.classList.add("d-none");
        window.location = ("../pages/final.html")
    }
    else{
        homeMassage.classList.add("d-block")
        homeMassage.classList.remove("d-none")
    }

}


function validateLoginEmail(){
    var regexHomeE = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/;
    var homeEmail1 = homeEmail.value;
if(regexHomeE.test(homeEmail1)== true){

return true


}
else{
    console.log("invalid mail")
    return false


}
}
function validateLoginPassword(){
    var regexHomeP = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    var homePassword2 = homePassword.value;
if(regexHomeP.test(homePassword2)== true){

return true


}
else{
    console.log("invalid password")
    return false


}
}
function homeClearForm(){
    homeEmail.value=""
    homePassword.value=""
}