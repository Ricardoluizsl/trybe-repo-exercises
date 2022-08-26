//4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.

let age = 20;
let category;

if (age >= 18) {
   category = 'maior de idade';
} else {
   category = 'menor de idade';
};

console.log('A pessoa é ' + category);

