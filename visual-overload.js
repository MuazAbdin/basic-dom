const container = document.getElementById("container");

const getRandomColor = function () {
  const niceColors = [
    "#8e44ad",
    "#3498db",
    "#c0392b",
    "#f1c40f",
    "#d35400",
    "#2ecc71",
    "#1abc9c",
    "#2c3e50",
    "#7f8c8d",
  ];

  const randomPosition = Math.floor(Math.random() * niceColors.length);
  return niceColors[randomPosition];
};

for (let i = 0; i < 16; i++) {
  const box = document.createElement("div");
  box.setAttribute("class", "box");
  box.addEventListener("mouseenter", () => {
    box.style.backgroundColor = getRandomColor();
  });
  container.append(box);
}
