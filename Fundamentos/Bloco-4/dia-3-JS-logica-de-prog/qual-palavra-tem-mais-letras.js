//ex 3: dizer que palavra tem mais letras

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0]
let menorPalavra = array[0]

for (let index = 1; index <= array.length; index +=1 ) {
    if ( array[index].length > maiorPalavra.length) {
        maiorPalavra = array[index]
    }
    else if ( array[index].length < menorPalavra.length) {
        menorPalavra = array[index]
    }
}

console.log(menorPalavra + 'é a menor palavra')
console.log(maiorPalavra + 'é a maior palavra')