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
// console.log(usuario1.apresentar());
// console.log(usuario2.apresentar());


/*
EXPLICAÇÃO DA IMPLEMENTAÇÃO DO EXERCÍCIO:
A função criaPerfilDeUsuario toda vez que é invocada, cria um novo objeto contendo as propriedades e o método que retorna os dados contidos nas propriedades do objeto retornado pela invocação da função.

*/


//EX 02: GERADOR DE TAREFAS DE PROJETO
function criaTarefa (titulo, prioridade ) {
    return {
        nome: titulo,
        nivelPrioridade: prioridade,
        completa: false,
        criacao: new Date().toLocaleDateString(),

        alternarStatus(){
         this.completa = !this.completa
        },

        detalhar(){

            const statusTarefa = this.completa ? "Completa" : "Pendente"
            return `Tarefa: ${this.nome}. Prioridade: ${this.nivelPrioridade}. Criada em: ${this.criacao}. Status: ${statusTarefa}.`
        }
    }
}


const tarefaDesenvolvimento = criaTarefa("Testar API", "Alta")
const tarefaDocumentacao = criaTarefa("Escrever Guia", "Média")

console.log(tarefaDesenvolvimento.detalhar());
console.log(tarefaDesenvolvimento.alternarStatus());
console.log(tarefaDesenvolvimento.detalhar());

/*
EXPLICAÇÃO DA IMPLEMENTAÇÃO DO EXERCÍCIO:
    A função criaTarefa cria um novo objeto de tarefa em cada chamada.

    O método alternarStatus inverte o valor booleano da propriedade completa.

    O método detalhar retorna uma string informativa que apresenta todos os detalhes da tarefa, traduzindo o estado booleano de completa para as palavras "Completa" ou "Pendente".
*/