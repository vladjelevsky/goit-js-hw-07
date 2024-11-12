// функція, що генерує випадковий колір

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// отримуємо доступ до всіх необхідних елементів

const clickMe = document.querySelector("button.change-color");
const body = document.querySelector("body");
const spanColor = document.querySelector("span.color");

// додаємо слухача події на кнопку
clickMe.addEventListener("click", handleChangeColor);

// створюємо функцію яка викликає генератор кольору і задає нове значення для фону і текстового значення спану

function handleChangeColor() {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  spanColor.textContent = newColor;
}
