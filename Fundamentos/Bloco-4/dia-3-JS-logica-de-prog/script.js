//exercicio de aula 1:

let fruits = [3, 4, 10, 1, 12];

let sumOfTheFruits = 0;

for (let i = 0; i < fruits.length; i += 1) {
    sumOfTheFruits += fruits[i];
}

if (sumOfTheFruits > 15) {
    console.log (sumOfTheFruits)
}

else {
    console.log ('Soma é maior do que 15')
}


//exercicio de aula 2:

let sum = 0;

for (let index=1; index<=100; i+=1) {
    sum += index
}

console.log(sum);

//ex 3:

const n = '9' ;

let resultado = 100;
for (let index = 0; index <= n; index += 1) {
  resultado -= index;
};
console.log(resultado);


//ex.4:

Math.floor(Math.random());
console.log (Math.floor)


