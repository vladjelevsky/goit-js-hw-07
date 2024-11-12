const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  const info = {
    email,
    password,
  };

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
  } else {
    console.log(info);
    form.reset();
  }
}
