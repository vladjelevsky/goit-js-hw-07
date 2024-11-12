//функція рандомного вибору кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// отримуємо доступ до необхідних елементів
const inputNumber = document.querySelector("#controls input");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

// додаємо слухача на кнопки
buttonCreate.addEventListener("click", handleCreate);
buttonDestroy.addEventListener("click", destroyBoxes);

// функція, що валідує значення,введене в інпут і відносно значення викликає функцію створення нових елементів, або алерт-повідомлення.
function handleCreate() {
  const amount = Number(inputNumber.value);

  if (amount > 0 && amount <= 100) {
    createBoxes(amount);
    inputNumber.value = "";
  } else {
    alert("Please enter a number between 1 and 100");
  }
}

// функція створення елементів
function createBoxes(amount) {
  boxes.innerHTML = "";

  let boxSize = 30;
  // створюємо масив який будемо наповнювати створеними елементами
  const boxElements = [];

  // цикл, який наповнює масив елементів і збільшує розміри елемента з кожною ітерацією
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");

    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxElements.push(box);

    boxSize += 10;
  }
  // додаємо елементи в DOM одночасно за допомогою методу .append() і оператору spread
  boxes.append(...boxElements);
}

// функція знищення елементів

function destroyBoxes() {
  boxes.innerHTML = "";
}
