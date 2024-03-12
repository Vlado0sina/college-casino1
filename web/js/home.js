let loginForm = document.getElementsByClassName("wrapper")[0];
let loginBtn = document.getElementsByClassName("login")[0];

let signupForm = document.getElementsByClassName("wrapper-signup")[0];
let signupBtn = document.getElementsByClassName("signup")[0];

let register = document.getElementById("register");

let oneBtn = document.getElementsByClassName("one")[0];
let twoBtn = document.getElementsByClassName("two")[0];
let threeBtn = document.getElementsByClassName("three")[0];

let form1 = document.getElementById("form1");
let form2 = document.getElementById("form2");
let form3 = document.getElementById("form3");

let btnsignup = document.getElementsByClassName("btnsignup")[0];

let nameInput = document.getElementById("firstName");
let surnameInput = document.getElementById("lastName");

let address = document.getElementById("address");
let postalCode = document.getElementsByClassName("postalCode")[0];
let city = document.getElementsByClassName("city")[0];
const country = document.querySelector("#country");

let username = document.getElementsByClassName("username")[0];
let loginUsername = document.getElementsByClassName("login-username")[0];

let password = document.getElementsByClassName("password")[0];
let loginPassword = document.getElementsByClassName("login-password")[0];

let stage3 = document.querySelector(".Stage3");

let DOB = document.getElementById("DOB");

//LOGIN BUTTON
loginBtn.addEventListener("click", function () {
  signupForm.style.display = "none";
  loginForm.style.display = "block";
});
//LOGIN BUTTON

//SIGN UP BUTTON
signupBtn.addEventListener("click", function () {
  loginForm.style.display = "none";
  signupForm.style.display = "flex";
});
//SIGN UP BUTTON

//SIGN UP BUTTON IN FORM
// btnsignup.addEventListener("click", function () {
//   window.location.href = "./play_zone.html";
// });
//SIGN UP BUTTON IN FORM

//LOGIN FORM
////////////
//USERNAME
loginUsername.addEventListener("input", function () {
  let regexUsername = /^[\w\-]+$/;
  let valueWithoutSpaces = this.value.replace(/\s/g, "");
  this.value = valueWithoutSpaces;
  if (!this.value.match(regexUsername)) {
    this.value = this.value.replace(/[^\w\-]/g, "");
  }
  if (this.value.length > 30) {
    this.value = this.value.slice(0, 30);
  }
});
//USERNAME

//PASSWORD

//PASSWORD
////////////
//LOGIN FORM

//CHECH FORM VALIDITY
function checkFormValidity(form) {
  let isValid = true;
  let inputs = form.getElementsByClassName("inputs");
  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].checkValidity()) {
      isValid = false;
      break;
    }
  }
  return isValid;
}

function switchToNextForm(currentForm, nextForm) {
  currentForm.style.display = "none";
  nextForm.style.display = "block";
}

form1.querySelectorAll(".inputs").forEach(function (input) {
  input.addEventListener("keydown", function (event) {
    if (checkFormValidity(form1)) {
      if (event.key === "Enter") {
        event.preventDefault();
        input.blur();
        oneBtn.style.backgroundColor = "lightgray";
        twoBtn.style.backgroundColor = "#b0e31c";
        switchToNextForm(form1, form2);
      }
    }
  });
});

form2.querySelectorAll(".inputs").forEach(function (input) {
  input.addEventListener("keydown", function (event) {
    if (checkFormValidity(form2)) {
      if (event.key === "Enter") {
        event.preventDefault();
        input.blur();
        twoBtn.style.backgroundColor = "lightgray";
        threeBtn.style.backgroundColor = "#b0e31c";
        switchToNextForm(form2, form3);
      }
    }
  });
});
//CHECH FORM VALIDITY

