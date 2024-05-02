//Sobre API's
//aula do dia 23/04
//PAROU EM 1H E 29 MIN  
 
// const somar = (a, b) => a + b

// const somar = (a, b) => {
//     return a + b;
// }
// console.log(somar(6,2));


//Reescreva a função a seguir com arrow function
/* function subtrair (num1, num2){
   return num1 - num2;
 }

const subtrair = (num1, num2) => {
    return num1 - num2;
}

console.log(subtrair(7, 3)); 
*/

//PASSO A PASSO PARA CRIAR UMA PROMISE
/*
1. Crio função
2. Escrevo o retorno da função sendo uma instancia promise
3.Escreva a callback da promise (a função de parametro)
4.Escrever o "caso" do sucesso = resolve
5. Opcional: Escrever o caso do erro = reject
 */
// const subtrairAssincrono = (num1, num2) => {
//     return new Promise((resolve, reject) =>{
//          setTimeout(() => {
//             resolve(num1 - num2)
//          }, 3000)
//     });

// }  
// subtrairAssincrono(57,28).then((resultado) => { console.log(resultado)})  //then() é um método e ele da retorno do sucesso e o parametro do THEN é uma função dentro dela
// //Caso de erro: não passar número como parâmetro



// //Transformar o código acima em async await
// const executarCodigo = async () => {
//     try{
//         const notaDoAluno = await pegarNotaDoAluno("Eduarda");
//         console.log({ notaDoAluno }); // => { notaDoAluno }
//         const aprovacao = await verificarAprovacao(notaDoAluno);
//         console.log({ aprovacao });
//         const comparacao = await compararComMediaDaClasse(notaDoAluno);
//         console.log({ comparacao });
//     } catch (erro){
//         console.error(erro);
//     } finally {
//         console.log("Finally");
//     }
// }




//Consumo de APIs
const URL = "https://7cc1-2804-1b0-f189-3f57-9364-62f2-223d-e765.ngrok-free.app/books";
