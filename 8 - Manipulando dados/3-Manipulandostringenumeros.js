// Manipulando string e números

// transformar string em número e número em string
/*
let string = "123"
console.log(Number(string))

let number = 321
console.log(String(number))
*/
// contar quantos caracteres tem uma palavra e quantos digitos tem
/*
let word = "Paralelepipedo"
console.log(word.length)

letnumber =1234
console.log(String(number.length))

//Transformar um número quebrado com 2 casas decimas e trocar ponto por vírtgula
let number = 345.3399209
console.log(number.toFixed(2).replace(".", ","))
*/
//TRansforme letras mínusculas em maiuscula, faça o contrário disso também

let word = "Programar é top!"
console.log(word.toUpperCase())

//Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array, depois disso, transforme o array em um texto onde eram espaços coloque _

let phrase = "Eu quero programar!"
let myArray = phrase.split("")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore.toLocaleLowerCase())

// Verificar se o texto contem a palavra Amor

let phraserSearch = "Eu quero viver o Amor!"
console.log(phraserSearch.includes("Amor")) //includes é case sensitive, ou seja só vai achar caracteres identico, letras maiusculas ou minusculas vão fazer a diferencia

//criar array com construtor

let myArrayConstructor = ['a', 'b', 'c']
console.log(myArrayConstructor)

//Manipulando Arrays

// Contar elementos de um Array
console.log (['A',{type: "array"}, function(){ return "alo"}].length)

// converter Strings para array

let wordString = "Manipulação"
console.log(Array.from(wordString))