//FIRST NAME
nameInput.addEventListener("input", function () {
  let pattern = /^[a-zA-Z]+$/;

  let valueWithoutSpaces = this.value.replace(/\s/g, "");
  this.value = valueWithoutSpaces;

  this.value = this.value.toLowerCase();
  if (this.value[0] === this.value[0].toLowerCase()) {
    this.value = this.value[0].toUpperCase() + this.value.slice(1);
  }

  if (!this.value.match(pattern)) {
    this.value = this.value.replace(/[^a-zA-Z]/g, "");
  }

  if (this.value.length > 40) {
    this.value = this.value.slice(0, 40);
  }
});
//FIRST NAME

//LAST NAME
surnameInput.addEventListener("input", function () {
  let pattern = /^[a-zA-Z]+$/;

  let valueWithoutSpaces = this.value.replace(/\s/g, "");
  this.value = valueWithoutSpaces;

  this.value = this.value.toLowerCase();
  if (this.value[0] === this.value[0].toLowerCase()) {
    this.value = this.value[0].toUpperCase() + this.value.slice(1);
  }

  if (!this.value.match(pattern)) {
    this.value = this.value.replace(/[^a-zA-Z]/g, "");
  }
  if (this.value.length > 40) {
    this.value = this.value.slice(0, 40);
  }
});
//LAST NAME

//DOB
DOB.addEventListener("input", function () {
  let dobValue = new Date(this.value);

  let currentDate = new Date();

  let age = currentDate.getFullYear() - dobValue.getFullYear();
  let monthDiff = currentDate.getMonth() - dobValue.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && currentDate.getDay() < dobValue.getDate())
  ) {
    age--;
  }
  if (age < 18) {
    alert("You must be over 18 years old");
    this.value = "";
  }
});
//DOB

//COUNTRY
getCountryData();
let countryNames = [];
async function getCountryData() {
  const countryRes = await fetch("https://restcountries.com/v3.1/all");
  const data = await countryRes.json();

  countryNames = data.map((country) => {
    return country.name.common;
  });
}
country.addEventListener("input", function () {
  let pattern = /^[a-zA-Z]+$/;
  if (!this.value.match(pattern)) {
    this.value = this.value.replace(/[^a-zA-Z]/g, "");
  }
});
country.addEventListener("input", onCountryChange);

function onCountryChange() {
  removeAutocompleteDropdown();
  const value = country.value.toLowerCase();

  if (value.length === 0) {
    return;
  }
  const filteredNames = [];
  countryNames.forEach((countryName) => {
    if (countryName.substr(0, value.length).toLowerCase() === value)
      filteredNames.push(countryName);
  });
  createAutocompleteDropdown(filteredNames);
}

function createAutocompleteDropdown(list) {
  const listEl = document.createElement("ul");
  listEl.className = "autocomplete-list";
  listEl.id = "autocomplete-list";

  list.forEach((countryL) => {
    const listItem = document.createElement("li");

    const countryButton = document.createElement("button");
    countryButton.innerHTML = countryL;
    countryButton.addEventListener("click", onCountryButtonClick);
    listItem.appendChild(countryButton);

    listEl.appendChild(listItem);
  });

  document.querySelector("#autocomplete").appendChild(listEl);
  // country.appendChild(listEl);
  // document.querySelector("#country").appendChild(listEl);
}

function removeAutocompleteDropdown() {
  const listEl = document.querySelector("#autocomplete-list");
  if (listEl) {
    listEl.remove();
  }
}

function onCountryButtonClick(e) {
  e.preventDefault();
  const buttonEl = e.target;
  country.value = buttonEl.innerHTML;

  removeAutocompleteDropdown();
}

//COUNTRY

