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
    // propriedades padrão
    #_materia = "Inglês"; //o # significa que o atributo está privado, ou seja só pode ser acessada dentro da minha classe


    //constructor
    constructor(nome, notas, materia){     //primeira função a ser executada num classe
        this._nome = nome;
        this._notas = notas;
        this.#_materia = materia || this.#_materia;
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

    //Getters e setters
    //get -> pagar, ler, retornar
    //set -> colocar, configurar, atribuir ou "setar"

    get nome(){
        return this._nome;
    } 
    set nome(novoNome) {
        this._nome = novoNome;
    }
    get materia(){
        return this.#_materia;
    }
    set materia(novaMateria){
        this.#_materia = novaMateria
    }
    
}

//NEW -> Cada vez que você usa new com Aluno (de classe ou função), você está criando uma nova instância dessa classe. 
var aluno1 = new Aluno("Caio", [7,8,9], "Inglês");
var aluno2 = new Aluno("Eduarda", [9,6,9]);
var aluno3 = new Aluno("Fabiana", [4,6,9]);

//console.log(`A média do ${aluno1.nome} na prova de ${aluno1.materia} foi de: ${aluno1.calcularMedia()} `); 
console.log(aluno1.materia);
