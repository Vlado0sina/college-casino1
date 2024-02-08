let day = document.getElementsByClassName("day");
let mounth = document.getElementsByClassName("mounth");
let year = document.getElementsByClassName("year");
let codeNumber = document.getElementsByClassName("code");
let phoneNumber = document.getElementsByClassName("number");
let Name = document.getElementsByClassName("name");
let surname = document.getElementsByClassName("surname");
let email = document.getElementsByClassName("email").value;
let select = document.getElementsByClassName("gender");
let textInput = document.getElementsByClassName("textInput");

for (let i = 0; i < select.length; i++) {
  select[i].addEventListener("change", function () {
    if (select[i].value === "Other") {
      textInput[i].style.display = "block";
      select[i].style.display = "none";
    } else {
      textInput[i].style.display = "none";
    }
  });
}

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
function validEmail(email) {
  return emailRegex.test(email);
}
//i need to add valiadion about AGE
//i need to add valiadion about EMAIL
//i need to add valiadion about PHONE NUMBER
//i need to add valiadion about POSTAL CODE

//day and mounth, year and mobile phone code with number
for (
  let i = 0;
  i < day.length &&
  mounth.length &&
  year.length &&
  codeNumber.length &&
  phoneNumber.length;
  i++
) {
  day[i].addEventListener("input", function () {
    if (this.value.length > 2) {
      this.value = this.value.slice(0, 2);
    }
  });
  mounth[i].addEventListener("input", function () {
    if (this.value.length > 2) {
      this.value = this.value.slice(0, 2);
    }
  });
  year[i].addEventListener("input", function () {
    if (this.value.length > 4) {
      this.value = this.value.slice(0, 4);
    }
  });
  //need to add everything after "+" but not befor and not replacing "+" and only 1 +
  codeNumber[i].addEventListener("input", function () {
    if (this.value.length > 1 && this.value[0] !== "+") {
      this.value = this.value.slice(1);
    }
  });
  codeNumber[i].addEventListener("keydown", function (event) {
    let selection = window.getSelection().toString();
    if (
      event.key === "Backspace" ||
      event.key === "Delete" ||
      (event.inputType === "deleteContentBackward" &&
        this.selectionStart === 1 &&
        selection.length > 0)
    ) {
      event.preventDefault();
    }
  });
  codeNumber[i].addEventListener("focus", function () {
    this.value = "+" + this.value;
  });
  codeNumber[i].addEventListener("input", function () {
    if (this.value.length > 4) {
      this.value = this.value.slice(0, 4);
    }
  });
  phoneNumber[i].addEventListener("input", function () {
    if (this.value.length > 12) {
      this.value = this.value.slice(0, 12);
    }
  });
  Name[i].addEventListener("input", function () {
    this.value = this.value.toLowerCase();
    if (this.value[0] === this.value[0].toLowerCase()) {
      this.value = this.value[0].toUpperCase() + this.value.slice(1);
    }
  });
  surname[i].addEventListener("input", function () {
    this.value = this.value.toLowerCase();
    if (this.value[0] === this.value[0].toLowerCase()) {
      this.value = this.value[0].toUpperCase() + this.value.slice(1);
    }
  });
}
