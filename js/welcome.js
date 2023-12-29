var sessionUserName = JSON.parse(localStorage.getItem("userSessionName"))
document.getElementById("welcomeMessage").innerHTML = `Welcome ${sessionUserName}`;
function logOut(){
    localStorage.removeItem("userSessionName");
    window.location.assign("index.html")
}