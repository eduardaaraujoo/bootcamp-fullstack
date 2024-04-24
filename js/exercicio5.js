//Orientado a objetos (POO)
 
// var alunos = [
//     { nome: "Caio", notas: [7,8,9] },
//     { nome: "Fabiana", notas: [4,6,9] },
//     { nome: "Eduarda", notas: [9,6,9] }
// ]

// function calcularMedia(notas) {
//     var contador = 0;
//     var soma = 0;
//     while(contador < notas.length){
//         soma += notas[contador];
//         contador++;
//     }

//     return soma / notas.length; 
// }


// console.log(calcularMedia(alunos[0].notas));
// console.log(calcularMedia(alunos[1].notas));
// console.log(calcularMedia(alunos[2].notas));




class Aluno {
    constructor(nome, notas, materia){     //primeira função a ser executada num classe
        this.nome = nome;
        this.notas = notas;
        this.materia = materia || "Inglês"
    }

    calcularMedia() {
        var contador = 0;
        var soma = 0;
        while(contador < this.notas.length){
            soma += this.notas[contador];
            contador++;
        }
        return soma / this.notas.length;
    }
}

var aluno1 = new Aluno("Caio", [7,8,9]);
var aluno2 = new Aluno("Eduarda", [9,6,9]);
var aluno3 = new Aluno("Fabiana", [4,6,9]);

console.log(`A média do ${aluno1.nome} na prova de ${aluno1.materia} foi de: ${aluno1.calcularMedia()} `);