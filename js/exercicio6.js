
/*
 
1. Crie uma Classe chamada Pessoa com as propriedades nome, sobrenome e idade, seus respectivos getters e setters, seus parâmetros de inicialização e crie um método para retornar o nome completo (nome e sobrenome) da pessoa.
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
        return `Nome Completo: ${this._nome} ${this._sobrenome}`;
    }
}

var pessoa = new Pessoa("Eduarda", "Araújo", 26);
console.log(pessoa.nomeCompleto());