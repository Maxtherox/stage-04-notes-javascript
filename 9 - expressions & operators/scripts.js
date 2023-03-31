/* Expressões e Operadores
- expressions
- Operators
    binary
    unary
    Ternary
*/

let number = 1;

(function() {
    console.log('alo')
})

console.log(number + 1) // Operador binário
console.log(++number) // Operador unário
console.log(--number) // Operador unário
console.log(true ? 'alo' : 'nada') // operador ternário

/* 
    new

    * left-hand-side expression
    *criar um novo objeto

*/

/*
let name = new string('mayk')
name.surName = "Brito"
let age = new number(23)
console.log(name.surName, age)
*/
/* 
    operadores unários
    typeof
    delete
*/

const person = {
    personName: 'Guilherme',
    personAge: 25,
}

delete person.age

console.log(person)

// operadores aritiméticos

// multiplicação
console.log( 3*5)
//divisão
console.log( 3/5)
// soma
console.log( 3+5)
//subtração
console.log( 3-5)

//resto da divisão
let remainder;
remainder = 11% 3
console.log (remainder)
//incremento
let increment = 0
increment++
console.log(increment)
//decremento
let decrement =3
decrement--
console.log( decrement)
//exponencial

console.log( 3**2) //3 elevado a 2

// grouping operator

let total = ( 2+3) * 5
console.log(total)

// operadores de compração

// irá comparar valores e retornar um boolean como resposta á comparação

let one = 1
let two = 2

// == igual a

console.log(two ==1)
console.log( one =="1")

// != diferente de 
 console.log(one != two)
 console.log (one != 1)
 console.log(one != "1")


 // == estritamente igual a 

 console.log (one === "1")
 console.log (one === 1)

 // !== estritamente diferente de 
 console.log( two !== "2")
 console.log( two !== 2)

 // > maior que
  console.log (one > two)

  // >= maior igual a

  console.log(one >= 1)
  console.log(two >= 1)

  // < menor que

  console.log ( one < two)

  // <= menor igual 

  console.log ( one <= two)
  console.log ( one <= 1)
  console.log ( one <= 0)

  // operadores de atribuição (assigment )

  let x 
  x = 1
  console.log (x)
  x += 2 // x = x + 1
  x -= 1 // x = x - 1
  x *= 2 // x = x * 2
  x /= 2 // x = x / 2
  x %= 2 // x = x % 2
  x **= 2 // x = x elevado a 2

// Operadores lógicos ( Logical operators)

// - 2 valores booleanos, quando verificados,
// resultará em verdadeiro ou falso

let pao = true
let queijo = true

// and &&
console.log (pao && queijo)
// OR ||
console.log (pao || queijo)
// NOT !
console.log(!pao) // operador de negação, inverte o valor

// Operador condicional ternaário

// dependendo da condição, nós receberemos valores diferentes

// condição então valor 1 se não valor 2
// condition ? value1: value 2

//exemplos
//café da manhã top
let paozin = true 
let queijozin = true 

const niceBreakfast = paozin && queijozin ? 'café top' : 'café ruim'

console.log(niceBreakfast)

// maior de 18

let age = 16
const canDrive = age >= 18 ? 'can drive' : "can't drive"
console.log(canDrive)

// operador de string ( string operator)

//comparison (comparação)
console.log( 'a' == 'b')

//concatenation 
console.log("a" + "C")
//retorna a união de duas strings 

/*
    Type conversion (typecasting) vs type coersion
*/

console.log(Number('9') + 5)

/*
    Falsy 
    Quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)

    false
    0
    -0
    ""
    null
    undefined
    NaN
*/



console.log( 0 ? ' verdadeiro' : 'falso')

/*
    tRUTHY
    Quando um valor é considerado true em contextos onde um booleano é obrigatório condicionais e loops)

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    infinity
    -infinity
*/


console.log( true ? ' verdadeiro' : 'falso')

/*
    Operator precedence
    precedencia de operadores
    * Grouping                           ()
    * Negação e incremento               ! ++ --
    * Multiplicação e divisão            * /
    * Adição e subtração                 + -
    * Relacional                         < <= > >=
    * Igualdade                          == != === !==
    * And                                &&
    * OR                                 ||
    * Condicional                        ?:
    * assigment (atribuição)             = += -= *=
*/