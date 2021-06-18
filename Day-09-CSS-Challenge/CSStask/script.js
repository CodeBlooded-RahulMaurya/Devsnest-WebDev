const seatingArea = document.querySelector(".seating-area");
function makeSeat() {
  const div = document.createElement("div");
  div.style.height = "20px";
  div.style.width = "20px";
  div.style.backgroundColor = "red";
  div.style.zIndex = "1";
  div.style.border = "2px solid black";
  return div;
}

for (let i = 0; i < 20; i++) {
  seatingArea.appendChild(makeSeat());
}
