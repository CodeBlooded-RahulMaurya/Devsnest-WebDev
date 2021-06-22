const body = document.querySelector(".cards");
body.innerHTML +=
  " <div class='flip-card'><div class='flip-card-inner'><div class='flip-card-front'><img src='https://image.freepik.com/free-vector/seamless-damask-background-pattern-design-wallpaper-made-turkish-texture-ceramic-tiles-vector_117038-17.jpg'  ></div></div></div></div> ";
const container = document.querySelector(".container");
console.log(card);
for (let i = 0; i < 23; i++) {
  var card = document.querySelector(".flip-card");
  var cardCopy = card.cloneNode(true);
  card.after(cardCopy);
  // container.appendChild(document.querySelector('.flip-card'));
}
{/* <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fab%2F01_of_spades_A.svg%2F1920px-01_of_spades_A.svg.png&f=1&nofb=1'alt='Avatar' '> */}