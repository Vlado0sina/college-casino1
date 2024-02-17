let loginForm = document.getElementsByClassName("wrapper")[0];
let loginBtn = document.getElementsByClassName("login")[0];

let signupForm = document.getElementsByClassName("wrapper-signup")[0];
let signupBtn = document.getElementsByClassName("signup")[0];

let oneBtn = document.getElementsByClassName("one")[0];
let twoBtn = document.getElementsByClassName("two")[0];
let threeBtn = document.getElementsByClassName("three")[0];

let form1 = document.getElementsByClassName("Stage1")[0];
let form2 = document.getElementsByClassName("Stage2")[0];
let form3 = document.getElementsByClassName("Stage3")[0];

let inputs = document.getElementsByClassName("inputs");

loginBtn.addEventListener("click", function () {
  signupForm.style.display = "none";
  loginForm.style.display = "block";
});

signupBtn.addEventListener("click", function () {
  loginForm.style.display = "none";
  signupForm.style.display = "flex";
});

function isEmpty() {
  var isValid = true;
  for (let i = 0; i < inputs.length; i++) {
    if (
      inputs[i].type === "text" ||
      inputs[i].type === "password" ||
      inputs[i].type === "date"
    ) {
      if (inputs[i].value.trim() === "") {
        isValid = false;
        break;
      }
    }
  }
  if (isValid) {
    if (form1.style.display === "block") {
      form2.style.display = "block";
      form3.style.display = "none";
      form1.style.display = "none";
    }
    if (form2.style.display === "block") {
      form3.style.display = "block";
      form1.style.display = "none";
      form2.style.display = "none";
    }
    if (form3.style.display === "block") {
      form1.style.display = "none";
      form2.style.display = "none";
    }
  }
  return isValid;
}

// if (isEmpty()) {
// }

// oneBtn.addEventListener("click", function () {
//   form2.style.display = "none";
//   form3.style.display = "none";
//   form1.style.display = "block";
// });

// twoBtn.addEventListener("click", function () {
//   form3.style.display = "none";
//   form1.style.display = "none";
//   form2.style.display = "block";
// });

// threeBtn.addEventListener("click", function () {
//   form2.style.display = "none";
//   form1.style.display = "none";
//   form3.style.display = "block";
// });
