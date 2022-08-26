let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  //1: Imprima no console uma mensagem de boas-vindas para a personagem acima

 // console.log('Bem-vinda, ' + info.personagem);

  //2: insira nova propriedade com o nome de chave 'recorrente' e o valor 'sim' imprima 

  info.recorrente = 'Sim';

//  console.log(info);

// for (let chaves in info) {
//  console.log(chaves);
// }
//output: personagem, origem, nota, recorrente

//  for (let chaves in info) {
//    console.log(info[chaves])
//  }
//output: Margarida, Pato Donald....

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let properties in info) {
  if (
    properties === 'recorrente' &&
    info[properties] === 'Sim' &&
    info2[properties] === 'Sim'
  ) {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[properties] + ' e ' + info2[properties]);
  }
}