//POSTAL CODE
const regexPostal = {
  GB: "GIR[ ]?0AA|((AB|AL|B|BA|BB|BD|BH|BL|BN|BR|BS|BT|CA|CB|CF|CH|CM|CO|CR|CT|CV|CW|DA|DD|DE|DG|DH|DL|DN|DT|DY|E|EC|EH|EN|EX|FK|FY|G|GL|GY|GU|HA|HD|HG|HP|HR|HS|HU|HX|IG|IM|IP|IV|JE|KA|KT|KW|KY|L|LA|LD|LE|LL|LN|LS|LU|M|ME|MK|ML|N|NE|NG|NN|NP|NR|NW|OL|OX|PA|PE|PH|PL|PO|PR|RG|RH|RM|S|SA|SE|SG|SK|SL|SM|SN|SO|SP|SR|SS|ST|SW|SY|TA|TD|TF|TN|TQ|TR|TS|TW|UB|W|WA|WC|WD|WF|WN|WR|WS|WV|YO|ZE)(d[dA-Z]?[ ]?d[ABD-HJLN-UW-Z]{2}))|BFPO[ ]?d{1,4}",
  JE: "JEd[dA-Z]?[ ]?d[ABD-HJLN-UW-Z]{2}",
  GG: "GYd[dA-Z]?[ ]?d[ABD-HJLN-UW-Z]{2}",
  IM: "IMd[dA-Z]?[ ]?d[ABD-HJLN-UW-Z]{2}",
  US: "d{5}([ -]d{4})?",
  CA: "[ABCEGHJKLMNPRSTVXY]d[ABCEGHJ-NPRSTV-Z][ ]?d[ABCEGHJ-NPRSTV-Z]d",
  DE: "d{5}",
  JP: "d{3}-d{4}",
  FR: "d{2}[ ]?d{3}",
  AU: "d{4}",
  IT: "d{5}",
  CH: "d{4}",
  AT: "d{4}",
  ES: "d{5}",
  NL: "d{4}[ ]?[A-Z]{2}",
  BE: "d{4}",
  DK: "d{4}",
  SE: "d{3}[ ]?d{2}",
  NO: "d{4}",
  BR: "d{5}[-]?d{3}",
  PT: "d{4}([-]d{3})?",
  FI: "d{5}",
  AX: "22d{3}",
  KR: "d{3}[-]d{3}",
  CN: "d{6}",
  TW: "d{3}(d{2})?",
  SG: "d{6}",
  DZ: "d{5}",
  AD: "ADd{3}",
  AR: "([A-HJ-NP-Z])?d{4}([A-Z]{3})?",
  AM: "(37)?d{4}",
  AZ: "d{4}",
  BH: "((1[0-2]|[2-9])d{2})?",
  BD: "d{4}",
  BB: "(BBd{5})?",
  BY: "d{6}",
  BM: "[A-Z]{2}[ ]?[A-Z0-9]{2}",
  BA: "d{5}",
  IO: "BBND 1ZZ",
  BN: "[A-Z]{2}[ ]?d{4}",
  BG: "d{4}",
  KH: "d{5}",
  CV: "d{4}",
  CL: "d{7}",
  CR: "d{4:5}|d{3}-d{4}",
  HR: "d{5}",
  CY: "d{4}",
  CZ: "d{3}[ ]?d{2}",
  DO: "d{5}",
  EC: "([A-Z]d{4}[A-Z]|(?:[A-Z]{2})?d{6})?",
  EG: "d{5}",
  EE: "d{5}",
  FO: "d{3}",
  GE: "d{4}",
  GR: "d{3}[ ]?d{2}",
  GL: "39d{2}",
  GT: "d{5}",
  HT: "d{4}",
  HN: "(?:d{5})?",
  HU: "d{4}",
  IS: "d{3}",
  IN: "d{6}",
  ID: "d{5}",
  IL: "d{5}",
  JO: "d{5}",
  KZ: "d{6}",
  KE: "d{5}",
  KW: "d{5}",
  LA: "d{5}",
  LV: "d{4}",
  LB: "(d{4}([ ]?d{4})?)?",
  LI: "(948[5-9])|(949[0-7])",
  LT: "d{5}",
  LU: "d{4}",
  MK: "d{4}",
  MY: "d{5}",
  MV: "d{5}",
  MT: "[A-Z]{3}[ ]?d{2:4}",
  MU: "(d{3}[A-Z]{2}d{3})?",
  MX: "d{5}",
  MD: "d{4}",
  MC: "980d{2}",
  MA: "d{5}",
  NP: "d{5}",
  NZ: "d{4}",
  NI: "((d{4}-)?d{3}-d{3}(-d{1})?)?",
  NG: "(d{6})?",
  OM: "(PC )?d{3}",
  PK: "d{5}",
  PY: "d{4}",
  PH: "d{4}",
  PL: "d{2}-d{3}",
  PR: "00[679]d{2}([ -]d{4})?",
  RO: "d{6}",
  RU: "d{6}",
  SM: "4789d",
  SA: "d{5}",
  SN: "d{5}",
  SK: "d{3}[ ]?d{2}",
  SI: "d{4}",
  ZA: "d{4}",
  LK: "d{5}",
  TJ: "d{6}",
  TH: "d{5}",
  TN: "d{4}",
  TR: "d{5}",
  TM: "d{6}",
  Ukraine: "d{5}",
  UY: "d{5}",
  UZ: "d{6}",
  VA: "00120",
  VE: "d{4}",
  ZM: "d{5}",
  AS: "96799",
  CC: "6799",
  CK: "d{4}",
  RS: "d{6}",
  ME: "8d{4}",
  CS: "d{5}",
  YU: "d{5}",
  CX: "6798",
  ET: "d{4}",
  FK: "FIQQ 1ZZ",
  NF: "2899",
  FM: "(9694[1-4])([ -]d{4})?",
  GF: "9[78]3d{2}",
  GN: "d{3}",
  GP: "9[78][01]d{2}",
  GS: "SIQQ 1ZZ",
  GU: "969[123]d([ -]d{4})?",
  GW: "d{4}",
  HM: "d{4}",
  IQ: "d{5}",
  KG: "d{6}",
  LR: "d{4}",
  LS: "d{3}",
  MG: "d{3}",
  MH: "969[67]d([ -]d{4})?",
  MN: "d{6}",
  MP: "9695[012]([ -]d{4})?",
  MQ: "9[78]2d{2}",
  NC: "988d{2}",
  NE: "d{4}",
  VI: "008(([0-4]d)|(5[01]))([ -]d{4})?",
  PF: "987d{2}",
  PG: "d{3}",
  PM: "9[78]5d{2}",
  PN: "PCRN 1ZZ",
  PW: "96940",
  RE: "9[78]4d{2}",
  SH: "(ASCN|STHL) 1ZZ",
  SJ: "d{4}",
  SO: "d{5}",
  SZ: "[HLMS]d{3}",
  TC: "TKCA 1ZZ",
  WF: "986d{2}",
  XK: "d{5}",
  YT: "976d{2}",
};
// function getPostalCodeRegex(country) {
//   return regexPostal[country];
// }
// postalCode.addEventListener("input", function () {
//   let country1 = country.value;
//   console.log(country1);
//   let regex = getPostalCodeRegex(country1);
//   let postalCode1 = postalCode.value;

