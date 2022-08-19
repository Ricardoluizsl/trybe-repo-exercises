//exercicio 1:


const a = 2;
const b = 4;

let soma = a + b;
let subtracao = a - b;
let divisao = a / b;
let multiplicacao = a * b;
let modulo = a & b;


console.log('Soma a com b: ', soma);
console.log('Subtração a com b: ', subtracao);
console.log('Multiplicação a com b: ', divisao);
console.log('Divisão a com b: ', multiplicacao);
console.log('Módulo a com b: ', modulo);

//exercicio 2:

let valor1 = 5
let valor2 = 10

if (valor1 > valor2) {
    console.log('valor 1 é maior que valor 2')
}
else if (valor1 < valor2) {
    console.log('valor 1 é menor que valor 2')
}
else{
    console.log('valor 1 é igual a valor 2')
}

//exercicio 3:

const d = 5;
const e = 10;
const f = 15;

if (d > e && d > f) {
    console.log('o maior numero é', d);
}
else if (e > d && e > f) {
    console.log('o maior numero é', e);
}
else if (f > d && f > e) {
    console.log('o maior numero é', f)
}

//exercicio 4:


let valor = -7;

if (valor > 0) {
  console.log('positive');
} else if (valor < 0) {
  console.log('negative');
} else {
  console.log('zero');
};

//exercicio 5:

let angulo1 = -60
let angulo2 = 60
let angulo3 = 60

let somaDosAngulos = angulo1 + angulo2 + angulo3;

if (somaDosAngulos === 180) {
    console.log(true)
}
else if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
    console.log(false,". Erro, angulo inválido")
}
else {
    console.log(false)
}

//exercicio 6:

const chessPiece = 'Bispo';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa p/ qq direção.');
    break;
  case 'bispo':
    console.log('Bispo-> diagonais, quantas casas quiser');
    break;
  case 'rainha':
    console.log('Rainha-> qualquer direção, quantas casas quiser');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal ou vertical quantas casas quiser');
    break;
  case 'peão':
    console.log("Peão -> horizontal ou vertical, uma casa");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};

//exercicio 7:

const nota = 40;

if (nota <= 100 && nota >= 90 ) {
    console.log('A');
}
else if (nota < 90 && nota >= 80) {
    console.log('B')
}

else if (nota < 80 && nota >= 70) {
        console.log('C')
}
else if (nota < 70 && nota >= 60) {
    console.log('D')
}
else if (nota < 60 && nota >= 50) {
    console.log('E')
}
else if (nota < 50 && nota >=0) {
    console.log('F')
}
else {
    console.log('Erro, nota inválida')
}



//exercicio 8:

const x = 2;
const y = 3;
const z = 5;

let par = Boolean;

if ((x % 2 === 0 || y % 2 === 0 || z % 2 === 0)) {
  par = true;
};
console.log(par);

//exercicio 9:

const t = 6;
const u = 0;
const v = 2;

let impar = Boolean;

if (t % 2 ===0 || u % 2 === 0 || v % 2 ===0) {
    impar = false;
}
console.log(impar);

//exercicio 10:

const custoDeProducao = -200;
const valorDeVenda = 400;

if (custoDeProducao >= 0 && valorDeVenda >= 0) {
    custoTotal = custoDeProducao * 1.2;
    lucroTotal = valorDeVenda - custoTotal

    console.log(lucroTotal)
}
else {
    console.log('Erro, os valores nao podem sr negativos')
}

