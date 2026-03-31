const prompt = require("prompt-sync")();



let numero = prompt("Digite um numer:");

let unidade = numero % 10;
soma += unidade;
console.log("unidade: " + unidade);

let dezena =Math.floor(numero%100)/10;
soma+= dezena;

console.log("Dezena: " + dezena);

let centena = Math.floor(numero/100);
soma+= dezena;
