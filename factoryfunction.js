/*

FACTORY FUNCTION (FUNÇÃO DE FÁBRICA)
    È uma função que ao ser invocada , cria e retorna um novo objeto.

PORQUÊ UMA FACTORY FUNCTION É MAIS PREFERÍVEL DO QUE UMA CLASSE ?
    Porque não é preciso usar o new.
    Evita que erros aconteçam ao esquecer do new , complicando a correção sintática e lógica.

*/

//EX 01: GERADOR DE PERFIS DE USUÁRIOS
function criaPerfilDeUsuario (nome, idade, email) {
    return {
        nomeCompleto: nome, 
        idadeAtual: idade, 
        contatoEmail: email,
        status: "Ativo",
        
        apresentar () {
            return `Olá! Meu nome é ${this.nomeCompleto}, tenho ${this.idadeAtual} anos e meu email é ${this.contatoEmail}.`
        }
    }
}

const usuario1 = criaPerfilDeUsuario("Adriano", 29, "Adriano@gmail.com")
const usuario2 = criaPerfilDeUsuario("Salvador", 30, "Salvador@gmail.com")
console.log(usuario1.apresentar());
console.log(usuario2.apresentar());


/*
EXPLICAÇÃO DA IMPLEMENTAÇÃO DO EXERCÍCIO:
A função criaPerfilDeUsuario toda vez que é invocada, cria um novo objeto contendo as propriedades e o método que retorna os dados contidos nas propriedades do objeto retornado pela invocação da função.

*/




