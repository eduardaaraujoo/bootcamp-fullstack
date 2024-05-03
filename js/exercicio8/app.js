

const URL = "https://9554-2804-1b0-f189-3f57-9364-62f2-223d-e765.ngrok-free.app" //rota taiz da API


//1. Consumir a rota livros que retorna um array de livros
// Toda consulkta a uma API envolve uma requisição e uma resposta
fetch(URL + "/livros")
    .then((response) => {
        return response.json()
    })
    .then((responseJSON) => {
        console.log(responseJSON)
    })