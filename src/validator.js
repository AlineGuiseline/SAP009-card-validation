const validator = {

  //      1- Receber os dados do usuário
  isValid (cardNumber) {
    const newArray = []; //Cria um array vazio para receber os dados que o usuário colocar
    for(let i = 0; i < cardNumber.length; i++) {
      const numCard = parseInt(cardNumber[i]); //O parseInt analisa a string e retorna um número, o que evita erros de concatenação
      newArray.push(numCard) //O .push adiciona novos elementos no final do array; ou seja, os números que serão recebidos no input serão alinhados aqui
    }

    //     2- Inverter a ordem dos números

    const cardNumReverse = newArray.reverse(); //Vamos criar uma nova variável para receber a string, que será revertida pelo .reverse()

    //      3- Encontrar os números que estão nas posições pares
    //      4- Somar esses números
    //       4.1- Se a soma der um número maior do que 9, pegar esse resultado e subtrair 9

    for (let i = 0; i < cardNumReverse.length; i++) {
      if ((i + 1) % 2 === 0) { //Esse i+1 vai dizer ao JS que ele precisa começar do segundo elemento (se colocarmos só i % 2 === 0, ele vai começar do primeiro)
        cardNumReverse[i] = cardNumReverse[i] * 2; //Agora ele vai pegar cada posição par (indicada pelo [i]) e vai multiplicar por 2
      }
      if (cardNumReverse[i] >= 10) {
        cardNumReverse[i] = cardNumReverse[i] - 9; //Se o número for maior ou igual a 10, ele vai subtrair 9
      }
    }
      
    //      5- Somar todos os números
    //      5.1- Verificar se o resultado é um múltiplo de 10; se for, o cartão é válido e se não, o cartão é inválido
      
    let finalSum = 0
    for (let i = 0; i < cardNumReverse.length; i++) { //Vamos reutilizar a const cardNumReverse que está "guardando" o array invertido
      finalSum = finalSum + cardNumReverse[i]
    }
      
    if (finalSum % 10 === 0) {
      return true
    } else {
      return false
    }
  },

  maskify (cardNumber){ //Método similar ao do isValid
    return cardNumber.replace(/.(?=.{4})/g, "#") //Pesquisando sobre como mascarar os dígitos encontrei o conceito de RegEx (esse já estava pronto), que são padrões usados para selecionar combinações de caracteres em uma string
  }
}

export default validator;