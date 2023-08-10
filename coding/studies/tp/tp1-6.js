function calculadora() {
  let counter = 0;
let primeiroNumero = number();
let segundoNumero = number();
let ops = ["adição", "subtração", "divisão", "multiplicação"];
let op = "";
let result = operation();

function number() {
  let num;
  if (counter === 0) {
    num = prompt("Digite um número");
    counter++;
  } else {
    num = prompt("Digite outro número");
    counter = 0;
  }

  let convertedNum = num.match(/[0-9]/g);

  if (!convertedNum) {
    alert("Você digitou um valor inválido. Por favor, digite um número.");
    counter = 0;
    return number();
  } else {
    return Number(convertedNum.join(""));
  }
}

function operation() {
  op = prompt("Que tipo de operação você quer realizar?");
  if (ops.indexOf(op) < 0) {
    alert(
      "Você digitou um valor inválido, eu só posso realizar adição, subtração, divisão e multiplicação. Ps. Escreve certinho pq se não eu não entendo u.u"
    );
    return operation();
  } else {
    if (op == "adição") {
      return primeiroNumero + segundoNumero;
    } else if (op == "subtração") {
      return primeiroNumero - segundoNumero;
    } else if (op == "divisão") {
      return primeiroNumero / segundoNumero;
    } else if (op == "multiplicação") {
      return primeiroNumero * segundoNumero;
    }
  }
}

alert(`O resultado da ${op} entre ${primeiroNumero} e ${segundoNumero} é ${result}`);
return calculadora()
}

calculadora()