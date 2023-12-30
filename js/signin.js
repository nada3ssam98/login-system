title.innerHTML = "Sign In";
function signInOnClick(){

    if( emailInput.value.length==0 )
    {
        document.getElementById("message").classList.remove("d-none");
        document.getElementById("message").innerHTML = "Email input should be filled";
    }
    else if (passwordInput.valuelength==0)
    {
        document.getElementById("message").classList.remove("d-none");
        document.getElementById("message").innerHTML = "Password input should be filled";
    }
    else{
        var userAlreadyExist = false;
        for (var i = 0; i < arrayList.length ;i++) {
            if(emailInput.value.toLowerCase() == arrayList[i].email.toLowerCase()  && passwordInput.value.toLowerCase()  == arrayList[i].password.toLowerCase() ){
                userAlreadyExist=true;
                localStorage.setItem("userSessionName" , JSON.stringify(arrayList[i].name));
            }
        }
         if(userAlreadyExist == true){
            window.location.assign("welcome.html")
         }
         else{
            document.getElementById("message").classList.remove("d-none")
         }
    }


}


