import data from '../menu.json' assert {type : 'json'};

const card_container = document.getElementById("card-container");
const menu = document.getElementById("filtres");

for(let i = 0; i<menu.children.length; i++){
    menu.children[i].addEventListener("click", ()=>{
        ChangeFilter(menu.children[i].getAttribute("filter"));
    })
}

function ChangeFilter(filter){
    card_container.innerHTML = "";

    for(let category in data){
        if (category == filter || filter == "all"){
            for(let elt in data[category]){
                CreateElt(elt)
            }
        }
    }
}

function CreateElt(name){
    console.log(name);
}

function OpenCard(name, desc, vegan){
    return;
}