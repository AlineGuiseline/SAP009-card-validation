import validator from './validator.js';

const btnCard = document.getElementById("btnValidate"); //Vai pegar o botão
const alertCard = document.getElementById("cardResult"); //Vai pegar o parágrafo vazio abaixo do botão

btnCard.addEventListener('click', cardValidator);

function cardValidator() {
  const creditCardNumber = document.getElementById("number").value; //Vai pegar o valor do input do número do cartão
  const finalResult = validator.isValid(creditCardNumber); //Vai linkar com a "fórmula" usada no validator.js
  const maskedNumbers = validator.maskify(creditCardNumber) //Também vai linkar com a fórmula usada no validator.js

  if (creditCardNumber === "") {
    return alertCard.innerText = "Por favor, digite o número do seu cartão."; //O .innerText vai inserir um texto ao parágrafo vazio
  } else if (creditCardNumber.length <= 13) {
    return alertCard.innerText = "Ops. Faltam alguns dígitos no número do seu cartão. Favor verificar.";
  } else if (finalResult === true) {
    return alertCard.innerText = "Oba!! O seu cartão de número " + maskedNumbers + " está válido e nós prosseguiremos com a sua compra ❤";
  } else {
    return alertCard.innerText = "Infelizmente, o seu cartão de número " + maskedNumbers + " não está válido. Favor verificar.";
  }
}

const cardNumber = document.getElementById("number")
const cardName = document.getElementById("name")
const cardExpiry = document.getElementById("expiry")
const cardCVV = document.getElementById("cvv")

cardNumber.addEventListener("keyup", cloneCardNumber);
cardName.addEventListener("keyup", cloneCardName);
cardExpiry.addEventListener("keyup", cloneCardExpiry);
cardCVV.addEventListener("keyup", cloneCardCVV);


function cloneCardNumber() {
  const value = document.getElementById("number").value;
  const mask = validator.maskify(value);

  document.getElementById("card-number").value = mask;
}

function cloneCardName() {
  const value = document.getElementById("name").value

  document.getElementById("card-name").value = value
}

function cloneCardExpiry() {
  const value = document.getElementById("expiry").value

  document.getElementById("card-expiry").value = value
}

function cloneCardCVV() {
  const value = document.getElementById("cvv").value

  document.getElementById("card-cvv").value = value
}

console.log(validator);