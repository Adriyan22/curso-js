/*

STRING
    È uma sequência de caracteres, ou seja , textos envolvidos entre aspas simples ou aspas duplas.

IMPORTANTE:
    javascript converte strings primitivas para objeto do tipo String e por isso os métodos e propriedades podem ser utilizados em strings primitivas.
*/

//propriedade lenght: informa o tamanho de uma string
let texto = "tamanho da string"
texto.length //retorna o tamanho da string.

//retornando o último caractere da string texto acima.
texto[texto.length - 1]

//Os método at(index) e charAt(index): retornam apenas um caractere de uma string.
texto.at(0) //retorna o primeiro caractere 
texto.charAt(1) //retorna o segundo caractere

//O método trim() remove espaços nas extremidades da string
texto.trim() //removendo espaço no inicio e no fim da string.

//Os métodos toUpperCase() e toLowerCase() transformam a string em maiúscula e minúscula.
texto.toUpperCase()//agora a string é maiúscula .
texto.toLowerCase()//agora a string é minúscula.


/* 
O método includes('substring') retorna um valor booleano, true ou false.
Verifica se, o argumento passado como valor estiver incluso em uma string ou input do usuário, retorna true , caso contrário retorna false.

*/
if(texto.includes('tamanho'))console.log("Retorna true")


//O método indexOf('substring') retorna a posição de onde a substring pesquisada começa. Se não for encontrada, retorna -1.
texto.indexOf('tamanho') //tamanho começa no index 0


//O método slice(0, 5) extrái uma substring(uma parte de uma string)especificada. o primeiro argumento é o inicio da extração e o último é onde a extração termina. Quando é passado apenas um valor como argumento, retorna somente o restante da string.
texto.slice(10) //extraindo a partir do index 10.
texto.slice(0, 10) //extraindo uma parte especificada.


//O método split("") retorna um array com os caracteres separados por vírgula.
texto.split(''); //retorna um array com cada caractere separado por vírgula.
texto.split(' ') //retorna um array com cada palavra separada por virgula.

//O método replace('subString', 'substituta') substitui uma subString especificada como primeiro argumneto , por uma nova substring inserida como segundo argumento.
texto.replace('tamanho', 'cumprimento')


//EX 01: dada uma string, exiba no console o seu COMPRIMENTO usando a propriedade LENGTH.
const string = "minha string"
console.log(string.length)


//EX 02: Dada uma string com um NOME, use a notação de colchetes `[]` para retornar o primeiro caractere (INDICE 0) e o último caracatere(usansdo a LENGTH -1)
const nome = "Adriano"
console.log(`Primeiro caracatere: ${nome[0]} \nÙltimo caractere: ${nome[nome.length - 1]}`);


//EX 03: Dada uma string, CONVERTA-A inteiramnete para letras maiúsculas usando o método toUpperCase() e, em seguida, inteiramente para minúsculas usando toLowerCase()
const stringMaiuscula = string.toLocaleUpperCase()
const stringMinuscula = string.toLowerCase()
console.log(`Maiuscula: ${stringMaiuscula}`)
console.log(`Minuscula: ${stringMinuscula}`)

//EX 04: Dada uma string, use o método `.slice()` para extrair uma substring que comece em um índice específico e vá até o final da string. Tente também extrair uma substring definindo o início e o fim (ex: de 2 a 5).
const extraindo = string.slice(5, 12)
console.log(extraindo);


//EX 05: Dada uma frase, use o método `.split(' ')` para dividi-la em um array de palavras. Em seguida, use o método `.indexOf()` no array resultante para encontrar a posição de uma palavra específica.
const frase = "Programação é tudo pra mim"
const arrayDePalavras = frase.split(' ')
const indiceDeAlgumaPalavra = arrayDePalavras.indexOf('mim')
console.log(arrayDePalavras)
console.log(`mim na posição: ${indiceDeAlgumaPalavra}`)


//EX 05: Dada uma string, use o método `.substring()` para extrair uma parte, definindo o índice inicial e o final. Tente inverter os índices (ex: `substring(5, 0)`) e observe o resultado.
let subString = string.substring(5, 0)
console.log(subString);


//EX 06: Dada uma string contendo um e-mail, use o método `.indexOf('@')` para encontrar a posição do caractere "@" e, em seguida, use `.substring()` para extrair o domínio (tudo que vem depois do "@").
const email = 'pessoa@gmail.com.br'
const posicao = email.indexOf("@")
const dominio = email.substring(posicao + 1)
console.log(`@ encontrado na posição: ${posicao}`)
console.log(`Dominio completo: ${dominio}`)







