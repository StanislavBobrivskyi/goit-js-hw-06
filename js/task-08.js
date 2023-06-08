const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  //   const emailInput = event.currentTarget.elements.email;
  //   const passwordInput = event.currentTarget.elements.password;

  if (email.value === "" || password.value === "") {
    alert("Please fill in all fields");
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };
  }

  console.log(formData);

  event.currentTarget.reset();
}
