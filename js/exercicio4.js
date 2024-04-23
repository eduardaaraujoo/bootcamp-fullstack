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

// { nome: "", categoria: "", preco: 0 }

function calcularTotalDeVendasPorCategoria(produtosVendidos) {
    var categorias = []; // =>  array de string

    // Descobrir quais categorias existem
    var contador = 0
    while (contador < produtosVendidos.length) {
        categorias.push(produtosVendidos[contador].categoria);
        contador++;
    }

    // Cria um array com elementos únicos
    categorias = [...new Set(categorias)];
    // categorias: ["roupa", "comida"]

    // [  { categoria: "roupa", valorTotal: 100 }, { categoria: "comida", 50 }  ]

    // Cria um array de objetos inicializando o valorTotal como 0
    var totalPorCategoria = []
    contador = 0
    while (contador < categorias.length) {
        totalPorCategoria.push({ categoria: categorias[contador], valorTotal: 0 });
        contador++;
    }

    // Percorrer o array e somar o valorTotal de cada categoria
    // produtos: []...

    /**
     * totalPorCategoria: [
                            { categoria: 'roupa', valorTotal: 0 }, // 0
                            { categoria: 'comida', valorTotal: 0 } // 1
                        ]
     */

    contador = 0;
    var contador2 = 0;

    // for (let contador = 0; contador < produtosVendidos.length; contador++) {
    // }

    while (contador < produtosVendidos.length) {
        contador2 = 0;
        while (contador2 < totalPorCategoria.length) {
            if (produtosVendidos[contador].categoria === totalPorCategoria[contador2].categoria) {
                totalPorCategoria[contador2].valorTotal += produtosVendidos[contador].preco;
            }
            contador2++;
        }
        contador++;
    }
    return totalPorCategoria;
}

var listaDeProdutos = [
    { nome: "Camiseta", categoria: "roupa", preco: 20 },
    { nome: "Casaco", categoria: "roupa", preco: 40 },
    { nome: "Refrigerante", categoria: "bebidas", preco: 10 },
    { nome: "Pão", categoria: "comida", preco: 5 }
]

console.log(calcularTotalDeVendasPorCategoria(listaDeProdutos));


//Laços de repetição
var contador = 1;
//while
while(contador < 11){
    console.log(contador);
    contador++;
}

//for -> for(inicialização do contador; condição ; incremento){}
for(var contador2 = 0; contador2 < 11; contador2++){
    console.log(contador2);
}