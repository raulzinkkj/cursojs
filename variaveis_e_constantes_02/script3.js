//como definir nomes de variáveis
//nomes de variaveis devem ser descritivos e significativos
//nomes de variaveis devem ser em camelCase (não é obrigatorio, apenas uma boa prática)
//nomes de variaveis devem começar com uma letra, um underscore (_) ou um cifrão ($)
//nomes de variaveis não podem começar com um numero
//nomes de variaveis não podem conter espaços ou caracteres especiais
//nomes de variaveis não podem ser palavras reservadas do JavaScript
let myName = "Raul";       //OK
let _myName = "Raul"       //OK
let $myName = "Raul";      //OK
let name1 = "Raul";        //OK
let name_1 = "Raul";       //OK
let name$1 = "Raul";       //OK

let 1name = "Raul";        //NOT OK
let -name = "Raul";        //NOT OK
let name_one = "Raul";     //OK

//camel Case
let firstName = "Raul";
let lastName = "Karvat";

//O JavaScript diferencia maiúsculas de minúsculas - é case sensitive
let myName = "Raul";
let myname = "Karvat";

//myName e myname são variaveis diferentes

// IMPORTANTE: os nomes das variaveis devem ser descritivos e significativos
let n = "Raul";  //não é significativo
let fistName = "Raul";  //é significativo