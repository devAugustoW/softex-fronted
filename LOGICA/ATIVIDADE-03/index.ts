// 5. Solicite ao usuário seu nome e imprima uma mensagem de boas-vindas na tela.
let nome = prompt('Digite o seu nome: ');
let msgBoasVindas: string = `Seja bem vindo: ${nome}`;
console.log(msgBoasVindas);

// 6. Peça ao usuário que digite sua idade em texto (por exemplo, "18") e converta-a em um número
// inteiro.
let idadeString = prompt('Digite a sua idade: ');
if (idadeString !== null) {
	let idadeNumero = parseInt(idadeString);
	console.log(idadeNumero);
} else console.log('Entrada cancelada.');


// 7. Receba um número inteiro do usuário e converta-o em um número decimal (float).
let numeroString = prompt('Digite um número inteiro: ');
if (numeroString !== null) {
	let numeroInteiro = parseInt(numeroString);
	if (!isNaN(numeroInteiro)) {
		let numeroDecimal = numeroInteiro * 1.0; 
		console.log(numeroDecimal);
	} else console.log('Por favor, digite um número válido.');
} else console.log('Entrada cancelada.');


// 8. Peça ao usuário para digite dois números inteiros e exiba a soma deles.
let primeiroNumero = Number(prompt("Digite o primeiro número inteiro: "));
let segundoNumero = Number(prompt("Digite o segundo número inteiro: "));
let soma = primeiroNumero + segundoNumero;
console.log(`A soma dos números é: ${soma}`);

// 9. Receba um número decimal do usuário e calcule o seu quadrado.<br>
let numeroDecimal = Number(prompt("Digite um número decimal: "));
let quadrado = numeroDecimal * numeroDecimal;
console.log(`O quadrado do número é: ${quadrado}`);

// 10. Peça ao usuário que insira o seu ano de nascimento e, em seguida, exiba a sua idade.<br><br>
let anoNascimento = Number(prompt("Digite o seu ano de nascimento: "));
let anoAtual = new Date().getFullYear();
let idade = anoAtual - anoNascimento;
console.log(`Sua idade é: ${idade}`);


// 11. Peça ao usuário que digite seu primeiro nome e seu sobrenome separadamente. Em seguida, concatene-os em uma única string e exiba o nome completo.<br>
let primeiroNome = prompt("Digite seu primeiro nome: ");
let sobrenome = prompt("Digite seu sobrenome: ");
let nomeCompleto = `${primeiroNome} ${sobrenome}`;
console.log(`Nome completo: ${nomeCompleto}`);


// 12. Solicite ao usuário uma sequência de números separados por espaço e exiba quantos números foram digitados.<br>
let sequencia = prompt("Digite uma sequência de números separados por espaço: ");
let numeros = sequencia ? sequencia.split(" ") : [];
console.log(`Você digitou ${numeros.length} números.`);


// 13. Receba o nome de um animal digitado pelo usuário e exiba uma mensagem informando qual animal foi digitado.<br>
let animal2 = prompt("Digite o nome de um animal: ");
console.log(`Você digitou: ${animal2}`);


// 14. Peça ao usuário que digite o seu nome e o seu sobrenome. Em seguida, exiba o nome completo invertido (sobrenome, nome).<br>
let nome3 = prompt("Digite seu nome: ");
let sobrenomeInvertido = prompt("Digite seu sobrenome: ");
console.log(`Nome completo invertido: ${sobrenomeInvertido}, ${nome3}`);


// 15. Receba uma string digitada pelo usuário e imprima o seu tamanho (número de caracteres).<br>
let texto = prompt("Digite uma string: ");
console.log(`O tamanho da string é: ${texto?.length}`);


// 16. Solicite ao usuário um número inteiro e exiba se ele é par ou ímpar.<br>
let numero = Number(prompt("Digite um número inteiro: "));
let paridade = numero % 2 === 0 ? "par" : "ímpar";
console.log(`O número é ${paridade}.`);


// 17. Receba um número inteiro digitado pelo usuário e verifique se ele é positivo ou negativo.<br>
let numeroInteiro = Number(prompt("Digite um número inteiro: "));
let sinal = numeroInteiro >= 0 ? "positivo" : "negativo";
console.log(`O número é ${sinal}.`);


// 18. Peça ao usuário que insira dois números e exiba o maior deles.<br>
let numero1 = Number(prompt("Digite o primeiro número: "));
let numero2 = Number(prompt("Digite o segundo número: "));
let maior = numero1 > numero2 ? numero1 : numero2;
console.log(`O maior número é: ${maior}`);


