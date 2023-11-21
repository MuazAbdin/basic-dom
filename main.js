const header = document.createElement("h1");
header.setAttribute("class", "header my-header");
header.innerHTML = "The Best Game Ever";
// document.body.appendChild(header);

const subHeader = document.createElement("h2");
subHeader.setAttribute("class", "header my-subHeader");
subHeader.innerHTML = "Game by: Elevation";
// document.body.appendChild(subHeader);

document.body.prepend(header, subHeader);

const ball = document.getElementById("ball");
const topArrow = document.getElementById("up"),
  leftArrow = document.getElementById("left"),
  rightArrow = document.getElementById("right"),
  bottomArrow = document.getElementById("down");
const playingField = document.getElementById("playing-field");
const arrow = document.getElementById("arrows");
const maxWidth =
  parseInt(getComputedStyle(playingField).width) -
  parseInt(getComputedStyle(playingField).padding) -
  parseInt(getComputedStyle(ball).width);
const maxHeight =
  parseInt(getComputedStyle(playingField).height) -
  37 -
  // parseInt(getComputedStyle(arrow).height) -
  parseInt(getComputedStyle(ball).width);

const move = (direction) => {
  const step = direction == "left" || direction == "top" ? -15 : 15;
  if (direction == "right") direction = "left";
  if (direction == "bottom") direction = "top";
  let newValue = parseInt(ball.style[direction] || 0) + step;
  let maxStep = direction == "left" ? maxWidth : maxHeight;
  newValue = Math.min(Math.max(newValue, 0), parseInt(maxStep));
  ball.style[direction] = `${newValue}px`;
};

topArrow.addEventListener("click", () => move("top"));
leftArrow.addEventListener("click", () => move("left"));
rightArrow.addEventListener("click", () => move("right"));
bottomArrow.addEventListener("click", () => move("bottom"));

document.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "ArrowUp":
      move("top");
      break;
    case "ArrowDown":
      move("bottom");
      break;
    case "ArrowRight":
      move("right");
      break;
    case "ArrowLeft":
      move("left");
      break;
    default:
      break;
  }
});
