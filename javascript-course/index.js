// node -v VERSÂO
// node .\javascript-course\index.js

// Utilize sempre Camel case em JS

// JS possui tipagem dinâmica: infere os tipos de dados
// JS possui tipagem fraca

let nomeDoAluno = "Tony Stark"; // string(texto): Utilize sempre aspas
let idade = 24; // number
let altura = 1.72; // number
let estudando = true; // boolen (booleano: verdade ou falso)

console.log(nomeDoAluno, typeof nomeDoAluno);
console.log(idade, typeof idade);
console.log(altura, typeof altura);
console.log(estudando, typeof estudando);

let semConteudo; // Declarando variável

console.log(semConteudo);

let curso = "Front-End",
  topico = "JS Básico";

console.log(curso, topico);

// Não utilize var

let notaAluno = 90;
const mediaAluno = 80;

notaAluno = 89;

console.log(notaAluno);
console.log(mediaAluno);

