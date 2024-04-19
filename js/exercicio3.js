//1. Crie uma lista de objetos com itens de mercados, que contenha nome/preço/quantidade de cada produto.
//No fim, exiba a lista completa com o valor total da compra
//A lista deve ter no mínimo 2 itens
//O valor total deve ser exibido com pelo menos 2 casa decimais

// var listaMercado = [
//     {nome: "Danone", preco: 3.50, quantidade: 6 },     //indice 0
//     {nome: "Coca", preco: 8.80, quantidade: 3 },       //indice 1
//     {nome: "Pão", preco: 9.00, quantidade: 9},         //indice 2
//     {nome: "Requeijão", preco: 7.00, quantidade: 2}    //indice 3 
// ]

// var contador = 0;
// var valorTotal = 0;

// while (contador < listaMercado.length){
//     valorTotal = listaMercado[contador].preco * listaMercado[contador].quantidade + valorTotal; //valorTotal está recebendo ele mesmo

//     contador++           // contador = contador + 1;
//     //contador ele acessa todos os índices da lista
// }
// console.log(valorTotal);






//SEMPRE QUE USAR WHILE, DEVE-SE USAR O CONTADOR


//Exercicio
//Criar uma lista de notas e exibir a soma delas utilizando while
// var notasLaura = [
//     {materia: "Geografia", nota: 9},
//     {materia: "Matemática", nota: 8},
//     {materia: "Inglês", nota: 7},
//     {materia: "Português", nota: 6},
//     {materia: "História", nota: 6},
//     {materia: "Ciências", nota: 10}
// ]

// var contador = 0;
// var somaNota = 0;
// while (contador < notasLaura.length){
//     somaNota += notasLaura[contador].nota; //ou poderia ser notasLaur[contador] + somaNota

//     contador++
// }

// console.log(somaNota);


// //Exericio
// //Calcular e exibir a média das notas do exercicio anterior 
// console.log(somaNota/notasLaura.length);



//COM FUNÇÃO
var listaMercado = [
    {nome: "Danone", preco: 3.50, quantidade: 6 },     //indice 0
    {nome: "Coca", preco: 8.80, quantidade: 3 },       //indice 1
    {nome: "Pão", preco: 9.00, quantidade: 9},         //indice 2
    {nome: "Requeijão", preco: 7.00, quantidade: 2}    //indice 3 
]

var contador = 0;
var valorTotal = 0;

  function calcularPrecoTotal(itemCarrinho, total){
    return itemCarrinho.preco * itemCarrinho.quantidade + total
  }

  while (contador < listaMercado.length) {
    valorTotal = calcularPrecoTotal(listaMercado[contador], valorTotal)
    contador++
  }
  console.log(valorTotal);