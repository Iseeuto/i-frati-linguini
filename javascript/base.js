
const menuButton = document.getElementById("burger-button");
const popUpScreen = document.getElementById("pop-up");
var menuOpen = false;

menuButton.addEventListener("click", ChangeMenu);

function AnimateButton(){
    let div = menuButton.children[0];
    let before = document.styleSheets[0].cssRules[3];
    let after = document.styleSheets[0].cssRules[4];

    if (menuOpen){
        div.style.backgroundColor = "white";
    }
    else{
        div.style.backgroundColor = "#00000000";
        before.style.transform = "rotateX(45deg)";
        before.style.transform = "rotateX(-45deg)";
    }
}

function ChangeMenu(){

    AnimateButton()
    popUpScreen.style.display = menuOpen ? "none" : "flex";

    // do stuff

    menuOpen = menuOpen ? false : true;
}