// Tipos de dados primitivos - Aula 10
// String, number, underfined, null, boolean, symbol

const nome = 'Demóstenes'; // string
const nome1 = 'Demóstenes'; // string
const nome2 = `Demóstenes`; // string
const num1 = 10; // number
const num2 = 10.52; // number
let nomeAluno; // underfined -> não aponta para local nenhum na memória
const sobrenomeAluno = null; // Nulo -> não aponta para local nenhum na memória
const aprovado = false; // Boolean = true, false (lógico)

// console.log(typeof sobrenomeAluno, sobrenomeAluno);

const a = [1, 2];
const b = a;
console.log(a, b);

b.push(3);
console.log(a, b);