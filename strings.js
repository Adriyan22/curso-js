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



