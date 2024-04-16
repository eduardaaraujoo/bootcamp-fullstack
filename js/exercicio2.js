//1 - Acessar o meu Array
// var listaDeCompras = ["Torta", "Feijão", "Pão"];
// console.log(listaDeCompras);




// 2 - Acessa o primeiro item do meu Array
// var listaDeCompras = ["Torta", "Feijão", "Pão"];
//console.log(listaDeCompras[0]);              //o colchetes quer dizer índice
//o PUSH vai add um novo elemento ao final do array
// listaDeCompras.push("Sorvete");
// console.log(listaDeCompras);

// //ou pode adicionar assim:
// listaDeCompras = [...listaDeCompras, "Açucar", "Sal"];
// console.log(listaDeCompras)


//3 - POP remove o último item ou elemento do array
// var listaDeCompras = ["Torta", "Feijão", "Pão", "Açucar", "Sal"];
// listaDeCompras.pop([2]);
// console.log(listaDeCompras);

//SPLICE: remove a partir do indice que foi desejado
// var listaDeCompras = ["Torta", "Feijão", "Pão", "Açucar", "Sal"];
// // listaDeCompras.splice(3);
// listaDeCompras.splice(2, 1); //indice, quantidade
// console.log(listaDeCompras);


//LENGTH: tamanho do array
// var listaDeCompras = ["Torta", "Feijão", "Pão", "Açucar", "Sal"];
// console.log(listaDeCompras.length);


//EXERCICIO

//1. crie um array de pelo menos 3 elementos
// var nomes = ["Thaiane", "Eduarda", "Bárbara"];

//2. crie um array de pelo menos 5 elementos e add um item a ele.
// var nomes = ["Thaiane", "Juliana", "Maria", "Bárbara", "Eduarda"];
// nomes.push("Luke");
// console.log(nomes);

// //3. crie elemento de 5 elementos e remove um item.
// var nomes = ["Thaiane", "Juliana", "Maria", "Bárbara", "Eduarda"];
// nomes.pop();
// console.log(nomes);


//Objetos
//São estruturas de dados específicas que podem englobar strings, numeros, booleanos, etc.
//Para usar um objeto, usa-se {} => Chave e o valor
// var aluno = {
//     nome: "Eduarda",
//     media: 10
// }

// console.log(aluno);
// console.log(aluno.media);
// console.log(aluno["nome"]);
// console.log(aluno.nome);


//Exercício
//Criar uma função que recebe um array e retorne se o aluno foi aprovado
function verificarAprovacao(nota) {
    var media = (nota[0] + nota[1] + nota[2]) /3
    
    if(media >= 7){
        return"Aprovado!"
    }else{
        return "Reprovado!"
    }
}
console.log(calcularNota([6,8,2]));