//   if (!postalCode1.match(regex)) {
//     console.log(
//       "Почтовый индекс не соответствует формату для выбранной страны."
//     );
//   } else {
//     console.log("Почтовый индекс соответствует формату для выбранной страны.");
//   }
// });
postalCode.addEventListener("input", function () {
  let pattern = /^[a-zA-Z0-9\s]+$/;
  if (!this.value.match(pattern)) {
    this.value = this.value.replace(/[^a-zA-Z0-9\s]/g, "");
  }
});

//POSTAL CODE

//CITY/TOWN
city.addEventListener("input", function () {
  // let pattern = /^[a-zA-Z]+$/;
  let pattern = /^[a-zA-Z]+(?:\s{1,2}[a-zA-Z]+)*$/;
  if (!this.value.match(pattern)) {
    // this.value = this.value.replace(/[^a-zA-Z]/g, "");
    this.value = this.value.replace(/[^a-zA-Z\s]/g, "");
    this.value = this.value.replace(/\s{2,}/g, " ");
  }
  if (this.value.length > 50) {
    this.value = this.value.slice(0, 50);
  }
});

//ADDRESS
address.addEventListener("input", function () {
  let pattern = /^[a-zA-Z0-9\s]+$/;
  if (!this.value.match(pattern)) {
    this.value = this.value.replace(/[^a-zA-Z0-9\s]/g, "");
  }
});
//ADDRESS

