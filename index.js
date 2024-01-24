"use-strict";

document.addEventListener("DOMContentLoaded", function () {
  const characters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "{",
    "[",
    "}",
    "]",
    ",",
    "|",
    ":",
    ";",
    "<",
    ">",
    ".",
    "?",
    "/",
  ];

  let numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  let symbolArray = [
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "{",
    "[",
    "}",
    "]",
    ",",
    "|",
    ":",
    ";",
    "<",
    ">",
    ".",
    "?",
    "/",
  ];

  const dis1of1El = document.querySelector(".dis1--1");
  const dis2of1El = document.querySelector(".dis2--1");
  const dis1of2El = document.querySelector(".dis1--2");
  const dis2of2El = document.querySelector(".dis2--2");
  let copy = "";

  const btnPass1 = document.querySelector(".btn1");
  const btnPass2 = document.querySelector(".btn2");

  let valueOfPass = 15;

  let inputvalue = document.querySelector(".input");
  let input2value = document.querySelector(".input-2");

  let numToggle = document.querySelector("#num-toggle");
  let symbolToggle = document.querySelector("#symbol-toggle");
  let num2Toggle = document.querySelector("#num2-toggle");
  let symbol2Toggle = document.querySelector("#symbol2-toggle");

  let password = {
    valueOfPass1: 15,
    toggleNumOption1: "on",
    toggleSymbolOption1: "on",
    valueOfPass2: 15,
    toggleNumOption2: "on",
    toggleSymbolOption2: "on",
  };

  function genPass(value, num, symbol) {
    let message = "";
    let i = 0;
    while (message.length < value) {
      i++;
      let k = Math.floor(Math.random() * characters.length);
      if (
        num === "off" &&
        symbol === "on" &&
        numArray.includes(characters[k])
      ) {
        continue;
      } else if (
        num === "on" &&
        symbol === "off" &&
        symbolArray.includes(characters[k])
      ) {
        continue;
      } else if (
        num === "off" &&
        symbol === "off" &&
        (symbolArray.includes(characters[k]) ||
          numArray.includes(characters[k]))
      ) {
        continue;
      } else {
        message += characters[k];
      }
    }

    return message;
  }

  function copyToClip() {
    navigator.clipboard.writeText(copy);
  }

  let elements = document.querySelectorAll(".dis1, .dis2");
  elements.forEach(function (element) {
    element.addEventListener("mouseover", function () {
      element.setAttribute("data-show-tooltip", "true");

      setTimeout(function () {
        element.setAttribute("data-show-tooltip", "false");
      }, 700);
    });
  });

  elements.forEach(function (ele) {
    ele.addEventListener("click", function () {
      ele.setAttribute("data-tooltip", "copied");
      ele.setAttribute("data-show-tooltip", "true");
      setTimeout(function () {
        ele.setAttribute("data-tooltip", "Click to save");
        ele.setAttribute("data-show-tooltip", "false");
      }, 700);
    });
  });

  inputvalue.addEventListener("input", function () {
    password.valueOfPass1 = inputvalue.value;
  });

  numToggle.addEventListener("change", function () {
    password.toggleNumOption1 = numToggle.value;
  });

  symbolToggle.addEventListener("change", function () {
    password.toggleSymbolOption1 = symbolToggle.value;
  });

  btnPass1.addEventListener("click", function () {
    dis1of1El.textContent = genPass(
      password.valueOfPass1,
      password.toggleNumOption1,
      password.toggleSymbolOption1
    );
    dis2of1El.textContent = genPass(
      password.valueOfPass1,
      password.toggleNumOption1,
      password.toggleSymbolOption1
    );
  });

  dis1of1El.addEventListener("click", function () {
    copy = dis1of1El.textContent;

    copyToClip();
  });
  dis2of1El.addEventListener("click", function () {
    copy = dis2of1El.textContent;

    copyToClip();
  });
  dis1of2El.addEventListener("click", function () {
    copy = dis1of2El.textContent;

    copyToClip();
  });
  dis2of2El.addEventListener("click", function () {
    copy = dis2of2El.textContent;

    copyToClip();
  });

  input2value.addEventListener("input", function () {
    password.valueOfPass2 = input2value.value;
  });
  num2Toggle.addEventListener("change", function () {
    password.toggleNumOption2 = num2Toggle.value;
  });
  symbol2Toggle.addEventListener("change", function () {
    password.toggleSymbolOption2 = symbol2Toggle.value;
  });

  btnPass2.addEventListener("click", function () {
    dis1of2El.textContent = genPass(
      password.valueOfPass2,
      password.toggleNumOption2,
      password.toggleSymbolOption2
    );
    dis2of2El.textContent = genPass(
      password.valueOfPass2,
      password.toggleNumOption2,
      password.toggleSymbolOption2
    );
  });
});
