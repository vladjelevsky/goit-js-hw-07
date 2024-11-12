// отримуємо доступ до інпуту і спану привітання
const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

// Додаємо слухача події до інпуту. Створюємо константу для збереження значення вводу і методом .trim() видаляємо пробіли
inputName.addEventListener("input", (event) => {
  const inputValue = event.currentTarget.value.trim();

  // змінюємо значення текстового контенту з умовою

  outputName.textContent = inputValue === "" ? "Anonymous" : inputValue;
});