//EMAIL
function validateEmail() {
  let errEmail = document.getElementById("errEmail");
  let email = document.getElementById("email").value;
  // let regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email.match(regexEmail)) {
    form3.classList.add("valid");
    errEmail.innerHTML = "Your email is valid";
    errEmail.style.color = "#00ff00";
  } else {
    form3.classList.remove("valid");
    form3.classList.add("invalid");
    errEmail.innerHTML = "Your email is invalid";
    errEmail.style.color = "#ff0000";
  }

  if (email == "") {
    form3.classList.remove("valid");
    form3.classList.remove("invalid");
    errEmail.innerHTML = "";
    errEmail.style.color = "#00ff00";
  }
}

// email.addEventListener("input", function () {
//   let valueWithoutSpaces = this.value.replace(/\s/g, "");
//   this.value = valueWithoutSpaces;
// });
//EMAIL

//USERNAME
username.addEventListener("input", function () {
  let regexUsername = /^[\w\-]+$/;
  let valueWithoutSpaces = this.value.replace(/\s/g, "");
  this.value = valueWithoutSpaces;
  if (!this.value.match(regexUsername)) {
    this.value = this.value.replace(/[^\w\-]/g, "");
  }
  if (this.value.length > 30) {
    this.value = this.value.slice(0, 30);
  }
});
//USERNAME

//PASSWORD
function strength(password) {
  let i = 0;
  if (password.length > 6) {
    i++;
  }
  if (password.length > 10) {
    i++;
  }
  if (/[A-Z]/.test(password)) {
    i++;
  }
  if (/[0-9]/.test(password)) {
    i++;
  }
  if (/[A-Za-z0-8]/.test(password)) {
    i++;
  }
  return i;
}
function removeFontFamily() {
  if (!password.value) {
    password.style.fontFamily = "Bebas Neue";
  } else {
    password.style.fontFamily = "initial";
  }
}
password.addEventListener("input", function () {
  let password = document.querySelector("#password").value;

  let sth = strength(password);

  if (password.value === "none") {
  }
  if (sth <= 0) {
    stage3.classList.remove("weak");
    stage3.classList.remove("medium");
    stage3.classList.remove("strong");
  } else if (sth >= 1 && sth <= 2) {
    stage3.classList.add("weak");
    stage3.classList.remove("medium");
    stage3.classList.remove("strong");
  } else if (sth >= 2 && sth <= 4) {
    stage3.classList.remove("weak");
    stage3.classList.add("medium");
    stage3.classList.remove("strong");
  } else {
    stage3.classList.remove("weak");
    stage3.classList.remove("medium");
    stage3.classList.add("strong");
  }
});

const updateRequirement = (id, valid) => {
  const requirement = document.getElementById(id);
  if (valid) {
    requirement.classList.add("valid");
  } else {
    requirement.classList.remove("valid");
  }
};
let requirement = document.querySelectorAll(".requirement");
password.addEventListener("focus", function () {
  requirement.forEach(function (requirement) {
    requirement.style.display = "block";
  });
});
password.addEventListener("blur", function () {
  requirement.forEach(function (requirement) {
    requirement.style.display = "none";
  });
});
password.addEventListener("input", (event) => {
  const value = event.target.value;

  updateRequirement("length", value.length >= 8 || value.length <= 72);
  updateRequirement("lowercase", /[a-z]/.test(value));
  updateRequirement("uppercase", /[A-Z]/.test(value));
  updateRequirement("number", /\d/.test(value));
  updateRequirement("characters", /[#.?!@$%^&*-]/.test(value));
});
//PASSWORD

//ошибка
// register.addEventListener("click", function (event) {
//   event.preventDefault();
//   loginForm.style.display = "none";
//   signupForm.style.display = "flex";
// });
