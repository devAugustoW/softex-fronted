// Exercício 1
let n1 = Number(prompt("Digite um número"));

if (n1 > 0) {
  console.log(`${n1} É positivo`);
} else if (n1 === 0) {
  console.log(`${n1} É igual a zero`);
} else {
  console.log(`${n1} É negativo`);
}

// /*2. Crie um programa que receba a idade de uma pessoa e exiba se ela é maior de idade ou menor de idade.*/

function verificarIdade(idade: number): void {
  if (idade >= 18) {
    console.log("Maior de idade");
  } else {
    console.log("Menor de idade");
  }
}

let idade1: number = Number(prompt("Insira sua idade"));
verificarIdade(idade1);

/*3. Desenvolva um programa que leia dois números inteiros e mostre qual deles é o maior, ou se são iguais.*/

let nbr1 = Number(prompt("Insira um número"));
let nbr2 = Number(prompt("Insira outro número"));
if (nbr1 > nbr2) {
  alert(nbr1 + "é maior que" + nbr2);
} else if (nbr2 === nbr1) {
  alert("São iguais");
} else if (nbr2 > nbr1) {
  alert(nbr2 + "é maior que" + nbr1);
} else {
  alert("necessário inserir valor");
}

// 5. Elabore um programa que leia três notas de um aluno e calcule a média. Em seguida, exiba se o aluno está aprovado (média maior ou igual a 7) ou reprovado.

let nota1 = Number(prompt("Digite sua primeira nota"));
let nota2 = Number(prompt("Digite sua segunda nota"));
let nota3 = Number(prompt("Digite sua terceira nota"));
let avg = (nota1 + nota2 + nota3) / 3;
if (avg >= 7) {
  alert("Aluno aprovado");
} else {
  alert("Aluno reprovado");
}

// Exercício 6
function compararNomes(primeiroNome: string, segundoNome: string): void {
  const primeiroNomeCaracteres = primeiroNome.length;
  const segundoNomeCaracteres = segundoNome.length;

  if (primeiroNomeCaracteres > segundoNomeCaracteres) {
    console.log("O primeiro nome possui mais caracteres");
  } else if (segundoNomeCaracteres > primeiroNomeCaracteres) {
    console.log("O segundo nome possui mais caracteres");
  } else {
    console.log("Os nomes possuem o mesmo número de caracteres");
  }
}

const primeiroNome: string = String(prompt("Digite um nome"));
const segundoNome: string = String(prompt("Digite outro nome"));
compararNomes(primeiroNome, segundoNome);

// 7.Desenvolva um programa que leia um caractere e verifique se ele é uma vogal ou uma consoante.
var letra = prompt("escreva uma letra");

switch (letra) {
  case "a":
    alert("Vogal");
    break;
  case "e":
    alert("Vogal");
    break;
  case "i":
    alert("Vogal");
    break;
  case "o":
    alert("Vogal");
    break;
  case "u":
    alert("Vogal");
    break;

  default:
    alert("Consoante");
    break;
}

// 8. Faça um programa que receba três números e os imprima em ordem crescente.
let firstNumber = Number(prompt("Insira um número"));
let secondNumber = Number(prompt("Insira um número"));
let thirdNumber = Number(prompt("Insira um número"));
if (firstNumber <= secondNumber && firstNumber <= thirdNumber) {
  console.log(firstNumber, secondNumber, thirdNumber);
} else if (secondNumber <= firstNumber && secondNumber <= thirdNumber) {
  console.log(secondNumber, firstNumber, thirdNumber);
} else {
  console.log(thirdNumber, firstNumber, secondNumber);
}

/* 9.Elabore um programa que calcule o IMC (Índice de Massa Corporal) de uma pessoa, dado o peso e a altura. Em seguida, exiba se a pessoa está abaixo do peso, com peso normal, com sobrepeso, obesa ou muito obesa. */
let altura = Number(prompt("Digite sua altura"));
let peso = Number(prompt("Digite seu peso"));
let imc = peso / (altura * altura);
let resultado = imc.toFixed(2);
alert(resultado);
if (imc < 18.4) {
  alert("Abaixo do peso");
} else if (imc >= 18.5 && imc < 24.9) {
  alert("Peso normal");
} else if (imc >= 25 && imc < 29.9) {
  alert("Sobrepeso");
} else if (imc >= 30 && imc < 34.9) {
  alert("Obesidade");
} else if (imc >= 35) {
  alert("Muito obeso");
} else {
  alert("Erro");
}

/* 10. Escreva um programa que receba um número de mês (1 a 12) e exiba o nome do mês
correspondente.*/
let nm = Number(prompt("Insira um número"));
switch (nm) {
  case 1:
    console.log("Janeiro");
    break;
  case 2:
    console.log("Fevereiro");
    break;
  case 3:
    console.log("Março");
    break;
  case 4:
    console.log("Abril");
    break;
  case 5:
    console.log("Maio");
    break;
  case 6:
    console.log("Junho");
    break;
  case 7:
    console.log("Julho");
    break;
  case 8:
    console.log("Agosto");
    break;
  case 9:
    console.log("Setembro");
    break;
  case 10:
    console.log("Outubro");
    break;
  case 11:
    console.log("Novembro");
    break;
  case 12:
    console.log("Dezembro");
    break;
  default:
    console.log("Número inválido");
}

