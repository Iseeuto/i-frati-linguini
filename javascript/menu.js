import data from '../menu.json' assert {type : 'json'};

// Il y a beaucoup de choses pas optimisées DUTOUT mais pour ma défense j'ai jamais 
// fait de JavaScript.

const card_container = document.getElementById("card-container");
const menu = document.getElementById("filtres");
const hider = document.getElementById("pop-up");
const card = document.getElementById("display-card")

hider.addEventListener("click", CloseCard);

for(let i = 0; i<menu.children.length; i++){
    menu.children[i].addEventListener("click", ()=>{
        ChangeFilter(menu.children[i].getAttribute("filter"));
    })
}
ChangeFilter("aperitifs");

function ChangeFilter(filter){
    card_container.innerHTML = "";

    for(let category in data){
        if (category == filter || filter == "all"){
            for(let elt in data[category]){
                CreateElt(elt,
                     data[category][elt]["description"], 
                     data[category][elt]["composition"], 
                     data[category][elt]["img"],
                     data[category][elt]["vegan"]);
            }
        }
    }
    CreateEvents();
}

function CreateEvents(){
    for(let elt of card_container.children){
        elt.addEventListener("click", ()=>{
            OpenCard(
                elt.getAttribute("name"),
                elt.getAttribute("desc"),
                elt.getAttribute("ingr"),
                elt.getAttribute("img"),
                elt.getAttribute("vegan"),
            )
        })
    }
}

function CreateElt(name, desc, ingr, img, vegan){
    card_container.innerHTML += `
    <div class="card" name="${name}" desc="${desc}" ingr="${ingr}" img="${img}" vegan="${vegan}">
        <img src="${img}">
        <h3>${name}</h3>
    </div>`
}

function OpenCard(name, desc, ingr, img, vegan){
    hider.style.display = "flex";
    card.style.display = "flex";

    card.children[0].setAttribute("src", img);
    card.children[1].children[0].innerHTML = name;
    if (vegan == "true"){card.children[1].children[0].innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16"> <circle cx="8" cy="8" r="8"/> </svg>`}
    card.children[1].children[1].innerHTML = desc;
    card.children[1].children[2].innerHTML = ingr;

}

function CloseCard(){
    hider.style.display = "none";
    card.style.display = "none";
}