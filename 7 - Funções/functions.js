/* 
function() constructor
    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person (name) {
    this.name = name
    this.walk = () => {
        return this.name + " está andando"
    }
}

const mayk = new Person("Mayk")
const joao = new Person("João")

console.log(joao.walk())
console.log(mayk.walk())