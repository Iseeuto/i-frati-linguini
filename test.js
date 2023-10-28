
const get = document.getElementById("next");

get.addEventListener('click', e => { 

    get.classList.add("Bdisappear"); 

    var transitionFrame = document.getElementById("transition-frame")
    transitionFrame.style.backgroundColor = "#feffea";
})