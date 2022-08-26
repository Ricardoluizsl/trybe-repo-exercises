let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

//6: O livro favorito de julia pessoa ....

  console.log ('O livro favorito de ' + leitor.nome + leitor.sobrenome + ' se chama "' + leitor.livrosFavoritos[0].titulo + '"')

//7: 

leitor.livrosFavoritos.push(
    {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'J. K. Rowling',
        editora: 'Rocco',
    }
);

//8: Julia tem 2 livros favoritos

console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos");



