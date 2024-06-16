// IMPORTANDO A BIBLIOTECA PARA USAR

// npm install readline-sync instalar biblioteca para pegar dados do usuário

const prompt = require("readline-sync");

const idade = prompt.question("Qual eh a sua idade? ");

const idadeN = Number(idade);

console.log(idadeN, typeof idadeN);

// CONVERSÃO MANUAL

console.log(Number("X")); //NaN Not a number

console.log(String(10), typeof String(10));

console.log(Boolean(1));

// Coersão Implícita

console.log(1 + "1");
console.log(10 + "5");
console.log(10 - "5");
console.log(10 * "5");
console.log(10 / "5");


//  EX

let n = 1 + "1"; // '11' (string)

n = n - 1; // 11 - 1 = 10
console.log(n);

console.log(2 + 3 + 4 + "5"); // 9 + '95'

console.log("5" + 2 + 3 + 4); // '52' + ... = '5234'

console.log("10" - "4" - "3" - 2 + "5"); // 6 - '3' - 2 + '5' = 3 - 2 + '5' = 1 + '5' = '15'