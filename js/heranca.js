//herança
//herdar algo = extends

// class Pessoa {
//     constructor(nome) {
//         this.nome = nome;
//     }
//     retornarNome(){
//         return this.nome;
//     }
// }

// class Aluno extends Pessoa { //extends herdar toda a class que esta extendendo
//     retornarMedia(){
//         return 10
//     }
// }


// class Professor extends Pessoa{
//     baterPonto(){
//         console.log("O professor " + this.nome + " está batendo o ponto às " + new Date());
//     }
// }

// var pessoa1 = new Pessoa("Joana");
// var aluno1 = new Aluno("Marcela");
// var professor1 = new Professor("Roberto");

// console.log(aluno1.nome);
// console.log(pessoa1.nome);






//EXERCÍCIO COM PASSO A PASSO:
//Crie uma class de funcionários que receba o nome, sobrenome e o setor do funcionario como parâmetro de inicialização.
    //1.1 Criar classe funcionario
    //1.2 Definir constructor
    //1.3 Definir os parâmetros de inicialização
    //1.4 Definir as propriedades da classe 
//Crie métodos com getters e setters
//Crie um atributo salário dentro da classe
//Crie um método para retornar o salário do funcionário de acordo com o setor 
//(deve ter pelo menos 3 setores com diferentes salários entre si
//Crie um método para retornar o nome completo do funcionário o setor e o salário dele
//Crie um método para verificar se o funcionário terá aumento. 

class Funcionarios {

    _salario = 0;    //não precisa usar o this

    constructor(nome, sobrenome, setor){
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._setor = setor;

        if(setor === "TI"){
            this._salario = 3500;
        } else if (setor === "RH" ){
            this._salario= 3000;
        }else{
            this._salario = 2700;
        }
    }

    get nome(){             //responsável pela leitura, logo ele retorna a propiedade
      return this._nome;
    }
    set nome(novoNome){     //responsável pela atribuição, logo ele altera o valor
        this._nome = novoNome;
    }

    get sobrenome(){
        return this._sobrenome;
    }
    set sobrenome(novoSobrenome){
        this._sobrenome = novoSobrenome;
    }

    get setor(){
        return this._setor;
    }
    set setor(novoSetor){
        this._setor = novoSetor;
    }

    get salario(){
        return this._salario;
    }
    set salario(novoSalario){
        this._salario = novoSalario;
    }

    alterarnome(novoNome){
        this._nome = novoNome;

    }

    //isso é um método e se usa dentro de uma classe
    exibirDadosFuncionario(){
       return `Nome completo: ${this._nome} ${this._sobrenome}, Setor: ${this._setor}, Salário: ${this._salario}`;
    }

    verificaAumento(){
        if(this._setor === "TI"){
            return "TI tem aumento de salário";
        }else{
            return "Esse setor não tem aumento";
        }
    }
}

var funcionarios = new Funcionarios("Eduarda", "Araújo", "TI");
console.log(funcionarios.exibirDadosFuncionario());  //chamou o método class e retornou
// funcionarios.exibirDadosFuncionario();    // Chame o método usando uma instância da classe
console.log(funcionarios.verificaAumento());