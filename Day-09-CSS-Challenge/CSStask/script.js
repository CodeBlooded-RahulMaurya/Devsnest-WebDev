const seatingArea = document.querySelector(".seating-area");
function makeSeat() {
  const div = document.createElement("div");
  // div.style.height = "15%";
  // div.style.width = "15%";
  div.className = "seat";
  div.style.backgroundColor = "#8B3F2C";
  div.style.zIndex = "1";
  return div;
}

for (let i = 0; i < 36; i++) {
  seatingArea.appendChild(makeSeat());
}
