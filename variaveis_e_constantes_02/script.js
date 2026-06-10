// uma variaveis podem ter um valor inicial e depois serem alteradas
let myname = "Raul";
console.log(myname); //Raul

myname = "Elcio";
console.log(myname); //Elcio

//uma variavel pode ter um valor inicial e depois ser alterada para outro tipo
//este é um dos "maus" principios de programação em JavaScript: as variaveis não tem um tipo fixo
let variable = 50;
console.log(variable); //50

variable = "Raul";
console.log(variable); //Raul

variable = true;

//alterar o tipo de valor de uma variavel é uma má pratica
//o codigo fica mais dificil de ler e manter