import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector(".card").innerHTML = generateRandomNumber();
  document.querySelector(".card").classList.add(generateRandomSuit());
};

let generateRandomNumber = () => {
  let numbers = [
    "A",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);

  return numbers[indexNumbers];
};

let generateRandomSuit = () => {
  let suit = ["diamond", "heart", "club", "spade"];
  let indexSuit = Math.floor(Math.random() * suit.length);

  return suit[indexSuit];
};
