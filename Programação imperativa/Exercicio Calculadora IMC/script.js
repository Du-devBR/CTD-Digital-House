// //********Operadores matemáticos(+, -, *, /, &, etc)********
// var valor1 = 4;
// var valor2 = 3;
// var resultado = valor1 * valor2
// console.log(resultado)

// //********Operadores de comparação (<=, >=, !=, ==, etc)********
// var resultadoComparacao = valor1==valor2;
// console.log(resultadoComparacao)

// //Operador ternario (Condição)
// var resul = valor1 > valor2 ? 'Isso é Verdeiro' : 'Isso é falso';
// console.log(resul)

// //********Função*********
// //Declara
// function somar() {
//     console.log(valor1 + valor2);
// }
// //Invoca
// somar()

// //Função com parametro
// function multiplica(valor3, valor4) {
//     console.log(valor3 * valor4);
// }
// multiplica(2, 2);
// multiplica(2, 3);
// multiplica(2, 8);


var usuario = prompt("Qual seu nome?");
var idade = prompt("Qual sua Idade")
var peso = prompt("Qual seu peso");
var altura = prompt("Qual sua altura");
var imc = Math.round(peso/(altura*altura));

function calculo(){
    alert(`Seu IMC é ${imc}`)
}
calculo()
