//exercicio 5: achar o maior valor da array

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let higherNumber = numbers[0]

for(i = 1; i < numbers.length; i+=1) {
    if(numbers[i] > higherNumber){
        higherNumber = numbers[i]
        
    }
}
console.log(higherNumber)

//exercicio 6: descobrir qnts valores impares

let num = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numerosImpares = 0;

for(index=0; index < num.length; index +=1){
    if(num[index] % 2 !== 0){
        numerosImpares +=1
    }
}

if(numerosImpares === 0){
    console.log('não há numeros impares')
} else {
    console.log(numerosImpares)
}

