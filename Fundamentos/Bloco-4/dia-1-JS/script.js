//exercício 1:

const myName = "Ricardo Lima";
const birthCity = "Aracaju";
let birthYear = 1992;

console.log(myName);
console.log(birthCity);
console.log(birthYear);


console.log(myName, birthCity, birthYear);

birthYear = 2030;

console.log(birthYear);


console.log(birthCity);

//exercício 2:

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';


console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);

// exercicio 3:

const base = 5;
let height = 8;
const area = base * height;
const perimeter = base*2 + height*2

console.log (area);
console.log(perimeter);

//exercicio 4:

const nota = 50;

if (nota >= 80) {
    console.log("Parabéns, você foi aprovado!")
}
else if (80 > nota >= 60) {
    console.log("Você está na lista de espera")
}
else {
    console.log("você está reprovado")
}

//exercício 6:

const conditionOne = true;
const conditionTwo = false;

console.log(conditionOne && conditionTwo);

//exercicio 7:

const currentHour = 16;
let message = "";

if (currentHour >= 22) {
   message = "Não devemos comer mais nada";
}
else if (18 <= currentHour < 22 ) {
   message = "vamos jantar!";
}
else if (14 <= currentHour < 18) {
   message = "vamos fazer um bolo pro café da tarde?";
}
else if (11 <= currentHour < 14) {
   message = "Hora do almoço!";
}
else if (currentHour < 11) {
   message = "que cheirinho de café!";
}

console.log(message);

//exercicio 8:

let weekDay = "quarta-feira"
if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
   } else {
     console.log("FINALMENTE, descanso merecido UwU");
   }

//exercicio 9: operador NOT !

console.log(!(2 + 2) === 4);

console.log(undefined);

//ex 10:


mes = 'maio';
let estacaoDoAno = '?';

switch (mes) {
    case 'janeiro':
    case 'fevereiro':
    case 'março':
        estacaoDoAno = 'Verão';
        break;
    case 'abril':
    case 'maio':
    case 'junho':
        estacaoDoAno = 'Outono';
        break;
    case 'julho':
    case 'agosto':
    case 'setembro':
        estacaoDoAno = 'Inverno';
        break;
    case 'outubro':
    case 'novembro':
    case 'dezembro':
        estacaoDoAno = 'Primavera';
}

console.log(estacaoDoAno); // 'Outono'


// ex.: 11

const situacao = "aprovado"

switch (situacao) {
    case "aprovado":
        console.log(Parabéns, vc foi aprovado!);
    break;

    case "lista":
        console.log(vc está na lsita de espera);
    break;

    case "reprovado":
        console.log(vc está reprovado);
    break;

    default:
        console.log(informação incorreta);
    break;
}

break;
