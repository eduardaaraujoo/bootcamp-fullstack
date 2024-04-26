
/*
 
1. Crie uma Classe chamada Pessoa com as propriedades nome, sobrenome e idade, seus respectivos getters e setters, seus parâmetros de inicialização e crie um método para retornar o nome completo (nome e sobrenome) da pessoa.
    1.1 Criar classe Pessoa
    1.2 Criar o constructor (nome, sobrenome, idade)
    1.3 Criar os getters e setters
    1.4 Criari o método p/ retornar o nome completo

2. Crie uma classe chamada Aluno que herda a classe Pessoa. Os parâmetros exclusivos da classe aluno serão turma, notas (um array de notas) e média (a média das notas que deverá ser calculada no constructor da classe)
3. Crie um método dentro da classe aluno para retornar a média dele
4. Crie um método que retorne se o aluno está aprovado (media >= 7), de recuperação (media < 7 e media >=5) ou reprovado (media < 5)
5. Crie uma classe Professor que estende a classe Pessoa. O parâmetro exclusivo dessa classe será turma. Crie os getters e setters necessários. Crie um método que receba um array de alunos (instâncias da classe Aluno) e retorne os alunos aprovados, outro que retorne os de recuperação e outro para os reprovados.

*Lembre-se de verificar se a turma do aluno é igual a turma do professor 
 */

class Pessoa {
    constructor(nome, sobrenome, idade){
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._idade = idade;
    }


    get nome(){
        return this._nome;
    }
    set nome(novoNome){
        this._nome = novoNome;
    }

    get sobrenome(){
        return this._sobrenome;
    }
    set sobrenome(novoSobrenome){
        this._sobrenome = novoSobrenome;
    }

    get idade(){
        return this._idade;
    }
    set idade(novaIdade){
        this._idade = novaIdade;
    }


    nomeCompleto(){
        return `${this._nome} ${this._sobrenome}`;
    }
}

var pessoa = new Pessoa("Eduarda", "Araújo", 26);
console.log(pessoa.nomeCompleto());
console.log(pessoa.idade);





// 2. Crie uma classe chamada Aluno que herda a classe Pessoa. Os parâmetros exclusivos da classe aluno serão turma, notas (um array de notas) e média (a média das notas que deverá ser calculada no constructor da classe)

class Aluno extends Pessoa {

    #_turma = "";
    #_notas = [];
    #_media = 0;


    constructor(nome, sobrenome, idade, turma, notas){
        super(nome, sobrenome, idade)
        this.#_turma = turma;
        this.#_notas = notas;
        //Calcular média
    }
    get turma(){
        return this.#_turma;
    }
    set turma(novaTurma){
        this.#_turma = novaTurma;
    }

    get notas(){
        return this.#_notas;
    }
    set notas(novasNotas){
        this.#_notas = novasNotas;
    }

    get media(){
        return this.#_media
    }
    set media(novaMedia){
        this.#_media = novaMedia;
    }

    calcularMedia(){

        var somaDasNotas = 0;

          for(let contador = 0; contador < this.#_notas.length;  contador++){
            somaDasNotas = this.#_notas[contador];
          }

          return somaDasNotas / this.#_notas.length;
    }
}

var aluno = new Aluno();