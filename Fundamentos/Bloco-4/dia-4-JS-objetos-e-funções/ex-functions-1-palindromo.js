// função pra dizer se é palindromo ou nao

function verificaPalindromo(word) {
    let reverse = word.split('').reverse('').join('')
    
    if (reverse === word) {
        return true
    }
    else {
        return false
    }
}

console.log(verificaPalindromo('arara'))
console.log(verificaPalindromo('Trybe'))
