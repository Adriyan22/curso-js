//espalhamento em chamada de funções
const somarNumeros = (um, dois, tres) => {
    return um + dois + tres
}

const arrayDeNumeros = [1, 2, 3]

console.log(somarNumeros(...arrayDeNumeros))


//espalhamentos em arrays literais
const listaDeMusicas = ["Negro Drama", "Jesus Chorou"]
const maisMusicas = [...listaDeMusicas, "Vida loka I", "Vida Loka II"]
console.log(maisMusicas);


//copiando um array existente 
const array = [10, 20, 30]
const copia = [...array]
console.log(copia)


//Exercício Conceitual: Otimizando um Cadastro de Livros
const livro = {
    titulo: "A saga",
    autor: "Sophia de Mello Breyner Andresen",
    anoDePublicação: 1984,
}

const metadadosDolivro = {
    isbn: 978-972-0-72638-4,
    genero: "conto"
}

const copiaLivro = {
    ...livro,
    ...metadadosDolivro,
    anoDePublicação: 2014
}
console.log(copiaLivro);
