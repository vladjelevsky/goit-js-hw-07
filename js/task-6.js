function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector("#controls input");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

buttonCreate.addEventListener("click", handleCreate);
buttonDestroy.addEventListener("click", destroyBoxes);

function handleCreate() {
  const amount = Number(inputNumber.value);

  if (amount > 0 && amount <= 100) {
    createBoxes(amount);
    inputNumber.value = "";
  } else {
    alert("Please enter a number between 1 and 100");
  }
}

function createBoxes(amount) {
  boxes.innerHTML = "";

  let boxSize = 30;
  const boxElements = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");

    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxElements.push(box);

    boxSize += 10;
  }
  boxes.append(...boxElements);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
