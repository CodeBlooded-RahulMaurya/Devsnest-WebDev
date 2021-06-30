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

var firstCard = undefined;
var secondCard = undefined;
var cards = document.querySelectorAll('.flip-card');


for(let i=0; i<16; i++){
  cards[i].addEventListener('click', (e) =>{
    cards[i].className = 'flipped';
    if(firstCard){
      secondCard = e.target.parentNode
      setTimeout(function (){
      if (firstCard.querySelector('h2').innerHTML === secondCard.querySelector('h2').innerHTML){
        console.log(firstCard.querySelector('h2').innerHTML)
        console.log(firstCard.parentNode)
        firstCard.parentNode.classList.remove('flipped');
        firstCard.parentNode.classList.add('done');
        secondCard.parentNode.classList.remove('flipped');
        secondCard.parentNode.classList.add('done');
        firstCard = undefined;
        secondCard = undefined;
      }
      else{
        firstCard.parentNode.classList.remove('flipped');
        firstCard.parentNode.classList.add('flip-card');
        secondCard.parentNode.classList.remove('flipped');
        secondCard.parentNode.classList.add('flip-card');
        firstCard = undefined;
      }
    },600)
      
    }
    else{
      firstCard = e.target.parentNode;
      let dup = firstCard.cloneNode(true);
      firstCard.parentNode.removeEventListener('click', e);
    }
    console.log('------------');
    console.log(e.target.parentNode.parentNode);
    console.log(e.target.parentNode)
    console.log('------------');
  })

  let back=document.createElement("div");
  let rand=Math.floor(Math.random()*(16-i));
  backText[i].innerHTML="<h2>"+words[rand]+"</h2>";
  words.splice(rand, 1);
  
  // console.log("done");
}
// console.log(e.target());
