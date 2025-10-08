/*

O QUE É O REDUCE ?
    higher-order-function(função de alta ordem) é uma função que recebe uma função de callback por argumento que é executada para cada item de um array.

QUANDO USAR O REDUCE ?
    Quando tiver que reduzir o array e transforma-lo em algum tipo de dado .
    EX: {}, [], , '', 0 etc ...

COMO O REDUCE FUNCIONA ?
    Ao ser invocado, a função de callback passada como argumento do reduce é executada para cada item do array. 
    Essa função recebe dois parâmetros (accumulator e item).
    Onde ACCUMULATOR a cada iteração é atualizado ao dado que esta sendo gerado e o ITEM representa cada item do array.
    O resultado final é o tipo de dado que foi passado no parâmetro ACCUMULATOR.

*/

//EX 01: TRANFORMAR UM ARRAY DE OBJETOS EM UMA STRING CONTENDO SOMENTE OS NOMES DOS DESENVOLVEDORES.
const desenvolvedores = [
    {nome: "Adriano", profissao: "Front-End"},
    {nome: "Salvador", profissao: "Back-End"}, 
    {nome: "Francisco", profissao: "Full-Stack"}
]
const lista = desenvolvedores
    .reduce((ac, {nome}) => `${ac} - ${nome} \n`, '')
console.log(lista)