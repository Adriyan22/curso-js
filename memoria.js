/*
TIPOS PRIMITIVOS 
    - Numbers
    - Strings
    - Booleans
    - Null
    - Undefined
    - Symbol
    - BigInt

TIPOS DE REFERÊNCIA
    - Todos os tipos de objetos
    - Objetos literais
    - Arrays
    - Funções
    - Datas
    -Todos os outros objetos



QUAL A DIFERENÇA ENTRE OS TIPOS ACIMA ?
    Tipos primitivos, são armazenados na steak(pilha).
    Tipos de referência, são armazenados na heap(amuntuado).

COMO FUNCIONA ?
    A variável que armazena um objeto, cria um ponteiro na steak(pilha) que aponta para este objeto que fica armazenado na heap.
*/


/*
EXPLICAÇÃO DO CÓDIGO:
50 é armazenado na steak(pilha)
copiaValor cria uma cópia da variável que armazena 50.
Duas posições diferentes são ocupadas na steak(pilha).
A variável valor é mutável e não altera o valor da cópia.

*/
let valor = 50
let copiaValor = valor 



/*
EXPLICAÇÃO DO CÓDIGO:
O objeto literal é armazenado na heap
A variável objeto, cria um ponteiro na steak(pilha)
Esse ponteiro criado, aponta para o objeto armazenado na heap.
*/

let objeto = {propriedade: "valor"}
let objetoCopia = objeto

console.log(objeto, objetoCopia)

objetoCopia.propriedade = "Alterei"

console.log(objeto, objetoCopia)