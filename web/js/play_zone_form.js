let dayInput = document.getElementsByClassName("day")[0];
let monthInput = document.getElementsByClassName("month")[0];
let yearInput = document.getElementsByClassName("year")[0];
let ageError = document.getElementById("ageError");
let codeNumber = document.getElementsByClassName("code");
let phoneNumber = document.getElementsByClassName("number");
let Name = document.getElementsByClassName("name");
let surname = document.getElementsByClassName("surname");
let email = document.getElementsByClassName("email").value;
let emailError = document.getElementById("emailError");
let select = document.getElementsByClassName("gender");
let textInput = document.getElementsByClassName("textInput");

let blackJackgame = document.getElementById("blackJack");
let diceRollgame = document.getElementById("diceRoll");

let walletConrainer = document.getElementsByClassName(
  "main-wallet-container"
)[0];

let san1 = document.getElementsByClassName("san1")[0];
let san2 = document.getElementsByClassName("san2")[0];
let san3 = document.getElementsByClassName("san3")[0];
let san4 = document.getElementsByClassName("san4")[0];
let san5 = document.getElementsByClassName("san5")[0];

let selectAmountNumber = document.querySelectorAll(".select-amount-number");

let allGamesBtn = document.getElementsByClassName("all-games-btn")[0];
let slotsBtn = document.getElementsByClassName("slots-btn")[0];
let dieBtn = document.getElementsByClassName("die-btn")[0];
let cardsBtn = document.getElementsByClassName("cards-btn")[0];
let walletBtn = document.getElementsByClassName("wallet-btn")[0];
let profile = document.getElementsByClassName("profile-btn")[0];

let tabp = document.getElementsByClassName("tabs-group")[0];
let tabW = document.getElementsByClassName("tabs-groupW")[0];

let general = document.getElementsByClassName("general-tab")[0];
let security = document.getElementsByClassName("security-tab")[0];

let formSecurity = document.getElementsByClassName("form-security")[0];
let formGeneral = document.getElementsByClassName("form-general")[0];

let showPassword = document.getElementsByClassName("eye");
let input = document.getElementsByClassName("inputPassword");

//do password visible and vise versa
for (let i = 0; i < showPassword.length; i++) {
  showPassword[i].addEventListener("click", function () {
    if (input[i].type === "password") {
      input[i].type = "text";
      showPassword[i].src = "../play_zone_pic/eye-solid.svg";
    } else {
      input[i].type = "password";
      showPassword[i].src = "../play_zone_pic/eye-slash-solid.svg";
    }
  });
}

//do content visible when you click to profile -> by default GENERAL and vise versa
profile.addEventListener("click", function () {
  diceRollgame.style.display = "none";
  blackJackgame.style.display = "none";
  walletConrainer.style.display = "none";
  tabW.style.display = "none";
  tabp.style.display = "flex";
});

general.addEventListener("click", function () {
  diceRollgame.style.display = "none";
  formSecurity.style.display = "none";
  walletConrainer.style.display = "none";
  formGeneral.style.display = "block";
});

security.addEventListener("click", function () {
  diceRollgame.style.display = "none";
  formGeneral.style.display = "none";
  walletConrainer.style.display = "none";
  formSecurity.style.display = "block";
});

walletBtn.addEventListener("click", function () {
  diceRollgame.style.display = "none";
  blackJackgame.style.display = "none";
  tabp.style.display = "none";
  formGeneral.style.display = "none";
  formSecurity.style.display = "none";
  walletConrainer.style.display = "flex";
  tabW.style.display = "flex";
});

cardsBtn.addEventListener("click", function () {
  console.log("click");
  diceRollgame.style.display = "none";
  walletConrainer.style.display = "none";
  tabp.style.display = "none";
  tabW.style.display = "none";
  loadContentC();
});

function loadContentC() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      //blackJackgame.innerHTML = "";
      blackJackgame.innerHTML = xhr.responseText;
    }
  };
  xhr.open("GET", "../blackjack/blackjack.html", true);
  xhr.send();
}

dieBtn.addEventListener("click", function () {
  console.log("click");
  blackJackgame.style.display = "none";
  walletConrainer.style.display = "none";
  tabp.style.display = "none";
  tabW.style.display = "none";
  loadContentD();
});

function loadContentD() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      //blackJackgame.innerHTML = "";
      diceRollgame.innerHTML = xhr.responseText;
    }
  };
  xhr.open("GET", "../diceRoll/diceRoll.html", true);
  xhr.send();
}

//change to input field for gender
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

//i need to add valiadion about EMAIL
//i need to add valiadion about PHONE NUMBER
//i need to add valiadion about POSTAL CODE

