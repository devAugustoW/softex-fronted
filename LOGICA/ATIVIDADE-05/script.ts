/* 1. Descreva para que serve o comando "for".

 O comando for em JavaScript é utilizado para repetir um bloco de código um determinado número de vezes.
*/

/* 2. Como o comando "for" define o início de uma repetição?

  O comando for em JavaScript serve como um mecanismo para iniciar e controlar um loop, ou seja, uma sequência de instruções que se repetem enquanto uma determinada condição for verdadeira.

  for (inicialização; condição; incremento) {
    
  }

  - Inicialização: Define uma variável e atribui um valor inicial a ela. Essa variável geralmente serve como um contador para controlar o número de repetições.

  - Condição: É uma expressão que é verificada antes de cada iteração. Se a condição for verdadeira, o bloco de código dentro do loop é executado.

  - Incremento: Atualiza o valor da variável de inicialização após cada iteração, geralmente incrementando-a para aproximar a condição de ser falsa e encerrar o loop.
*/

/*3. Como o comando "for" determina o fim da execução?
 
  O comando for em JavaScript serve como um mecanismo para iniciar e controlar um loop, ou seja, uma sequência de instruções que se repetem enquanto uma determinada condição for verdadeira.

  for (inicialização; condição; incremento) {
    
  }

  - Inicialização: Define uma variável e atribui um valor inicial a ela. Essa variável geralmente serve como um contador para controlar o número de repetições.

  - Condição: É uma expressão que é verificada antes de cada iteração. Se a condição for verdadeira, o bloco de código dentro do loop é executado.

  - Incremento: Atualiza o valor da variável de inicialização após cada iteração, geralmente incrementando-a para aproximar a condição de ser falsa e encerrar o loop.
*/

// 4. Como ocorre a alteração do valor em cada repetição dentro da estrutura de repetição "for"?
// Com o incremento.

// 5. Implemente o código do slide de número 18.
for (let i = 0; i < 10; i++) {
  console.log("Viva a vida!");
}

// 7. Implemente o código do slide de número 36.
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    break;
  }

  console.log(i);
}

// 8. Implemente o código do slide de número 38.
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  }

  console.log(i);
}

// 9.Implemente o código do slide de número 44.
let nomes = ["joao", "Paulo", "pedro", "gustavo", "maria"];

for (let nome of nomes) {
  console.log(nome);
}

// 10.Faça um programa que exiba os números de 1 a 10 em ordem crescente.
for (let contador = 1; contador <= 10; contador++) {
  console.log(contador);
}

// 11. Crie um programa que exiba os números de 10 a 1 em ordem decrescente.
for (let c = 10; c > 0; c--) {
  console.log(c);
}

// 12.  Elabore um programa que calcule a soma dos números de 1 a 100.
function soma1a100() {
  let soma = 0;
  for (let i = 1; i <= 100; i++) {
    soma += i;
  }
  return soma;
}

let resultado = soma1a100();
console.log(`A soma dos números de 1 a 100 é: ${resultado}`);

// 13. Desenvolva um programa que exiba todos os números pares de 1 a 50.
for (let n = 1; n <= 50; n++) {
  if (n % 2 === 0) {
    console.log(n);
  }
}

// 14. Faça um programa que calcule o produto dos números de 1 a 5.
function produto() {
  let produto = 0;

  for (let numero = 0; numero <= 5; numero++) {
    produto += numero;
  }
  return produto;
}

let result = produto();
console.log(`o produto dos números de 1 a 5 é :${result}`);

// 15. Crie um programa que exiba a tabuada do 7. */
for (let tab = 0; tab <= 10; tab++) {
  let resultado = 7 * tab;
  console.log(`7 x ${tab} = ${resultado}`);
}

// 16. Elabore um programa que calcule a média de 5 notas digitadas pelo usuário.
let notas: number[] = [];

for (let i = 0; i < 5; i++) {
  let nota = Number(prompt("Digite a nota " + (i + 1) + ":"));
  notas.push(nota);
}

let soma = 0;

for (let i = 0; i < notas.length; i++) {
  soma += notas[i];
}

let media = soma / notas.length;

console.log("A média das notas é:", media);

// 17. Desenvolva um programa que exiba todos os múltiplos de 3 no intervalo de 1 a 50.
for (let n = 1; n <= 50; n++) {
  if (n % 3 === 0) {
    console.log(n);
  }
}

// 18. Crie um programa que leia 10 números do usuário e exiba o maior e o menor valor digitado.*/
let maior = 0;
let menor = 0;

for (let i = 0; i < 10; i++) {
  let num = Number(prompt("Digite um número:"));
  if (!isNaN(num)) {
    maior = Math.max(maior, num);
    menor = Math.min(menor, num);
  }
}

console.log(`O maior número é ${maior} e o menor número é ${menor}.`);

// 19. Faça um programa que exiba os números ímpares de 1 a 100.
for (let n1 = 1; n1 <= 100; n1++) {
  if (n1 % 2 != 0) {
    console.log(n1);
  }
}

/*20 .Crie um programa que leia 5 notas de alunos e exiba quantos deles foram aprovados (nota maior ou igual a 7). */
let notaz: number[] = [];

for (let c = 0; c <= 4; c++) {
  let notaInserida = Number(prompt("Digite sua nota"));

  if (notaInserida >= 7) {
    notaz.push(notaInserida);
  }
}
console.log(`somente ${notas.length} aluno(s) foram aprovados `);

// 21. Faça um programa que exiba a soma dos dígitos de um número inteiro fornecido pelo usuário.
let numberInserido = Number(prompt("Digite um número inteiro:"));

let digitos = numberInserido.toString().split("");

let sum = 0;
for (let digito of digitos) {
  sum += Number(digito);
}
console.log(`A soma dos dígitos de ${numberInserido} é ${sum}.`);

// 22. Elabore um programa que leia um número inteiro e exiba todos os seus divisores.
let bic = Number(prompt("Digite um número inteiro:"));

for (let i = 1; i <= bic; i++) {
  if (bic % i === 0) {
    console.log(i);
  }
}

// 23. Desenvolva um programa que calcule a média de altura de 5 pessoas.
let alturas: number[] = [];
let somaAlturas: number = 0;
let mediaAlturas = somaAlturas / alturas.length;

for (let i = 0; i < 5; i++) {
  let altura = Number(
    prompt("Digite a altura da pessoa " + (i + 1) + " em metros:")
  );
  alturas.push(altura);
}

for (let i = 0; i < alturas.length; i++) {
  somaAlturas += alturas[i];
}
console.log("A média das alturas é:", mediaAlturas, "metros");

// 24. Faça um programa que exiba os números de 1 a 100, substituindo os múltiplos de 3 pela palavra "Fizz" e os múltiplos de 5 pela palavra "Buzz". Para os números que são múltiplos de ambos, utilize a palavra "FizzBuzz".
for (let i = 1; i <= 100; i++) {
  let output = "";
  if (i % 3 === 0) {
    output += "Fizz";
  }
  if (i % 5 === 0) {
    output += "Buzz";
  }
  console.log(output || i);
}

// 26. Faça um programa que leia um número inteiro e exiba o número invertido. Por exemplo, se o número lido for 123, o programa deve exibir 321.
const numero = Number(prompt("Digite um número inteiro:"));
const numeroInvertido = Number(numero.toString().split("").reverse().join(""));
console.log(`O número invertido é: ${numeroInvertido}`);
