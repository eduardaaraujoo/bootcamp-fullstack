//1. Crie uma lista de objetos com itens de mercados, que contenha nome/preço/quantidade de cada produto.
//No fim, exiba a lista completa com o valor total da compra
//A lista deve ter no mínimo 2 itens
//O valor total deve ser exibido com pelo menos 2 casa decimais

var listaMercado = [
    {nome: "Danone", preco: 3.50, quantidade: 6 },     //indice 0
    {nome: "Coca", preco: 8.80, quantidade: 3 },       //indice 1
    {nome: "Pão", preco: 9.00, quantidade: 9},         //indice 2
    {nome: "Requeijão", preco: 7.00, quantidade: 2}    //indice 3 
]

var contador = 0;
var valorTotal = 0;

while (contador < listaMercado.length){
    valorTotal = listaMercado[contador].preco * listaMercado[contador].quantidade + valorTotal; //valorTotal está recebendo ele mesmo

    contador++           // contador = contador + 1;
    //contador ele acessa todos os índices da lista
}
console.log(valorTotal);








