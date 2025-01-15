// Não podemos criar variáveis com palavras reservadas
// Variáveis precisam ter nomes significativos
// Não pode começar com o nome de uma variável com um número
// Não podem conter espaços ou traços
// É permitido utilizar camelCase
// Case-sensitive faz diferença
// Não podemos declarar mais de uma vez variáveis com let
// Não utilize var, utilize let

// String = Text | Number = Número

const primeiroNumero = '5'; // Number
const segundoNumero = 10;

const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
const resultadoTriplicado = resultado * 3;
console.log(resultadoTriplicado);
resultadoTriplicado = resultadoTriplicado + 5;

console.log(primeiroNumero + segundoNumero);