// 19. Receba a altura e o peso de uma pessoa digitados pelo usuário. Em seguida, calcule o seu índice de massa corporal (IMC) utilizando a fórmula: IMC = peso / (altura * altura) e exiba o resultado.
let altura = Number(prompt("Digite sua altura em metros: "));
let peso = Number(prompt("Digite seu peso em kg: "));
let imc = peso / (altura * altura);
console.log(`Seu IMC é: ${imc.toFixed(2)}`);


// 20. Peça ao usuário que digite o seu nome e verifique se ele contém mais de 5 caracteres.<br>
let nomeUsuario = prompt("Digite seu nome: ");
if (nomeUsuario && nomeUsuario.length > 5) {
    console.log("Seu nome tem mais de 5 caracteres.");
} else {
    console.log("Seu nome tem 5 ou menos caracteres.");
}


// 21. Solicite ao usuário que insira o seu estado civil e exiba uma mensagem apropriada (por exemplo: "Você é casado(a)", "Você é solteiro(a)", etc.).<br>
let estadoCivil = prompt("Digite seu estado civil (solteiro, casado, etc.): ");
console.log(`Você é ${estadoCivil}.`);


// 22. Receba a base e a altura de um retângulo digitados pelo usuário. Em seguida, calcule a sua área e exiba o resultado.<br>
let base = Number(prompt("Digite a base do retângulo: "));
let alturaRetangulo = Number(prompt("Digite a altura do retângulo: "));
let area = base * alturaRetangulo;
console.log(`A área do retângulo é: ${area}`);


// 23. Peça ao usuário que digite a sua cidade e verifique se ela começa com a letra "S" (ou outra letra de sua escolha).<br>
let cidade = prompt("Digite o nome da sua cidade: ");
if (cidade && cidade.startsWith("S")) {
    console.log("A cidade começa com a letra 'S'.");
} else {
    console.log("A cidade não começa com a letra 'S'.");
}


// 24. Solicite ao usuário que insira dois números decimais e calcule o resto da divisão entre eles.<br>
let numeroDecimal1 = Number(prompt("Digite o primeiro número decimal: "));
let numeroDecimal2 = Number(prompt("Digite o segundo número decimal: "));
let resto = numeroDecimal1 % numeroDecimal2;
console.log(`O resto da divisão é: ${resto}`);


// 25. Solicite ao usuário um número decimal e converta-o em um número inteiro.<br>
let numeroDecimal5 = Number(prompt("Digite um número decimal: "));
let numeroInteiro5 = Math.floor(numeroDecimal5);
console.log(`O número inteiro é: ${numeroInteiro5}`);


// 26. Receba uma string contendo um número inteiro e some 10 a esse número, convertendo-o novamente para uma string antes de exibi-lo.<br>
let numeroString5 = prompt("Digite um número inteiro: ");
if (numeroString5) {
    let numero = parseInt(numeroString5);
    let resultado = numero + 10;
    console.log(`O resultado é: ${resultado.toString()}`);
}


// 27. Solicite ao usuário que digite uma data no formato "dd/mm/aaaa" e extraia o dia, o mês e o ano separadamente, convertendo-os em números inteiros.<br>
let data = prompt("Digite uma data no formato dd/mm/aaaa: ");
if (data) {
    let [dia, mes, ano] = data.split("/").map(Number);
    console.log(`Dia: ${dia}, Mês: ${mes}, Ano: ${ano}`);
}


// 28. Receba o nome de uma cidade do usuário e concatene-o com o nome do estado para formar uma mensagem completa, como "Você mora em [cidade], [estado].".<br>
let cidadeUsuario = prompt("Digite o nome da sua cidade: ");
let estadoUsuario = prompt("Digite o nome do seu estado: ");
console.log(`Você mora em ${cidadeUsuario}, ${estadoUsuario}.`);


// 29. Solicite ao usuário que insira seu ano de nascimento e concatene-o com uma mensagem de boas-vindas, como "Bem-vindo ao nosso programa, nascido em [ano de nascimento]!".<br>
let anoNascimentoUsuario = prompt("Digite seu ano de nascimento: ");
console.log(`Bem-vindo ao nosso programa, nascido em ${anoNascimentoUsuario}!`);

// 30. Receba um número inteiro e uma string do usuário. Em seguida, concatene-os em uma única string, separando-os com um espaço.<br>
let numeroInteiroUsuario = prompt("Digite um número inteiro: ");
let textoUsuario = prompt("Digite uma string: ");
console.log(`Resultado: ${numeroInteiroUsuario}${textoUsuario}`);


//31. Receba o nome de um produto digitado pelo usuário e concatene-o com o preço do produto, adicionando o símbolo de moeda da sua escolha.<br>
let nomeProduto = prompt("Digite o nome do produto: ");
let precoProduto = Number(prompt("Digite o preço do produto: "));
console.log(`O produto ${nomeProduto} custa R$${precoProduto.toFixed(2)}`);


