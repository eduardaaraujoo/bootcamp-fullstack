//Conceito
//.then - é usado para programar o que deve acontecer após uma Promise ser resolvida
//.catch - é utilizado para capturar qualquer erro que ocorra durante a resolução da Promise ou nos handlers de .then anterior
//.finally - é usado para executar código após a Promise ser resolvida ou rejeitada, independente do resultado
//Async  / await
//Conceito



//Arrow functions
// const calcularMedia = (notas) => {
//     var somaDasNotas = 0;
//     for(let contador = 0; contador < notas.length; contador++){
//         somaDasNotas += notas[contador];
//     }
//     return somaDasNotas;
// }



//Promises
// const esperarCincoSegundos = () =>{
//     //resolve -> sucesso
//     //reject -> erro

//     return new Promise( (resolve, reject) =>{
//         setTimeout( () => {
//             resolve(10)
//         }, 5000) // 5000 milisegundos)
//     })
// }

// //then -> retorno de sucesso
// //catch -> retorno do erro
// //finally -> retorno depois do sucesso e do erro
// esperarCincoSegundos().then((resultadoDaPromise) => {
//     console.log(resultadoDaPromise);

// })
// .catch( () => {})
// .finally( () => {
//     console.log("Finalmente... terminou"); 
//     console.log("Final");
// })



const MEDIA_DA_CLASSE = 5

const compararComMediaDaClasse = (nota) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (nota > MEDIA_DA_CLASSE) {
                resolve("Sucesso. A nota do aluno é maior que a média da classe")
            } else if (nota === MEDIA_DA_CLASSE) {
                resolve("Sucesso: A nota do aluno é igual a média da classe")
            } else {
                reject("Erro. A nota do aluno é menor ue a média da classe")
            }
        }, 1500)
    })
}

const pegarNotaDoAluno = (nomeDoAluno) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (nomeDoAluno === "Caio") {
                resolve(7)
            } else if (nomeDoAluno === "João") {
                resolve(5)
            } else if (nomeDoAluno === "José") {
                resolve(3)
            } else {
                reject("Erro: aluno não encontrado")
            }
        }, 3000);
    })
}

// Simular uma consulta a uma API passando a nota como parâmetro
const verificarAprovacao = (nota) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (nota >= 7) {
                resolve("Aluno Aprovado")
            } else {
                reject("Aluno Reprovado")
            }
        }, 3000);
    })
}

// pegarNotaDoAluno("João")
//     .then((notaDoAluno) => {
//         console.log(notaDoAluno)
//         verificarAprovacao(notaDoAluno)
//             .then((sucessoDoVA) => {
//                 console.log(sucessoDoVA)
//                 compararComMediaDaClasse(notaDoAluno)
//                     .then((retornoDaComparacao) => {
//                         console.log(retornoDaComparacao)
//                     })
//                     .catch((retornoDeErroDaComparacao) => {
//                         console.log(retornoDeErroDaComparacao)
//                     })
//                     .finally(() => {
//                         console.log("Final da função compararComMediaDaClasse")
//                     })
//             })
//             .catch((erroDoVA) => {
//                 console.log(erroDoVA)
//                 compararComMediaDaClasse(notaDoAluno)
//                     .then((retornoDaComparacao) => {
//                         console.log(retornoDaComparacao)
//                     })
//                     .catch((retornoDeErroDaComparacao) => {
//                         console.log(retornoDeErroDaComparacao)
//                     })
//                     .finally(() => {
//                         console.log("Final da função compararComMediaDaClasse")
//                     })
//             })
//             .finally(() => { console.log("Final da função verificarAprovacao") })
//     })
//     .catch((resultadoDoErro) => {
//         console.log(resultadoDoErro)
//     })
//     .finally(() => {
//         console.log("Final da função pegarNotaDoAluno")
//     })


// verificarAprovacao(4)
//     .then((resultadoDoSucesso) => { console.log(resultadoDoSucesso) })
//     .catch((resultadoDoErro) => { console.log(resultadoDoErro) })
//     .finally(() => { console.log("Finalizou...") })

// Transformar o código acima em async await

const executarCodigo = async () => {

    try {
        const notaDoAluno = await pegarNotaDoAluno("Erivan")
        console.log({ notaDoAluno }) // => { notaDoAluno: 5 }
        const aprovacao = await verificarAprovacao(notaDoAluno)
        console.log({ aprovacao })
        const comparacao = await compararComMediaDaClasse(notaDoAluno)
        console.log({ comparacao })
    } catch (erro) {
        console.error(erro)
    } finally {
        console.log("Finally...")
    }


}

executarCodigo()

