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
setInterval(() => {
    fetch(URL + "/localizacao")
      .then((resposta) => resposta.json())
      .then((respostaJSON) => {
        console.log("Latitude:", respostaJSON.latitude);
        console.log("Longitude:", respostaJSON.longitude);
      });
  }, 1000);

  // Cannot get route /
  