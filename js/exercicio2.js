//1 - Acessar o meu Array
// var listaDeCompras = ["Torta", "Feijão", "Pão"];
// console.log(listaDeCompras);


// 2 - Acessa o primeiro item do meu Array
var listaDeCompras = ["Torta", "Feijão", "Pão"];
//console.log(listaDeCompras[0]);              //o colchetes quer dizer índice
//o PUSH vai add um novo elemento ao final do array
listaDeCompras.push("Sorvete");
console.log(listaDeCompras);

//ou pode adicionar assim:
listaDeCompras = [...listaDeCompras, "Açucar", "Sal"];
console.log(listaDeCompras)