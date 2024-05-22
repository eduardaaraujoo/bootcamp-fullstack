// const axios = require('axios');
import axios from "axios";

/*
    Aula 12

    Tópicos: 

    1. Consumo de APIs com fetch
    2. Consumo de APIs com axios

*/

//JSDoc: sintaxe para documentação simples em comentários dentro do próprio código

// /**
//  * Realiza a subtração de dois números de forma assíncrona.
//  * @param {number} num1 - O primeiro número a ser subtraído.
//  * @param {number} num2 - O segundo número a ser subtraído.
//  * @returns {Promise<number>} Uma Promise que resolve com o resultado da subtração num1 - num2.
//  * @throws {Promise<string>} Uma Promise que rejeita com uma mensagem de erro se algum dos parâmetros não for um número.
//  */
// const subtrairAssincrono = (num1, num2) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof num1 !== "number" || typeof num2 !== "number") {
//                 reject("Erro: Algum dos parâmetros não é um número")
//             } else {
//                 resolve(num1 - num2)
//             }
//         }, 3000)
//     })
// }

const URL = "http://localhost:3000"

// 1. Consumir a rota /livros que retorna um array de livros
// Toda consulta a uma API envolve uma requisição e uma resposta
// REQ -> RES

// fetch(URL + "/livros")
//     .then((response) => {
//         // console.log(response) // Não está formatada em JSON - JavaScriptObjectNotation
//         // Formatar, passar, converter para JSON
//         return response.json()
//     })
//     .then((responseJSON) => {
//         console.log(responseJSON)
//     })

// fetch(URL + "/livros")
//     .then(resposta => {
//         return resposta.json()
//     })
//     .then(respostaJson => {
//         respostaJson.forEach((elemento) => {
//             // 1. { title: "O Senhor dos Anéis", author: "J.R.R. Tolkien"}
//             console.log(elemento.title + " - " + elemento.author)
//         })
//     })

// 2. Buscar localização 
// fetch(URL + "/localizacao")
//     .then((response) => {
//         return response.json()
//     })
//     .then((responseJSON) => {
//         console.log(responseJSON)
//     })

// 3. Atualizar localização a cada 1 segundo
// setTimeout => executa algo APÓS X milisegundos
// setInterval => executa algo de X em X milisegundos
// setInterval(() => {
//   fetch(URL + "/localizacao", {
//     method: "GET"
//   })
//     .then((resposta) => resposta.json())
//     .then((respostaJSON) => {
//       console.log("Latitude:", respostaJSON.latitude);
//       console.log("Longitude:", respostaJSON.longitude);
//     });
// }, 1000);

// MÉTODOS/VERBOS HTTP
/**
 * GET -> LER/CONSULTAR DADOS
 * POST -> ENVIAR DADOS/NOVOS DADOS
 * PUT -> EDITAR DADOS JÁ CADASTRADOS
 * DELETE -> EXCLUIR DADOS JÁ CADASTRADOS
 */

// fetch(URL + "/localizacao", {
//   method: "GET"
// })
//   .then((resposta) => resposta.json())
//   .then((respostaJSON) => {
//     console.log("Latitude:", respostaJSON.latitude);
//     console.log("Longitude:", respostaJSON.longitude);
//   });

// fetch(URL + "/localizacao", {
//   method: "POST",
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({ latitude: -22.55052, longitude: -45.633308 })
// })
//   .then((resposta) => resposta.json())
//   .then((respostaJSON) => {
//     console.log("Latitude:", respostaJSON.latitude);
//     console.log("Longitude:", respostaJSON.longitude);
//   });

// Exercício 1: Criar uma requisição POST para adicionar um livro { title, author }

// const novoLivro = {
//   title: "Programação em Java",
//   author: "Deiel" 
// };

// fetch(URL + "/livros", {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(novoLivro)
// })
//   .then((retornoDoSucesso) => retornoDoSucesso.json())
//   .then((responseJSON) => {
//     console.log(responseJSON)
//   })
// .catch() retorno do erro
// .finally() retorno depois do sucesso e do erro

// Exercício 2: Reescrever o código da requisição anterior utilizando async await 

// 1. Criar uma função assíncrona (async function)
// 2. Escrever o bloco trycatch

// async function requisicao(){
//   await fetch();
// }

// const requisicaoAssincrona = async () => {
//   try {
//     let retornoDoSucesso = await fetch(URL + "/livros", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(novoLivro)
//     })
//     let responseJSON = await retornoDoSucesso.json()
//     console.log(responseJSON)
//   }
//   catch (erro) {
//     console.log(erro)
//   }
// }

// requisicaoAssincrona();

// Utilizando a biblioteca AXIOS -> Realizar requisições HTTP
// 1. Instalar a biblioteca: npm instal axios
// 2. Escrever o campo "type" no arquivo package.json e colocar o valor "module" (para que o import funcione)
// 3. Importar a biblioteca no arquivo: import axios from "axios"

const novoLivro = {
  title: "Programação em Java 2",
  author: "Deiel 2"
};

const requisicaoAssincrona = async () => {
  try {
    //                   axios.metodo(url_da_api_com_a_rota, corpoDaRequisicao)
    let response = await axios.post(URL + "/login", novoLivro);
    console.log(response.data)
  }
  catch (erro) {
    console.log(erro)
  }
};

requisicaoAssincrona();