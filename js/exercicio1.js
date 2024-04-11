// 1. Crie uma variável para armazenar o nome de uma pessoa e exiba-o.

var nome = 'Maria';
console.log(nome);


// 2. Crie uma variável para armazenar o preço de uma camiseta e exiba-o.
var valorCamisa = 54.00;
console.log(valorCamisa.toFixed(2));


// 3. Corrija o código a seguir: let cidade = Recife
let cidade = 'Recife';

// 4.  Crie duas variáveis e exiba a soma, subtração, divisão, multiplicação entre elas separadamente. 
var a = 4;
var b = 2;

var soma = a + b;
console.log(soma);

var sub = a - b;
console.log(sub);

var div = a / b;
console.log(div);

var mul = a * b;
console.log(mul);

// 5. Crie duas variáveis, atribua um valor numérico a cada uma delas. Após isso escreva um código if else para exibir se a primeira variável é maior que a segunda.
 var f1 = 18;
 var f2 = 20;

 if (f1 > f2) {
    console.log('F1 é maior que F2');
 } else {
    console.log('F1 NÃO é maior que F2');
 }


// 6. Crie tres variáveis numericas. Tire a média delas e exiba se o aluno está aprovado se a nota for maior ou igual a 7.
var nota1 = 6;
var nota2 = 8;
var nota3 = 5;

var media = nota1 + nota2 + nota3 / 3;

if (media >= 7){
    console.log("Parabéns, você foi aprovado!")
}else{
    console.log("Você foi reprovado!")
}