//32. Receba um número inteiro do usuário e concatene-o com uma mensagem, informando o dobro desse número.<br>
let numeroInteiro10 = Number(prompt("Digite um número inteiro: "));
console.log(`O dobro de ${numeroInteiro10} é ${numeroInteiro10 * 2}`);


//33. Receba uma string contendo um endereço de e-mail e concatene-a com uma mensagem de agradecimento personalizada.<br>
let email = prompt("Digite seu endereço de e-mail: ");
console.log(`Obrigado por se inscrever, ${email}!`);


//34. Receba dois números inteiros do usuário e exiba a soma, a diferença, o produto e o quociente (divisão inteira) entre eles.<br>
let num1 = Number(prompt("Digite o primeiro número inteiro: "));
let num2 = Number(prompt("Digite o segundo número inteiro: "));
console.log(`Soma: ${num1 + num2}`);
console.log(`Diferença: ${num1 - num2}`);
console.log(`Produto: ${num1 * num2}`);
console.log(`Quociente: ${Math.floor(num1 / num2)}`);


//35. Peça ao usuário para digitar a base e a altura de um triângulo. Em seguida, calcule e exiba a área do triângulo.<br>
let baseTriangulo = Number(prompt("Digite a base do triângulo: "));
let alturaTriangulo = Number(prompt("Digite a altura do triângulo: "));
let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`A área do triângulo é: ${areaTriangulo}`);


//36. Receba o raio de uma circunferência digitado pelo usuário e calcule o seu perímetro (2 * π * raio).<br>
let raio = Number(prompt("Digite o raio da circunferência: "));
let perimetro = 2 * Math.PI * raio;
console.log(`O perímetro da circunferência é: ${perimetro.toFixed(2)}`);


//37. Receba a base e a altura de um retângulo digitados pelo usuário. Em seguida, calcule e exiba o perímetro do retângulo.<br>
let baseRetangulo = Number(prompt("Digite a base do retângulo: "));
let alturaRetangulo5 = Number(prompt("Digite a altura do retângulo: "));
let perimetroRetangulo = 2 * (baseRetangulo + alturaRetangulo5);
console.log(`O perímetro do retângulo é: ${perimetroRetangulo}`);


//38. Solicite ao usuário que insira três números decimais. Em seguida, calcule e exiba a média aritmética desses números.<br>
let numA = Number(prompt("Digite o primeiro número decimal: "));
let numB = Number(prompt("Digite o segundo número decimal: "));
let numC = Number(prompt("Digite o terceiro número decimal: "));
let media = (numA + numB + numC) / 3;
console.log(`A média aritmética é: ${media.toFixed(2)}`);


//39. Peça ao usuário para digitar a sua idade e, em seguida, informe quantos meses e quantos dias ele já viveu (considerando um ano com 365 dias).<br>
let idade5 = Number(prompt("Digite sua idade: "));
let mesesVividos = idade5 * 12;
let diasVividos = idade5 * 365;
console.log(`Você já viveu aproximadamente ${mesesVividos} meses e ${diasVividos} dias.`);


//40. Receba um valor em reais e a cotação do dólar digitados pelo usuário. Em seguida, converta o valor para dólares e exiba o resultado.<br>
let valorReais = Number(prompt("Digite o valor em reais: "));
let cotacaoDolar = Number(prompt("Digite a cotação do dólar: "));
let valorDolares = valorReais / cotacaoDolar;
console.log(`O valor em dólares é: $${valorDolares.toFixed(2)}`);


//41. Solicite ao usuário para digitar um número decimal e arredonde-o para o inteiro mais próximo.<br>
let numeroDecimal20 = Number(prompt("Digite um número decimal: "));
let numeroArredondado20 = Math.round(numeroDecimal20);
console.log(`O número arredondado é: ${numeroArredondado20}`);


//42. Receba três números inteiros digitados pelo usuário e exiba o resultado da operação (n1 + n2) * n3.<br>
let n1 = Number(prompt("Digite o primeiro número inteiro: "));
let n2 = Number(prompt("Digite o segundo número inteiro: "));
let n3 = Number(prompt("Digite o terceiro número inteiro: "));
let resultado20 = (n1 + n2) * n3;
console.log(`O resultado da operação é: ${resultado20}`);


//43. Peça ao usuário que digite uma temperatura em graus Celsius e a converta para Fahrenheit usando a fórmula: Fahrenheit = (Celsius * 9/5) + 32.
let celsius = Number(prompt("Digite a temperatura em graus Celsius: "));
let fahrenheit = (celsius * 9/5) + 32;
console.log(`A temperatura em Fahrenheit é: ${fahrenheit.toFixed(2)}`);