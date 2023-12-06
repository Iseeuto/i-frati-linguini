
const menuButton = document.getElementById("burger-button");
const popUpScreen = document.getElementById("pop-up");
const burgerMenu = document.getElementById("burger-menu");
var menuOpen = false;

menuButton.addEventListener("click", ChangeMenu);

function ChangeMenu(){

    popUpScreen.style.display = menuOpen ? "none" : "flex";
    burgerMenu.style.left = menuOpen ? "-20%" : "0";

    menuOpen = menuOpen ? false : true;
}