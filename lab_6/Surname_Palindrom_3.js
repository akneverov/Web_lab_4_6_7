let ispalindrom = (surname) => surname.toLowerCase() == surname.toLowerCase().split('').reverse().join('')

console.log(ispalindrom('Neverov'))
console.log(ispalindrom('Neven'))