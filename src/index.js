import validator from './validator.js';

/* O que é, genuinamente, necessário:
1- Pegar o botão
2- Pegar o valor do input (número do cartão)
3- Ligar essas duas coisas com a lógica do validator.js
   O que eu quero tentar (mas, se não der, vou usar um alert):
Linkar as mensagens de válido/inválido ao parágrafo vazio */

const btnCard = document.getElementById("btnValidate"); //Vai pegar o botão
const alertCard = document.getElementById("cardResult"); //Vai pegar o parágrafo vazio abaixo do botão

btnCard.addEventListener('click', cardValidator);

function cardValidator() {
  const numCard = document.getElementById("number").value; //Vai pegar o valor do input do número do cartão
  const finalResult = validator.isValid(numCard); //Vai linkar com a "fórmula" usada no validator.js
  const maskedNumbers = validator.maskify(numCard) //Também vai linkar com a fórmula usada no validator.js

  if (numCard === "") {
    return alertCard.innerText = "Por favor, digite o número do cartão"; //O .innerText vai inserir um texto ao parágrafo vazio
  } else if (finalResult === true) {
    return alertCard.innerText = "Oba!! O seu cartão de número " + maskedNumbers + " está válido e nós prosseguiremos com a sua compra ❤";
  } else {
    return alertCard.innerText = "Infelizmente, o seu cartão de número " + maskedNumbers + " não está válido. Favor verificar";
  }
}

console.log(validator);