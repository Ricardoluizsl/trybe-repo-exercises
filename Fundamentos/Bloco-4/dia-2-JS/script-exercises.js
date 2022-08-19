//exercicio 1: percorre array imprimindo todos os valores

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i+=1) {
    console.log(numbers[i])
}

//exercicio2: soma dos arrays

let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;
for (i=0; i < numeros.length; i +=1) {
    resultado += numeros[i];
}
console.log(resultado);

//exercicio 3/4: media aritmetica dos arrays e imprimir msg no final

let num = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;
for (i=0; i < num.length; i +=1) {
    result += num[i];
}
let media = result / num.length;
console.log(media);

if (media>20) {
    console.log('valor maior que 20')
}
else {
    console.log('valor menor ou igual a 20')
}

//exercicio5: maior valor contido na array + imprimir

console.log(math.max(num));






