/* 1. Enumere as diferenças entre os comandos "for" e "while".*/

/*
FOR - 
1 -> O comando for é composto por três partes principais: inicialização, condição e incremento.
2 -> É ideal para quando você sabe o número exato de iterações que deseja executar.
3 -> Todas as partes do loop (inicialização, condição e incremento) são definidas em uma única linha

WHILE -
1 ->  só possui uma condição que é verificada antes de cada iteração
2 ->  É mais adequado para situações em que o número de iterações não é conhecido antecipadamente e depende de uma condição que pode mudar durante a execução do loop.
3 ->  A condição é verificada antes de cada iteração, e o loop continua enquanto a condição for verdadeira.
*/

/* 2. Descreva em quais circunstâncias os comandos "for" e "while" devem ser empregados.*/

/*
FOR -> deve ser empregado quando se sabe o número exato de iterações que deseja executar.
WHILE ->deve ser empregado quando não se sabe o número exato de iterações que deseja executar.*/

/* 3. Implemente o código do slide de número 9. */
let i = 0;
while (i < 10) {
  console.log("Testando uma frase!");
  i++;
}

/* 4. Implemente o código do slide de número 16.*/
let y = 465484133;
while (y > 10) {
  console.log(y);
  y /= 35;
}

/* 5. Implemente o código do slide de número 26. */
let k = 0;
do {
  console.log(k);
  k++;
} while (k < 5);

/* 6. Escreva um programa que exiba os números de 1 a 10 em ordem crescente utilizando o while.*/
let c: number = 1;
while (c <= 10) {
  console.log(c);
  c++;
}

/* 7. Crie um programa que exiba os números de 10 a 1 em ordem decrescente utilizando o while.*/
let co: number = 10;
while (co >= 1) {
  console.log(co);
  co--;
}

/* 8. Elabore um programa que calcule a soma dos números de 1 a 100 utilizando o while. */
let cou: number = 1;
let soma: number = 0;

while (cou <= 100) {
  console.log(soma);
  soma += cou;
  cou++;
}

/* 9. Faça um programa que calcule o produto dos números de 1 a 5 utilizando o while.*/
let coun: number = 1;
let produto: number = 1;

while (coun <= 5) {
  produto = coun * produto;
  coun++;
}

/* 10. Crie um programa que exiba a tabuada do 9 utilizando o while. */
let count: number = 0;
const tab: number = 9;
let r: number = 0;

while (count <= 10) {
  r = count * tab;
  console.log(`9x${count}=${r}`);
  count++;
}

/* 11. Crie um programa que leia uma sequência de números inteiros do usuário e exiba o maior e o menor valor digitado. O programa deve parar de ler quando o usuário digitar o número 0
utilizando o while. */
let numeroDigitado = -1;
let numerosDigitados: number[] = [];
let maiorNumero = Number(" ");
let menorNumero = Number(" ");

do {
  numeroDigitado = Number(prompt("Digite números.Digite 0 se quiser parar"));
  numerosDigitados.push(numeroDigitado);

  if (numeroDigitado == 0) {
    numerosDigitados.pop();
  }

  console.log(numerosDigitados);

  maiorNumero = Math.max(...numerosDigitados);
  menorNumero = Math.min(...numerosDigitados);
} while (numeroDigitado !== 0);
console.log(`O maior número é ${maiorNumero} e o menor é ${menorNumero} `);

/* 12. Crie um programa que leia uma sequência de números inteiros do usuário e exiba a média dos números digitados. O programa deve parar de ler quando o usuário digitar o número -1 utilizando o while. */
let digitados: number[] = [];
let digitado: number = -2;
let sum: number = 0;
let avg: number = 0;

do {
  digitado = Number(
    prompt('Digite quantos números inteiros quiser.Digite "-1" para encerrar')
  );
  if (digitado !== -1) {
    digitados.push(digitado);
    sum += digitado;
  } else {
    digitado = 0;
    digitados.push(digitado);
    digitados.pop();
    sum += digitado;
    digitado = -1;
  }

  avg = sum / digitados.length;
} while (digitado !== -1);

/* 13. Faça um programa que leia um número inteiro e exiba a soma dos seus dígitos elevados ao cubo utilizando o while.*/
let digitos = String(
  prompt("digite um número inteiro com no mínimo dois digitos")
);
let digitosDivididos = digitos.split("");
let somaDigitos = 0;
let contando = 0;

while (contando < digitosDivididos.length) {
  let digitosConvertidos = Number(digitosDivididos[contando]);
  somaDigitos += digitosConvertidos * digitosConvertidos * digitosConvertidos;
  contando++;
}
console.log(somaDigitos);

/* 14. Faça um programa que exiba os números ímpares de 1 a 100 utilizando o while.*/
let cc = 1;

while (cc < 100) {
  if (cc % 2 != 0) {
    console.log(cc);
  }

  cc++;
}

/* 15. Desenvolva um programa que exiba todos os múltiplos de 3 no intervalo de 1 a 50 utilizando o while. */
let ccc = 1;

while (ccc < 50) {
  if (ccc % 3 == 0) {
    console.log(ccc);
  }
  ccc++;
}

/* 15. Desenvolva um programa que exiba todos os múltiplos de 3 no intervalo de 1 a 50 utilizando o while. */
let zz = 1;

