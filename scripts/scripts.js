// calculator section

let calculatorButtonElement = document.getElementById("caculator-button");

function calculateSum() {
  let inputElement = document.querySelector("input");
  let inputElementValue = inputElement.value;
  let calcultedNumberElement = document.getElementById("Calculated-number");

  let totalNumber = 0;
  for (let i = 0; i < inputElementValue; i++) {
    totalNumber += i;
  }

  calcultedNumberElement.textContent = totalNumber;
  calcultedNumberElement.style.display = "block";
}

calculatorButtonElement.addEventListener("click", calculateSum);

//highlight section

const highlightButtonElement = document.querySelector("#highlight-button");
const anchorElements = document.getElementsByClassName("highlighted-anchor");

function addHighlightColorToAchor() {
  for (const achorElement of anchorElements) {
    achorElement.classList.add("highlighted-anchor-tags");
  }
}

highlightButtonElement.addEventListener("click", addHighlightColorToAchor);

//display dumy data

const displayDataButton = document.getElementById("display-button");

const listDummyData = document.querySelector("#display-data ul");

const dataObject = {
  "First-Name": "Max",
  "Last-Name": "Schwarzmuller",
  Age: "32",
};

function displayDumyData() {
  listDummyData.innerHTML = "";
  for (const key in dataObject) {
    const newInnerElement = document.createElement("li");
    const outPutText = key.toUpperCase() + ": " + dataObject[key];
    newInnerElement.textContent = outPutText;
    listDummyData.append(newInnerElement);
  }
}
displayDataButton.addEventListener("click", displayDumyData);

//dice problem

const rollDiceButton = document.getElementById("roll-the-dice");

function rollTheDice() {
  const diceInputButton = document.querySelector("#dice-input");

  const rollsListItems = document.getElementById("Rolls");

  const paragraghElement = document.getElementById("rolls-paragrapgh");
  const targetNumber = diceInputButton.value;
  rollsListItems.innerHTML = "";
  let finalResult = 0;
  let i = 0;
  while (finalResult != targetNumber) {
    const newListItemElement = document.createElement("li");
    i++;
    const randomNumber = Math.random();
    finalResult = Math.floor(randomNumber * 6) + 1;
    const outPutText = "Roll " + i + ": " + finalResult;
    newListItemElement.textContent = outPutText;
    rollsListItems.append(newListItemElement);
  }
  paragraghElement.textContent =
    "It took you " + i + " rolls to roll a " + targetNumber;
}

rollDiceButton.addEventListener("click", rollTheDice);
