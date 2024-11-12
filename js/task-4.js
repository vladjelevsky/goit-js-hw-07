// отримуємо доступ до форми
const registerForm = document.querySelector(".login-form");

// додаємо слухача події
registerForm.addEventListener("submit", handleSubmit);

//створюємо функцію обробки події. Скасовуємо дії за замовчуваннямб щоб сторінка не перезавантажувалася.
function handleSubmit(event) {
  event.preventDefault();

  // Отримуємо форму з об'єкта події і введенні в поля форми значенняб видаляючи пробіли методом .trim()
  const form = event.currentTarget;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  // Створюємо об'єкт для збереження введених значень
  const info = {
    email,
    password,
  };

  // Якщо є незаповнені поля, виводимо попередження
  if (email === "" || password === "") {
    alert("All form fields must be filled in");
  } else {
    // Якщо всі поля заповнені, виводимо об'єкт із введеними даними в консоль і очищуємо значення полів форми методом .reset().
    console.log(info);
    form.reset();
  }
}
