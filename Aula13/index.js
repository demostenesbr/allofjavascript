// let umaString = "Um \"texto\"";
// 01234567
// let umaString = "Um texto";

let umaString = "O rato roeu a roupa do rei de roma.";

// console.log(umaString.charAt(6));
// console.log(umaString.concat(' em um lindo dia.'));
// console.log(umaString + ' em um lindo dia.');
// console.log(`${umaString} em um lindo dia.`);

console.log(umaString.indexOf('texto'));
console.log(umaString.lastIndexOf('o')); // The last of first

console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/[a-z]/g));
console.log(umaString.replace('Um', 'Outro'));

console.log(umaString.length);
console.log(umaString.slice(1, 5));
console.log(umaString.slice(-5, umaString.length -1));
console.log(umaString.slice(-5, -1));
console.log(umaString.substring(umaString.length - 5, umaString.length - 1));

console.log(umaString.split('r'));

console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());
