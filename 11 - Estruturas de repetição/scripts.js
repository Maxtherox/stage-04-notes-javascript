// esterutura de repetição

    // for

/*
for (let i = 0; i < 100; i++) {
    console.log(i)
    if(i === 50){
        break;
    }
    console.log(i)
}
*/

    // While

/*
let i = 0

while(i < 10){
    console.log(i)

    i++;
}
*/

    // for....of
/*
let name = 'mayk'
let names =['joao', 'jones', 'jucas']

for (let char of names) {
    console.log(char)
}
*/

    // for....in

let person = {
    name: 'john',
    age: 30,
    weight: 80.2
}

for (let property in person) {
    console.log(property)
    console.log(person[property])
}