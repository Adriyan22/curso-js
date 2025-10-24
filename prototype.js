/*

PROTÒTIPOS DE OBJETOS

O que são protótipos ?
    PROTÓTIPOS/PROTOTYPES é um objeto propriedade que armazena métodos e propriedades de um objeto, onde outros objetos podem também ter acesso aos mesmos métodos e propriedades.

Como funciona a comunicação entre os objetos ?
   Existe um link interno [[Prototype]] que faz com que um objeto herde métodos e propriedades de seu Objeto Protótipo, e assim por diante (formando a Cadeia de Protótipos)."


OBSERVAÇÔES:
    Propriedade e métodos são definidos no prototype de funções construtoras e não são copiados e sim acessados.
    todo construtor em javascript herda propriedades e métodos de Object via Object.prototype.


*/

//EXERCÍCIO : GERENCIAMENTO DE FROTAS DE VEÍCULOS
class Veiculo {
    constructor(modelo, cor){
        this.modelo = modelo
        this.cor = cor
        this.velocidadeAtual = 0
    }

    acelerar(aumento) {
        this.velocidadeAtual += aumento
        return `Acelerando para: ${this.velocidadeAtual} km/h`
    }

    frear(reducao){
        this.velocidadeAtual -= reducao
        if(this.velocidadeAtual < 0) {
            this.velocidadeAtual = 0
        }
        return `Freando para: ${this.velocidadeAtual} km/h`
    }

    obterStatus() {
        return `Modelo: ${this.modelo} \nCor: ${this.cor} \nVelocidade: ${this.velocidadeAtual}`
    }
}

class Carro extends Veiculo {
    constructor(modelo, cor, portaMalasCapacidade) {
        super(modelo, cor)
        this.portaMalasCapacidade = portaMalasCapacidade
    }
}


class Caminhao extends Veiculo{
    constructor(modelo, cor, eixos) {
        super(modelo, cor)
        this.eixos = eixos
    }
}

const meuCarro = new Carro("Gol","preta", 5)
console.log(meuCarro.acelerar(100))
console.log(meuCarro.obterStatus())


const meuCaminhao = new Caminhao("FH","branco", 2)
console.log(meuCaminhao.frear(50))
console.log(meuCaminhao.obterStatus())



