//Conceito
//.then - é usado para programar o que deve acontecer após uma Promise ser resolvida
//.catch - é utilizado para capturar qualquer erro que ocorra durante a resolução da Promise ou nos handlers de .then anterior
//.finally - é usado para executar código após a Promise ser resolvida ou rejeitada, independente do resultado
//Async  / await
//Conceito



//Arrow functions
const calcularMedia = (notas) => {
    var somaDasNotas = 0;
    for(let contador = 0; contador < notas.length; contador++){
        somaDasNotas += notas[contador];
    }
    return somaDasNotas;
}