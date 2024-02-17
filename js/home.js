let loginForm = document.getElementsByClassName("wrapper")[0];
let loginBtn = document.getElementsByClassName("login")[0];

let signupForm = document.getElementsByClassName("wrapper-signup")[0];
let signupBtn = document.getElementsByClassName("signup")[0];

loginBtn.addEventListener("click", function () {
  signupForm.style.display = "none";
  loginForm.style.display = "block";
});

signupBtn.addEventListener("click", function () {
  loginForm.style.display = "none";
  signupForm.style.display = "block";
});
