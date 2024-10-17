// 1. Crie um objeto chamado "pessoa" com as propriedades "nome", "idade" e "endereço" e atribua valores a elas.
type Pessoa = {
  nome: string,
  idade: number,
  deficienteFisico: boolean,
};

let pessoa: Pessoa = {
  nome: 'João',
  idade: 30,
  deficienteFisico: false
};

// 2. Acesse o valor da propriedade "nome" do objeto "pessoa".
console.log(pessoa.nome);


// 3. Adicione uma nova propriedade chamada "profissao" ao objeto pessoa e atribua um valor a ela.



// 4. Atualize o valor da propriedade "idade" do objeto pessoa para um novo valor.
pessoa.idade = 31;
console.log(pessoa);

// 5. Crie outro objeto chamado "animal" com as propriedades "nome", "especie" e "cor" e atribua valores a elas.
let animal = {
  nome: 'Rex',
  especie: 'Cachorro',
  cor: 'Marrom'
};


// 6. Crie um objeto chamado "livro" com as propriedades "titulo", "autor" e "ano" e atribua valores a elas.
let livro = {
  titulo: 'Aventuras no Mundo da Programação',
  autor: 'Alice Silva',
  ano: 2022
};


// 7. Acesse o valor da propriedade "autor" do objeto livro.
console.log(livro.autor);


// 8. Atualize o valor da propriedade "ano" do objeto livro para um novo valor.
livro.ano = 2023;


// 9. Exclua a propriedade "titulo" do objeto utilizando o operador "delete".



// 10. Crie um objeto chamado "carro" com as propriedades "marca", "modelo" e "ano" e atribua valores a elas. Em seguida, exiba todas as propriedades do objeto no console.
let carro = {
  marca: 'Toyota',
  modelo: 'Corolla',
  ano: 2020
};

console.log(animal);
console.log(livro);
console.log(carro);


// 11. Atualize o valor da propriedade "modelo" para "undefined" do objeto "carro" e exiba todas as propriedades do objeto no console.
