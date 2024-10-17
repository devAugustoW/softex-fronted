// 1. Utilizando a função "console.log", verifique se dois números são iguais utilizando o operador de igualdade ("==").
console.log(5 == 5); 
// console.log(5 == 10);


// 2. Utilizando a função "console.log", verifique se dois números são diferentes utilizando o operador de diferença ("!=").
console.log(5 != 5); 
// console.log(5 != 10);


// 3. Utilizando a função "console.log", verifique se um número é maior que outro utilizando o operador de maior que (">").
console.log(10 > 5); 
console.log(5 > 10);


// 4. Utilizando a função "console.log", verifique se um número é menor que outro utilizando o operador de menor que ("<").
console.log(5 < 10); 
console.log(10 < 5);


// 5. Utilizando a função "console.log", verifique se um número é maior ou igual a outro utilizando o operador de maior ou igual a (">=").
console.log(10 >= 5); 
console.log(5 >= 10);


// 6. Utilizando a função "console.log", verifique se um número é menor ou igual a outro utilizando o operador de menor ou igual a ("<=").
console.log(5 <= 10); // Saída: true
console.log(10 <= 5);


// 7. Utilizando a função "console.log", verifique se duas condições são verdadeiras utilizando o operador lógico AND ("&&").
let idade = 25;
let possuiCarteira = true;
console.log(idade > 18 && possuiCarteira);


// 8. Utilizando a função "console.log", verifique se pelo menos uma das condições é verdadeira utilizando o operador lógico OR ("||").
let temChocolate = true;
let temDoce = false;
console.log(temChocolate || temDoce);


// 9. Utilizando a função "console.log", negue uma condição utilizando o operador lógico NOT ("!").
let chuva = false;
console.log(!chuva); 


// 10. Utilizando a função "console.log", verifique se um número está dentro de um determinado intervalo, utilizando os operadores lógicos AND e os operadores de comparação (">=" e "<=").
let numero = 15;
let limiteInferior = 10;
let limiteSuperior = 20;
console.log(numero >= limiteInferior && numero <= limiteSuperior); 


// 11. Utilizando a função "console.log", verifique se um número está fora de um determinado intervalo, utilizando os operadores lógicos OR e os operadores de comparação ("<" e ">").
let numeroForaIntervalo: number = 25;
let limiteInferiorZ: number = 10;
let limiteSuperiorY: number = 20;
console.log(numeroForaIntervalo < limiteInferiorZ || numeroForaIntervalo > limiteSuperiorY);


// 12. Utilizando a função "console.log", verifique se um número é positivo, utilizando o operador de maior que (">") e o operador de igualdade ("==") para verificar se o número é maior que zero.
let numeroPositivo = 42;
console.log(numeroPositivo > 0);


// 13. Utilizando a função "console.log", verifique se uma string é vazia, utilizando o operador de igualdade ("==") e o operador de tamanho ("length") para verificar se o tamanho da string é igual a zero.
let stringVazia = "";
console.log(stringVazia.length == 0);


// 14. Utilizando a função "console.log", verifique se uma variável é do tipo booleano, utilizando o operador "typeof" e o operador de igualdade ("==") para verificar se o tipo de dado é igual a "boolean".
let variavelBooleana = true;
console.log(typeof variavelBooleana == "boolean");