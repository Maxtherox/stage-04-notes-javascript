#Scope

*Escopo determina a visibilidade de alguma variável no JS

# Block statement 

``` js 
// vamos iniciar um bloco
{
    // aqui dentro é um bloco e posso colocar qualquer código

} // aqui fechamos o bloco

O Bloco, também criará um novo escopo. Chamamos de `block-scoped`

## Var 
```js

// var é global e poderá funcionar fora de um escopo de bloco
console.log('> existe x antes do bloco?', x)

{
    var x = 0
}
//hoisting jogar variavel que existe em só um escopo lá pra cima (javascript le o código de maneira vertical de cima pra baixo)
console.log('> existe x depois do bloco', x)
``` 

## Const e Let

*Const e Let são locais e só funcionam no escopo que foram criadas. 