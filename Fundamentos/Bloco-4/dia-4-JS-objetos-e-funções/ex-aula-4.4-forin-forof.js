//For in e For of:

//1. 

let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}

//OUTPUT: Saab
//        Volvo
//        BMW


//2. 


let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(index, car[index]);
  }

  //output: type Fiat
//          model 500
//          color white

//3. FOR OF

let food = ['hamburguer', 'bife', 'acarajé'];

for (let position in food) {
    console.log(position);
  };
  //resultado: 0, 1, 2;

//

  let food = ['hamburguer', 'bife', 'acarajé'];
  for (let value of food) {
    console.log(value);
  };
  //resultado: hamburguer, bife, acarajé;

//Ex. 1: criar for in para dar Olá para cada um dos nomes no objeto names

  let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for (let index in names) {
    console.log('Olá ' + names[index])
  }

  //Ex. 2: criar for of p/ dar Olá a cada um dos names:

  let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for (let index of names) {
    console.log(index)
  }

  //Ex. 3: Imprima um console log com as chaves e valores do obejto: 

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let modelo in car) {
    console.log(modelo + modelo[index])
  }
