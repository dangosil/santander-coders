const prompt = require("readline-sync");

const idade = Number(prompt.question("Qual a sua idade? ")); //CONVERTER SEMPRE PARA NUMBER

const maiorDeIdade = idade >= 18;

// ESTRUTURA CONDICIONAL if/else

if (maiorDeIdade) {
  // Faça algo...
  console.log("Maior de idade!");
} else {
  console.log("Menor de idade!");
}

const mediaAluno = 7;

// Média < 7 e Média >= 5 -> FINAL

if (mediaAluno >= 7) {
  console.log("Aprovado!");
  console.log("Parabéns! 😁"); // WINDOWS + . 

} else if (mediaAluno >= 5) {
  console.log("Prova final!");
} else {
  console.log("Reprovado!");
}

// MAIOR DE IDADE
// CNH

const idadePessoa = 17;
const temCNH = true;

if(idadePessoa >= 18 && temCNH) {
    console.log("Pode dirigir!");
} else {
    console.log("Não pode dirigir!");
}