// operadores booleanos: comparações

const n1 = 10;
const n2 = 12;

console.log(n1 == n2);
console.log(n1 === n2); // compara o valor e o tipo ===
console.log(n1 == "10"); // só compara o VALOR ==

console.log(n1 !== "10"); // SEMPRE UTILIZAR !== ou ===
console.log(n1 === n2);

const idadeP1 = 16;
const idadeP2 = 42;

console.log(idadeP1 >= 18 && idadeP2 >=18); // AND E
console.log(idadeP1 >= 18 || idadeP2 >=18); // OR OU 

console.log(!true);

console.log(!(idadeP1 >= 18)); // Retorna verdadeiro se a pessoa é menor de idade