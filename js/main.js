var  signUpBtn = document.getElementById("signUp");
var  signInBtn = document.getElementById("signIn");
var  nameField = document.getElementById("nameField");
var  nameInput = document.getElementById("nameInput");
var emailInput =document.getElementById("emailField");
var passwordInput = document.getElementById("passwordField");
var title = document.getElementById("headTitle");
var nameMessage = document.getElementById("nameMessage");
var emailMessage = document.getElementById("emailMessage");
var passwordMessage = document.getElementById("passwordMessage");
var arrayList=[];
if(localStorage.getItem("arrayList") != null){
    
    arrayList= JSON.parse( localStorage.getItem("arrayList") );
 }
 

function nameSweetAlert(){
    Swal.fire({
    title: "<strong>follow the rules below</strong>",
    html:
    `<ul>
    <li>Only contains alphanumeric characters, underscore and dot.</li>
    <li>Underscore and dot can't be at the end or start of a username or next to each other,</li>
    <li>characters must be between 8 to 20.</li>
    </ul>`,
    icon:"info"
    })
}
function emailSweetAlert(){
    Swal.fire
    ({
        title: "<strong>follow the rules below</strong>",
        html : 
        `<ul>
            <li>At least one upper case English letter</li>,
            <li>one lower case English letter </li>,
            <li>one digit</li>,
        </ul>`,
        icon:"info"

    })
}
function passwordSweetAlert(){
    Swal.fire  
        ({
        title: "<strong>follow the rules below</strong>",
        text:"email must be like: test@gmail.com",
        icon:"info"

        })
}

// ================================================Sign Up function ================================================

function signUpOnClick(){
    nameField.style.maxHeight="65px";
    nameField.style.padding="10px";
    title.innerHTML = "Sign Up";


    newMember = {
        name: nameInput.value,
        email: emailInput.value,
        password : passwordInput.value,
    }

if(nameInput.value.length==0)
{
    document.getElementById("message").classList.remove("d-none");
    document.getElementById("message").innerHTML = "Name input should be filled";
}
else if( emailInput.value.length==0 )
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
    if( arrayList.length == 0 )
    {
        arrayList.push(newMember);
        localStorage.setItem("arrayList" , JSON.stringify(arrayList));
        document.getElementById("message").classList.add("d-none");
        nameInput.classList.remove( "is-valid" );
        emailInput.classList.remove( "is-valid" );
        passwordInput.classList.remove( "is-valid" );
        localStorage.setItem("sessionUserName",JSON.stringify(newMember.name));
        
    }
    
    var emailAlreadyExist = false;
    for (var i = 0; i< arrayList.length; i++) 
    {
 
            if(  emailInput.value == arrayList[i].email   )
            {
                document.getElementById("message").classList.remove("d-none");
                emailAlreadyExist = true;
                
            }


    }

    if(emailAlreadyExist == false){
        arrayList.push(newMember);
        localStorage.setItem("arrayList" , JSON.stringify(arrayList));
        document.getElementById("message").classList.add("d-none");
        nameInput.classList.remove( "is-valid" );
        emailInput.classList.remove( "is-valid" );
        passwordInput.classList.remove( "is-valid" );
    }
clearInputs();
document.getElementById("message").classList.remove("d-none");
document.getElementById("message").innerHTML = "Registeration succeed";

}

}


// ================================================clear function ================================================

function clearInputs(){
    nameInput.value = "";
    emailInput.value = "";
    passwordInput.value = ""
}


// ================================================name validation ================================================

function nameValidation(){
    regex = nameInput.value;
    NameRegex = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;

    if(NameRegex.test(regex)) //true
    {
        nameInput.classList.add( "is-valid" );
        nameInput.classList.remove( "is-invalid" );
        nameMessage.classList.add("d-none");

    }
    else //false
    {
        nameInput.classList.add( "is-invalid" );
        nameInput.classList.remove( "is-valid" );
        nameMessage.classList.remove("d-none");
    }

}

// ================================================ email validation ================================================

function emailValidation(){
    regex = emailInput.value;
    emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(emailRegex.test(regex)) //true
    {
        emailInput.classList.add( "is-valid" );
        emailInput.classList.remove( "is-invalid" );
    }
    else //false
    {
        emailInput.classList.add( "is-invalid" );
        emailInput.classList.remove( "is-valid" );
    }
}




// ================================================password validation ================================================
function passwordValidation(){
    regex = passwordInput.value;
    passwordRegex = /^([A-Z]+)([a-z]+)([0-9]+)$/;

    if(passwordRegex.test(regex)) //true
    {
        passwordInput.classList.add( "is-valid" );
        passwordInput.classList.remove( "is-invalid" );
    }
    else //false
    {
        passwordInput.classList.add( "is-invalid" );
        passwordInput.classList.remove( "is-valid" );
    }
}
