//1: crie um objeto player contendo as propriedades

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 },
};

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' de idade')

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018]; // Ao tentar acessar uma chave inexistente o JavaScript automaticamente irá criar essa chave.

console.log('A jogadora ' + player.name + ' foi eleita melhor do mundo ' + player.bestInTheWorld.length + ' vezes');

console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata');


//