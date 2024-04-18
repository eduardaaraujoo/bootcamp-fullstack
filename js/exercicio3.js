//1. Crie uma lista de objetos com itens de mercados, que contenha nome/preço/quantidade de cada produto.
//No fim, exiba a lista completa com o valor total da compra
//A lista deve ter no mínimo 2 itens
//O valor total deve ser exibido com pelo menos 2 casa decimais

const listaMercado = [
    {nome: "Danone", preco: 3.50, quantidade: 6 },
    {nome: "Coca", preco: 8.80, quantidade: 3 },
    {nome: "Pão", preco: 9.00, quantidade: 9},
    {nome: "Requeijão", preco: 7.00, quantidade: 2}
]

// Variável para armazenar o valor total da compra
let valorTotal = 0;


// Exibindo a lista completa e calculando o valor total
console.log("Lista de Compras:");
listaMercado.forEach(item => {
    const totalItem = item.preco * item.quantidade;
    valorTotal = valorTotal + totalItem;
    console.log(`Produto: ${item.nome} - Preço: R$${item.preco.toFixed(2)} - Quantidade: ${item.quantidade} - Total: R$${totalItem.toFixed(2)}`);
});

// Exibindo o valor total da compra
console.log(`\nValor Total da Compra: R$${valorTotal.toFixed(2)}`);