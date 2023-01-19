const validator = {

  
}

export default validator;

//     1- Inverter a ordem dos números
const meuArray = [4,1,3,7,8,9,4,7,1,1,7,5,5,9,0,4];
const meuArrayInvertido = meuArray.slice(0).reverse(); //O .slice(0) vai "clonar" o array todo (desde a posição 0) e o .reverse() vai inverter a ordem

//      2- Encontrar os números que estão nas posições pares
//      3- Somar esses números
//       3.1- Se a soma der um número maior do que 9, pegar esse resultado e subtrair 9

const cardNumReverse = meuArrayInvertido //Vamos criar uma nova variável, mas vamos "guardar" nela o nosso array invertido

for (let i = 0; i < cardNumReverse.length; i++) {
  if ((i + 1) % 2 === 0) { //Esse i+1 vai dizer ao JS que ele precisa começar do segundo elemento (se colocarmos só i % 2 === 0, ele vai começar do primeiro)
    cardNumReverse[i] = cardNumReverse[i] * 2; //Agora ele vai pegar cada posição par (indicada pelo [i]) e vai multiplicar por 2
  }
  if (cardNumReverse[i] >= 10) {
    cardNumReverse[i] = cardNumReverse[i] - 9; //Se o número for maior ou igual a 10, ele vai subtrair 9
  }
}

//      4- Somar todos os números
//      4.1- Verificar se o resultado é um múltiplo de 10; se for, o cartão é válido e se não, o cartão é inválido

let finalSum = 0
for (let i = 0; i < cardNumReverse.length; i++) { //Vamos reutilizar a const cardNumReverse que está "guardando" o array invertido
    finalSum = finalSum + cardNumReverse[i]
}

if (finalSum % 10 === 0) {
    console.log('Cartão válido')
} else {
    console.log('Cartão inválido')
}

console.log(finalSum)