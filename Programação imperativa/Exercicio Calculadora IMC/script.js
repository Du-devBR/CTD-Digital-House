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

function calcularImc(){
var usuario = prompt("Qual seu nome?");
alert(`Ola, ${usuario}, digite as informações a seguir para realizarmos seu calculo`);
var idade = prompt("Qual sua Idade");
var peso = prompt("Qual seu peso");
var altura = prompt("Qual sua altura");
var resultadoImc = Math.round(peso/(altura*altura));
var perfilImc = null;
var consultar = null;
var confirmar = null;
var confirmarAgendamento = null;
     if(resultadoImc < 18.5){
         perfilImc = 'MAGRESA';
    }
     else if(resultadoImc >= 18.5 && resultadoImc <= 24.9){
         perfilImc = 'NORMAL';
     }
     else if(resultadoImc >= 25 && resultadoImc <= 29.9){
        perfilImc = 'SOBREPESO';
    }
    else if(resultadoImc >= 30 && resultadoImc <= 34.9){
        perfilImc = 'OBESIDADE';
    }
    else if(resultadoImc >= 35){
        perfilImc = 'OBESIDADE-GRAVE';
    }
    else{
        alert('Obrigador pela sua resposta')
    }
    alert(`Seu IMC é iqual a: ${resultadoImc} e seu perfil é classificado como: ${perfilImc}`);
    
    if(perfilImc == 'SOBREPESO' || perfilImc == "OBESIDADE" || perfilImc == 'OBESIDADE-GRAVE' ){
        consultar = confirm('Voce gostaria de agendar um nutricionista?')
    }

    else {
        alert('Muito obrigado por realizar seu teste em nosso site')
    }
    if(consultar == true){
               var nome = prompt('Qual seu nome');
               var diaDaSemana = prompt('Qual o melhor dia da Semana para a Consulta');
               var horario = prompt("Qual o melhor horario?")
               confirmarAgendamento = confirm(`Sua consulta será agendada para ${diaDaSemana} as ${horario}`)
               
    }
    else if(consultar == false){
        alert('Muito obrigado, te esperamos pra uma envetual consulta')
    }

    if(confirmarAgendamento == true){
        alert(`${nome}, muito obrigado. Sua consulta está confirmada na ${diaDaSemana} as ${horario} com a Dra. Luana Nagydai`)
    }
    else if(confirmarAgendamento == false) {
        alert('Vamos marcar novamente')
    }
   

}

calcularImc()

