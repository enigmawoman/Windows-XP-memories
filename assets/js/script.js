var login = document.getElementById("login")
var startUp = document.getElementById("startup")
var desktopBackground = document.getElementById("desktop-background")
var loginImage = document.getElementById("login-image")
var startImage = document.getElementById("start-image")


// var timerCountdown = setTimeout(desktopWXP, 7000);

function playSoundlogin() {
    let newLogin = new Audio ('./assets/sounds/windows-xp-startup-sound/windows-xp-startup-sound.mp3');
    newLogin.play();
}
// this is dictating what should load to the home page when the page initialises for the first time and will run on website load load
function init () {
    // this is hiding/displaying the elements of the interface that need to be seen whilst this function is running
    login.style.display = 'block';    
    startUp.style.display = 'none'; 
    desktopBackground.style.display = 'none';   
}

init();


function startPage() {
    login.style.display = 'none';    
    startUp.style.display = 'block'; 
    desktopBackground.style.display = 'none'; 

    playSoundlogin();
    setTimeout(desktopWXP, 5000);
}

  
function desktopWXP() {
    login.style.display = 'none';    
    startUp.style.display = 'none'; 
    desktopBackground.style.display = 'block'; 
}




loginImage.addEventListener("click", startPage);