dayInput.addEventListener("input", validateAge);
monthInput.addEventListener("input", validateAge);
yearInput.addEventListener("input", validateAge);

function validateAge() {
  const day = parseInt(dayInput.value);
  const month = parseInt(monthInput.value);
  const year = parseInt(yearInput.value);

  // Checking that all three fields are filled in
  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    ageError.textContent = "Please fill in all date of birth fields";
    return;
  }

  // Getting the current date
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();

  // Calculate age based on entered date of birth
  const age =
    currentYear -
    year -
    (currentMonth < month || (currentMonth === month && currentDay < day)
      ? 1
      : 0);

  // Checking that age is greater than or equal to 18
  if (age < 18) {
    ageError.textContent = "You must be over 18 years old";
  } else {
    ageError.textContent = "";
  }
}

//day and mounth, year and mobile phone code with number
for (
  let i = 0;
  i < dayInput.length &&
  monthInput.length &&
  yearInput.length &&
  codeNumber.length &&
  phoneNumber.length;
  i++
) {
  dayInput[i].addEventListener("input", function () {
    if (this.value.length > 2) {
      this.value = this.value.slice(0, 2);
    }
  });
  monthInput[i].addEventListener("input", function () {
    if (this.value.length > 2) {
      this.value = this.value.slice(0, 2);
    }
  });
  yearInput[i].addEventListener("input", function () {
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

function AmountNumber(an) {
  selectAmountNumber.forEach(function (selectAmountNumber) {
    selectAmountNumber.style.borderRadius = "";
    selectAmountNumber.style.backgroundColor = "";
  });

  let event = an.target;
  event.style.borderRadius = "50px";
  event.style.backgroundColor = "#b0e31c";
}

selectAmountNumber.forEach(function (selectAmountNumber) {
  selectAmountNumber.addEventListener("click", AmountNumber);
});

// const cardNumber = document.getElementById("card-number");
// const cardHolderName = document.getElementById("card-holder-name");
// const cardNameInput = document.getElementById("card-name-input");
// const displayValidity = document.getElementById("validity");
// const validityInput = document.getElementById("validity-input");
// const cardNumberDisplay = document.querySelectorAll(".card-number-display");
// const cvvInput = document.getElementById("cvv");
// const cvvDisplay = document.getElementById("cvv-display");
// let currentSpanIndex = 0;
// cardNumber.addEventListener("input", () => {
//   const inputNumber = cardNumber.value.replace(/\D/g, "");
//   cardNumber.value = cardNumber.value.slice(0, 16).replace(/\D/g, "");
//   for (let i = 0; i < cardNumberDisplay.length; i++) {
//     if (i < inputNumber.length) {
//       cardNumberDisplay[i].textContent = inputNumber[i];
//     } else {
//       cardNumberDisplay[i].textContent = "_";
//     }
//   }
//   if (inputNumber.length <= cardNumberDisplay.length) {
//     currentSpanIndex = inputNumber.length;
//   } else {
//     currentSpanIndex = cardNumberDisplay.length;
//   }
// });
// cardNameInput.addEventListener("input", () => {
//   if (cardNameInput.value.length < 1) {
//     cardHolderName.innerText = "Your Name Here";
//   } else if (cardNameInput.value.length > 30) {
//     cardNameInput.value = cardNameInput.value.slice(0, 30);
//   } else {
//     cardHolderName.innerText = cardNameInput.value;
//   }
// });
// validityInput.addEventListener("input", () => {
//   const inputString = validityInput.value;
//   if (inputString.length < 1) {
//     displayValidity.innerText = "06/28";
//     return false;
//   }
//   const parts = inputString.split("-");
//   const year = parts[0].slice(2);
//   const month = parts[1];
//   //Final formatted string
//   const formattedString = `${month}/${year}`;
//   displayValidity.innerText = formattedString;
// });
// //cvv
// cvvInput.addEventListener("input", () => {
//   const userInput = cvvInput.value;
//   const sanitizedInput = userInput.slice(0, 3);
//   const numericInput = sanitizedInput.replace(/\D/g, "");
//   cvvInput.value = numericInput;
//   cvvDisplay.innerText = numericInput;
// });
// //Flip
// cvvInput.addEventListener("click", () => {
//   document.getElementById("card").style.transform = "rotateY(180deg)";
// });
// //Reflip card
// document.addEventListener("click", () => {
//   if (document.activeElement.id != "cvv") {
//     document.getElementById("card").style.transform = "rotateY(0deg)";
//   }
// });
// window.onload = () => {
//   cvvInput.value = "";
//   validityInput.value = "";
//   cardNameInput.value = "";
//   cardNumber.value = "";
// };
