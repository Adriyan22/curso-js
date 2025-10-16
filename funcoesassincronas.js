/*

FUNÇÕES ASSÍNCRONAS

    Retornam uma promise quando são invocadas.
    O valor de retorno é uma promise resolvida com o valor retornado.
    Quando uma exeção é lançada, a promise é rejeitada.
    A palavra chave await pausa a execução da função assíncrona até que a promise seja resolvida.

QUANDO UTILIZAR FUNÇÕES ASSÍNCRONAS ?
    Sempre que tiver que aguardar alguma resposta, por exemplo:
    Uma requisição http, interação com banco de dados, execução sequencial de código pareceido com código síncrono etc ...

*/



//EX 01: CALCULO ASSÍNCRONO PARALELO DE PREÇOS
function simularAtraso(valor, milissegundos) {
    return new Promise((resolve) => {
        setTimeout(() => {
           resolve(valor)
        }, milissegundos);
    })
}


async function calcularTotal(valorInicial) {
    const custoBase = simularAtraso(120, 3000)
    const custoAdicional = simularAtraso(80, 3000)
    const precoTotal = valorInicial + (await custoBase) + (await custoAdicional)
    return precoTotal
}
calcularTotal(50).then(total => console.log(total))


//EX 02: MONTANDO MENSAGEM DE BOAS VINDAS ASSÍNCRONA
function obterNomeDeUsuario(nome) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(nome)
        }, 1500)  
    })
}

function obterSaudacao(mensagem) {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mensagem)
        }, 1000)
    })
}

async function montarMensagem() {
    const nome = obterNomeDeUsuario("Alex")
    const mensagem = obterSaudacao("Bem vindo(a)")
    
    const obterNome = await nome
    const obterMensagem = await mensagem

    const mensagemCompleta = obterNome + " " + obterMensagem

    return mensagemCompleta
}

montarMensagem().then(saudacoes => console.log(saudacoes))
