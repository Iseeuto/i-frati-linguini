
const Bnext = document.getElementById("next");
const Bprev = document.getElementById("previous");

const carrousel = document.getElementById("carrousel");

const imgFile = document.getElementById("link-input");
const Bsubmit = document.getElementById("submit");

var images = ["imgtest.jpg", "imgtest2.jfif", "imgtest3.jpg"];
var currentImg = images[0];

function ChangeIndex(dir){
    let index = images.indexOf(currentImg);
    if (index == images.length-1 && dir == 1){index = 0;}
    else if (index == 0 && dir == -1){index = images.length-1;}
    else{index+=dir;}

    currentImg = images[index];
}

function ActualizeImage(){
    if(images.indexOf(currentImg) >= 3){carrousel.style.backgroundImage = `url(${currentImg})`;}
    else{carrousel.style.backgroundImage = `url(../assets/img/carrousel/${currentImg})`;}
}

function AddImage(link){
    images.push(link);
    currentImg = images[images.length-1];
    ActualizeImage();
}

Bprev.addEventListener("click", ()=>{
    ChangeIndex(-1);
    ActualizeImage();
});

Bnext.addEventListener("click", ()=>{
    ChangeIndex(1);
    ActualizeImage();
});

Bsubmit.addEventListener("click", ()=>{
    AddImage(imgFile.value);
    imgFile.value = "";
});