while (zz < 50) {
  if (zz % 3 == 0) {
    console.log(zz);
  }
  zz++;
}

/* 17. Elabore um programa que leia uma sequência de números inteiros do usuário e determine quantos números pares foram digitados antes do primeiro número ímpar. O programa deve pararde ler quando o usuário digitar o número 0 utilizando o while.*/
let inteiro = -1;
let contaPar = 0;

do {
  inteiro = Number(prompt("Digite um número.Digite 0 se quiser parar"));

  if (inteiro === 0) {
    break;
  }

  if (inteiro % 2 == 0) {
    contaPar++;
  } else {
    break;
  }
} while (inteiro != 0);
{
  console.log(`Digitou ${contaPar} pares antes do primeiro ímpar`);
}

/* 18. Crie um programa que leia uma sequência de números inteiros do usuário e exiba quantos números pares e quantos números ímpares foram digitados. O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while. */
let nDigitado = -1;
let numerosPares = 0;
let numerosImpares = 0;

while (nDigitado !== 0) {
  nDigitado = Number(
    prompt(
      'Digite uma sequencia de números inteiros.Envie "0" para encerrar a exec.'
    )
  );

  if (nDigitado % 2 == 0) {
    numerosPares++;
  } else {
    numerosImpares++;
  }
}
alert(
  "Foram digitados " +
    numerosPares +
    " numeros pares e " +
    numerosImpares +
    "numeros impares"
);

/* 19. Faça um programa que leia uma sequência de números inteiros do usuário  e exiba quantos números são divisíveis por 2, quantos são divisíveis por 3 e quantos são divisíveis por 5. O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while. */
let numDig = -1;
let div2 = 0;
let div3 = 0;
let div5 = 0;

while (numDig !== 0) {
  numDig = Number(
    prompt("Digite uma sequencia de números inteiros.0 para encerrar execução")
  );
  if (numDig == 0) {
    break;
  } else if (numDig % 2 == 0) {
    div2++;
  }

  if (numDig % 3 == 0) {
    div3++;
  }

  if (numDig % 5 == 0) {
    div5++;
  }
}
alert(
  div2 +
    "  divisível(is) por 2 ," +
    div3 +
    " divisível(is) por 3 ," +
    div5 +
    " São divisível(is) por 5"
);

/* 20. Desenvolva um programa que leia uma sequência de números inteiros do usuário e exiba a média dos números divisíveis por 3. O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.*/
let nd = -1;
let divisiveis3: number[] = [];
let somad3 = 0;
let mediad3 = 0;

while (nd !== 0) {
  nd = Number(prompt("Digite números.Digite 0 para encerrar a execução"));

  if (nd == 0) {
    break;
  } else if (nd % 3 == 0) {
    divisiveis3.push(nd);
    somad3 += nd;
  }
}
mediad3 = somad3 / divisiveis3.length;
console.log(mediad3);

/* 21. Faça um programa que leia uma sequência de números inteiros do usuário  e exiba quantos números possuem mais de três dígitos.  O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while. */
let numberDigitado = -1;
let ct = 0;

while (numberDigitado !== 0) {
  numberDigitado = Number(
    prompt("Digite números. Digite 0 para encerrar a execução")
  );

  if (numberDigitado !== 0 && Math.abs(numberDigitado) > 999) {
    ct++;
  }
}
console.log(`Quantidade de números com mais de três dígitos: ${ct}`);

/* 22. Desenvolva um programa que leia uma sequência de números inteiros do usuário e exiba a média dos números que estão entre 50 e 100. O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.*/
let insertNumber = -1;
let intervalSum = 0;
let intervalAvg = 0;
let intervalArray: number[] = [];

while (insertNumber !== 0) {
  insertNumber = Number(
    prompt("Digite números. Digite 0 para encerrar a execução")
  );

  if (insertNumber == 0) {
    break;
  } else if (insertNumber > 50 && insertNumber < 100) {
    intervalArray.push(insertNumber);
    console.log("Digitou entre 50 e 100");
    intervalSum += insertNumber;
  }
  intervalAvg = intervalSum / intervalArray.length;
}
console.log(
  `a média dos números digitados que estão entre 50 e 100 é :  ${intervalAvg}`
);

/* 23. Elabore um programa que leia uma sequência de números inteiros do usuário e exiba o menor valor digitado que seja positivo e ímpar.  O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while. */
let numero_usuario = -1;
let array: number[] = [];
let menor_valor = 0;

while (numero_usuario !== 0) {
  numero_usuario = Number(
    prompt("Digite números. Digite 0 para encerrar a execução")
  );

  if (numero_usuario == 0) {
    break;
  } else if (numero_usuario > 0 && numero_usuario % 2 !== 0) {
    array.push(numero_usuario);
  }
}

menor_valor = Math.min(...array);
console.log(`O menor valor digitado positivo e ímpar é: ${menor_valor}`);

/* 24. Faça um programa que leia uma sequência de números inteiros do usuário e exiba quantos números são pares e quantos números são ímpares entre o primeiro e o último número digitado. O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.*/
let iDgit = -1;
let Par = 0;
let Impar = 0;

while (iDgit !== 0) {
  if (iDgit == 0) {
    break;
  } else if (iDgit % 2 == 0) {
    Par++;
  } else {
    Impar++;
  }
}
console.log(`Foram digitados ${Par} pares e ${Impar} ímpares`);