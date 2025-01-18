const nome = 'Demóstenes';
const sobrenome = 'Brito';
const idade = 45;
const peso = 80;
const alturaEmM = 1.75;
let indiceMassaCorporal;
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2019 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} 'de altura e seu IMC é de' ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);