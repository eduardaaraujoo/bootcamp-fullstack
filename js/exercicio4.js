// let numbers = [1,2,3,4,5];
// let sum = 0;
// let i = 0;

// while (i < numbers.length){
//     sum += numbers[i];
//     i++;
// }

// console.log(sum);
// i = 0: sum = sum + numbers[0] => sum = 0 + 1 => sum = 1
// i = 1: sum = sum + numbers[1] => sum = 1 + 2 => sum = 3
// i = 2: sum = sum + numbers[2] => sum = 3 + 3 => sum = 6
// i = 3: sum = sum + numbers[3] => sum = 6 + 4 => sum = 10
// i = 4: sum = sum + numbers[4] => sum = 10 + 5 => sum = 15




//Exercicio
/**Crie uma função que receba uma lista de objetos representando vendas de produtos, onde cada objeto tem um nome do produto, uma categoria e um valor de venda. A função deve calcular o total de vendas para cada categoria de produto e retornar um objeto contendo essas informações */

function calcularTotalVendasPorCategorias(produtosVendidos){
    var categorias = [];
    var contador = 0; //o contador ele controla quantas vezes a função do while vai ser exeutada
   
    //descobrir quais categorias existem 
    while(contador < produtosVendidos.length){
        categorias.push(produtosVendidos[contador].categoria)
        contador++
    }
    //set cria um array com elementos unicos 
    categorias = new Set([...categorias]);
    return categorias;
    
}
    // var totalVendido = 0;

//     while(contador < produtosVendidos.length) { //o length se usa pra saber quantos elementos tem na lista
//        // totalVendido += produtosVendidos[contador].preco;
//         totalVendido = produtosVendidos[contador].preco + totalVendido;
//         contador++;
//     }

//     return totalVendido;
// }

//criar uma lista de produtos
var listaProdutos = [
    {nome: "Camiseta", categoria: "Roupas", preco: 20},
    {nome: "Hamburguer", categoria: "Comida", preco: 16},
    {nome: "Smartwatch", categoria: "Eletrônico", preco: 348}
]
//chamar a função
console.log(calcularTotalVendasPorCategorias(listaProdutos));