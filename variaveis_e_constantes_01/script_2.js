//variáveis do mesmo tipo, podem ser declaradas na muma linha
var number1 = 10, number2 = 20, number3 = 30; //tenta não usar o var, use let ou const
let number4 = 40, number5 = 50, number6 = 60; //melhor prática
let name1 = "Raul", name2 = "Elcio", name3 = "José"; //melhor prática

let number1 = number2 = number3 = 10;  //todas as variáveis tem o mesmo valor

// também é possivel
let number1 = 10,
    number2 = 20,
    number3 = 30;

// e também é possivel 
let myName = "Raul", age = 15, isMarried = false;

//apresentar os valores das variáveis no console
console.log(myName);
console.log(age);
console.log(isMarried);