/* 11. Desenvolva um programa que leia o salário de um funcionário e calcule o valor do seu aumento.
Para salários superiores a R$ 1.500,00, o aumento deve ser de 10%. Caso contrário, o aumento é de 15%. */
let salario = Number(prompt("Insira aqui o seu salário"));
if (salario > 1.5) {
  let aumento1 = salario * 0.1;
  let salarioAumentado1 = aumento1 + salario;
  alert(salarioAumentado1);
} else {
  let aumento2 = salario * 0.15;
  let salarioAumentado2 = aumento2 + salario;
  alert(salarioAumentado2);
}

// Exercício 12
function verificarDivisibilidade(numero: number): void {
  if (numero % 3 === 0 && numero % 5 === 0) {
    alert("O número é divisível por 3 e por 5 ao mesmo tempo");
  } else {
    alert("O número não é divisível por 3 e por 5 ao mesmo tempo");
  }
}
const numeroInteiro: number = Number(prompt("Escreva um número inteiro"));
verificarDivisibilidade(numeroInteiro);

/* 13.Peça ao usuário que insira o dia da semana (por extenso) e, em seguida, exiba uma mensagem informando se é um dia útil ou um fim de semana. */
type Dia = "domingo" | "segunda" | "terça" | "quarta" | "quinta" | "sexta";

let insertDay: Dia | any = prompt("Escreva o dia da semana por extenso");

switch (insertDay) {
  case "domingo":
    alert("Final de semana");
    break;
  case "segunda":
    alert("Dia útil");
    break;
  case "terça":
    alert("Dia útil");
    break;
  case "quarta":
    alert("Dia útil");
    break;
  case "quinta":
    alert("Dia útil");
    break;
  case "sexta":
    alert("Dia útil");
    break;
  case "sabado":
    alert("Final de semana");
    break;

  default:
    alert("Dia não identificado");
    break;
}

/* 14. Elabore um programa que leia um número inteiro de 1 a 5 e exiba a mensagem "Muito bom", "Bom", "Regular", "Insuficiente" ou "Muito insuficiente", de acordo com o valor lido, utilizando switch/case.*/
let ni = Number(prompt("Escreva um número inteiro de 1 a 5"));
switch (ni) {
  case 1:
    console.log("Muito bom");
    break;
  case 2:
    console.log("Bom");
    break;
  case 3:
    console.log("Regular");
    break;
  case 4:
    console.log("Insuficiente");
    break;
  case 5:
    console.log("Muito insuficiente");
    break;
  default:
    break;
}

/* 14. Peça ao usuário que digite um número entre 1 e 7 e exiba o dia da semana correspondente (1 - Domingo, 2 - Segunda-feira, etc.). */
type Day = 1 | 2 | 3 | 4 | 5 | 6 | 7;

let nDigitado: Day | number = Number(prompt("Digite um número"));

switch (nDigitado) {
  case 1:
    alert("Monday");
    break;
  case 2:
    alert("Sunday");
    break;
  case 3:
    alert("Tuesday");
    break;
  case 4:
    alert("Wednesday");
    break;
  case 5:
    alert("Thursday");
    break;
  case 6:
    alert("Friday");
    break;
  case 7:
    alert("Saturday");
    break;
  default:
    alert("unidentified day");
    break;
}

/* 15. Peça ao usuário que insira a sua idade e verifique se ele é um bebê (0 a 1 ano), criança (1 a 12 anos), adolescente (13 a 18 anos) ou adulto (mais de 18 anos). */
let idade = Number(prompt("Digite sua idade"));
if (idade >= 0 && idade <= 1) {
  alert("Bebê");
} else if (idade > 1 && idade <= 12) {
  alert("Criança");
} else if (idade >= 13 && idade <= 18) {
  alert("Adolescente");
} else if (idade > 18) {
  alert("Adulto");
} else {
  alert("Não foi possível detectar sua faixa etária");
}

/* 16. Solicite ao usuário dois números inteiros e, usando a estrutura switch/case, exiba o resultado da operação escolhida pelo usuário (1 - soma, 2 - subtração, 3 - multiplicação, 4 - divisão). */
let numero1 = Number(prompt("Introduza um número inteiro"));
let numero2 = Number(prompt("Introduza outro número inteiro"));
type Opereção = 1 | 2 | 3 | 4;
let operação: Opereção | number = Number(
  prompt(
    "Escolha a operação: 1-( +soma), 2-( -subtração), 3-(*multiplicação), 4-( /divisão)"
  )
);

switch (operação) {
  case 1:
    let sum = numero1 + numero2;
    alert(sum);
    break;

  case 2:
    let subt = numero1 - numero2;
    alert(subt);
    break;

  case 3:
    let multip = numero1 * numero2;
    alert(multip);
    break;

  case 4:
    let div = numero1 / numero2;
    alert(div);
    break;

  default:
    alert("Não foi possível realizar a operação");
    break;
}
