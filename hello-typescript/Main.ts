//Comparação ts ( Main.ts) para (Main.js)
//*****************************8 */
//Javascript puro
var minhaVar = 'Minha Variável';

function minhaFuncao(x, y) {
    return x + y;
}
// ES 6 ou ES 2015 - Ecmascript ( alguns browsers não possuem todas as funcionalidades disponíveis)
// www.es6-features.org#constantes
// e porisso, precisa de um TransPiller( exemplo o Babel www.babeljs.io) -- compila  em javascript puro vanilla
//Exemplos
// let para var
let num = 3;
// const para var
const PI = 3.14;


// exemplo utilização de arrow functions
let numeros = [1,2,3];

//Expressão SEM arrow function
numeros.map(function(valor) {
    return valor * 2;
});

//Expressão COM arrow function
numeros.map(valor => valor * 2); // ES2015

//Classe : ES 2015

class Matematica {
    soma( x , y) {
        return x + y;
    }
}

// Possibilidade de Tipar a variável--- informa erro no tipo da variável
// aceitar qualquet tipo de variável coloca-se........"let n1:any = "  oi deixa sem nada let n1 = 

//Main.ts:41:1 - error TS2322: Type 'number' is not assignable to type 'string'.
//41 n1 = 4;
//Found 1 error.

//let n1:string = "asdfg";
let n1:any = "asdfg";
n1 = 4;



