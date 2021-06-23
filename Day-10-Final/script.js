var values = [];



for (let i = 1; i <= 16; i++) {

  var flipCard = document.createElement("div");
  flipCard.classList.add("flip-card");
  var cardInner = document.createElement("div");
  cardInner.classList.add("card-inner");

  var cardFront = document.createElement("div");
  cardFront.classList.add("card-front");

  var cardBack = document.createElement("div");
  cardBack.classList.add("card-back");

  cardInner.appendChild(cardFront);
  cardInner.appendChild(cardBack);
  flipCard.appendChild(cardInner);

  document.querySelector(".cards").appendChild(flipCard);

}

let words=["Groot", "Knshika", "Divine", "BigO", "Haddi", "Sherl", "KayDee", "Shunya"];
words=[...words, ...words];

var backText = document.querySelectorAll(".card-back");

var cards = document.querySelectorAll('.flip-card');
for(let i=0; i<16; i++){
  cards[i].addEventListener('click', (e) =>{
    cards[i].classList.add('flipped');
  })
  let back=document.createElement("div");
  let rand=Math.floor(Math.random()*(16-i));
  backText[i].innerHTML="<h2>"+words[rand]+"</h2>";
  words.splice(rand, 1);
  
  // console.log("done");
}
console.log(e.target());

var chances = 30;
var firstCard  = undefined;
var secondCard = undefined;
while(true){
  if(click){

  if (firstCard){

  }
  else{
    secondCard = e.targtet()
    console.log("clicked");
  }
}
} 



