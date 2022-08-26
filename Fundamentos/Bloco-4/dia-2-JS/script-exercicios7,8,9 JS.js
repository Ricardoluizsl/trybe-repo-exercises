//exercicio 7: menor numero

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let smallestNumber = numbers[0]

for(i=1; i < numbers.length; i+=1) {
    if (numbers[i] < smallestNumber){
        smallestnumber = numbers[i]
    }
}

console.log(smallestNumber)

//exercicio 8:

let array = []

for(let index=1; index < 26; index +=1){
    array.push(index) 
}

console.log(array)

for (let index = 0; index < array.length; index += 1) {
    console.log(array[index] / 2);
  };


