/*
OPERADORES ESSENCIAIS PARA USO:
    igualdade estrita (===) e diferente de estrito(!==) porquê ? Esses operadores não fazem conversões implícitas e sim comparam os valores e o tipo de dado rigorosamente.

OPERADORES QUE NÃO SE DEVEM USAR:
    igualdade(==) e diferente de(!=) Porquê ? Esses operadores fazem conversões implícitas por debaixo dos panos antes de fazer a comparação .

NOTA:
    O operador de igualdade estrita , retorna true se ambos os valores e tipos forem iguais.
    O operador de diferença estrita, retorna true se os valores forem diferentes, mesmo sendo do mesmo tipo.
    retorna true se os tipos forem diferentes, mesmo se os valores forem iguais.
*/



//EXERCICIOS DE OPERADORES ESTRITOS:

console.log(100 === "100") //valores iguais e tipos diferentes = FALSE

console.log(0 === false) //valores iguais e tipos diferentes = FALSE

console.log(null === undefined) //valores iguais e tipos diferentes = FALSE

console.log("olá" === 'olá')//valores iguais e tipos iguais = TRUE

console.log(NaN === NaN) //não é igual a si mesmo = FALSE

console.log("" === "") //valores iguais e tipos iguais = TRUE

let a = {a: 1} ; let b = {a: 1}
console.log(a === b)//objetos ocupam diferenetes espaços na memória = FALSE

const arr1 = [1]; 
const arr2 = arr1; 
console.log(arr1 === arr2)//arr1 e arr2, apontam para o mesmo objeto em memória = TRUE 


console.log(typeof 5 === typeof "5") //valores iguais e tipos diferentes = FALSE

console.log(Boolean(0) === false)


//EXERCICIOS DE DIFERENÇA ESTRITA:
console.log("JavaScript" !== "javascript") //são diferentes pois letras maiusculas e minúsculas são diferenetes por javascript ser case sensitive = TRUE


console.log(1 !== true) //totalmente diferente no valor e tipo = TRUE

console.log(5 !== "5.0")//valores diferentes e tipos diferenetes = TRUE

console.log(new Number(7) !== 7);// tipos diferentes e valores iguais = TRUE

console.log(null !== undefined)//valores e tipos diferentes = TRUE

const obj = {}; 
console.log(obj !== null)//objeto vazio não é considerado falsy = TRUE

console.log(typeof null !== "object") //null e "objetct" são objetos = "FALSE"

console.log(typeof [] !== typeof {}) //array e objetos são objetos = FALSE

console.log(0 !== -0); // valores diferentes e tipos iguais = FALSE

console.log(1/0 !== 1/0)//NÃO SEI 




