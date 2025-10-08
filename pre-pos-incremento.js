/*

OPERADORES DE INCREMENTO(++) E DECREMENTO(--) 
   ++, Aumenta o valor de uma variável.
   --, Diminui o valor de uma variável.

USO PÓS-FIXO:
    operando++, ele retorna o valor antes do incremento.
    
USO PRÉ-FIXO:
    ++operador, ele incrementa e depois retorna o valor incrementado.

*/



//EXERCÍCIO: ANALISE DE OPERADORES PRE E POS-FIXOS

//configurando as variáveis
let a = 10
let b = 10
let resultado1 = 0
let resultado2 = 0

//uso pos-fixo (testando retorno)
resultado1 = a++
console.log(resultado1)
console.log(a)

//uso pre-fixo(testando retorno)
resultado2 = ++b
console.log(resultado2);
console.log(b);

//DECREMENTO

//uso pos-fixo (testando retorno)
resultado1 = a--
console.log(resultado1)
console.log(a)

//uso pre-fixo(testando retorno)
resultado2 = --b
console.log(resultado2);
console.log(b);




