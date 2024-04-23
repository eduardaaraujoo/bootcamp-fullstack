//Orientado a objetos (POO)
 
var aluno = { nome: "Caio", notas: [7,8,9] }
var aluno2 = { nome: "Eduarda", notas: [9,6,9] }

function calcularMedia(notas) {
    var contador = 0;
    var soma = 0;
    while(contador < notas.length){
        soma += notas[contador];
    }

    return soma / notas.length; 
}

console.log(calcularMedia(aluno.notas));

