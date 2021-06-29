const cards = document.querySelector(".cards");

function makeCard(){
    const div = document.createElement("div");
    div.style.backgroundColor = "rgb(47, 189, 111)";
    div.style.zIndex = "3";
    div.style.borderRadius = "2px";
    div.className = "card";
    // div.style.backgroundImage = "url('/img/card1.png')";
    return div;
}

for(let i=0; i<24;i++){
    cards.appendChild(makeCard());
}