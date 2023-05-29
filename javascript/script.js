"use strict";

const formEl = document.getElementById("form");
const usernameEl = document.getElementById("username");
const emailEl = document.getElementById("email");
const mobileEl = document.getElementById("mobile");
const passwordEl = document.getElementById("password");
const confirmPasswordEl = document.getElementById("confirm-password");
const containerEl = document.querySelector(".container");
const container2El = document.querySelector(".container-2");

//global variable
let count = 0;
//function
const init = () => {};
const errorFN = (inputEl, message) => {
  const formControlEl = inputEl.parentElement;
  formControlEl.classList.remove("success");
  formControlEl.classList.add("error");
  const smallElementEl = formControlEl.querySelector(".form-small");
  smallElementEl.innerText = message;
};
//function success
const successFn = (inputEl) => {
  const formControlEl = inputEl.parentElement;
  formControlEl.classList.remove("error");
  formControlEl.classList.add("success");
  console.log(`${inputEl.name.toUpperCase()}:${inputEl.value}`);
  count += 1;
};
const checkRequired = (inputEl) => {
  if (inputEl.value.trim() === "") {
    errorFN(
      inputEl,
      `${
        inputEl.name.charAt(0).toUpperCase() + inputEl.name.slice(1)
      } is Mandatory`
    );
  } else {
    //success logic
    successFn(inputEl);
  }
};
//check length
const checkLength = (inputEl, minlength, maxlength) => {
  if (inputEl.value.length >= minlength && inputEl.value.length <= 12) {
    successFn(inputEl);
  } else if (inputEl.value.length < minlength) {
    errorFN(
      inputEl,
      `${
        inputEl.name.charAt(0).toUpperCase() + inputEl.name.slice(1)
      } should be a minimum ${minlength} characters`
    );
  } else if (inputEl.value.length > maxlength) {
    errorFN(
      inputEl,
      `${
        inputEl.name.charAt(0).toUpperCase() + inputEl.name.slice(1)
      } should be a with in ${maxlength} characters`
    );
  }
};
function isEmailAddress(str) {
  var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return pattern.test(str); // returns a boolean
}

//event listeners
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = usernameEl.value.trim();
  const email = emailEl.value.trim();
  const mobile = mobileEl.value.trim();
  const password = passwordEl.value.trim();
  const confirmPassword = confirmPasswordEl.value.trim();
  // checkRequired(usernameEl);
  // checkRequired(emailEl);
  // checkRequired(mobileEl);
  // checkRequired(passwordEl);
  checkLength(usernameEl, 5, 12);
  checkLength(passwordEl, 8, 14);
  checkLength(mobileEl, 10, 10);
  if (isEmailAddress(email)) {
    successFn(emailEl);
  } else {
    errorFN(emailEl, "Enter valid Email id");
  }
  if (confirmPassword.length === 0) {
    errorFN(confirmPasswordEl, "Confirm password is Mandatory");
  } else if (password === confirmPassword) {
    successFn(confirmPasswordEl);
  } else {
    // errorFN(confirmPasswordEl, "password and confirm password is mismatch");
    errorFN(confirmPasswordEl, "password and confirm password is mismatch");
  }
  if (count === 5) {
  }
});
// formEl.addEventListener("submit", (event) => {
//   const message = `<h1 class='message'>Congratulation <br> you <br> Register <br> successfully</h1>`;
//   containerEl.classList.add("close");
//   container2El.classList.remove("close");
//   container2El.classList.add("open");
//   containerEl.innerHTML = message;
// });
console.log(count);

//init
init();
