// Ciclos em Javascript
// ************* FOR *****************

// Definimos uma variavel que possui um numero de inicio da nossa operação, por padrão colocamos o node de i.

// Exemplos

// for(var i=0; i <=4; i++){       //Definimos a variavel i=0; apos colocamos ate quando queremos que repita, nocaso i<=4; colocamos o incremento i++.
//     console.log(i)
// }

// Exercicios FOR

// 1. Repetir como um papagaio
// Crie um loop utilizando for que se repita 5 vezes. Dentro de cada repetição se deve mostrar no console a mensagem “Olá mundo”.

// for(var i = 0; i <=4; i++){
//     console.log('Olá mundo')
// }

// // 2. Contando números ímpares
// // Crie um loop for de 1 a 10, em que exiba no console apenas o valor das repetições de números ímpares. Dica: A ideia é que nas repetições ímpares de 0 ao 10 (1,3,5,7,9) sejam mostrados os números das repetições no console.

// var impar = [1, 3, 5, 7, 9 ]
// var par = [2, 4, 6, 8, 10]

// for(var i = impar; i <= impar; i++){
//     console.log(impar)
// }

// // 3. Criando a tabuada

// // Crie uma tabuada utilizando o for. Dica: Para essa tarefa você irá precisar utilizar dois loops (for).


// function tabuada(){
//     var valorTabuada = prompt('Qual o valor voce que mulplicar')
//     for(var i = 1; i <=10; i++){
//         console.log(valorTabuada + 'x' + i + '=' + (valorTabuada*i))
//     }

// }
// tabuada()




// Exercicios While
// 1. Programa em Javascript que mostra os números ímpares
//Escreva um aplicativo em Javascript que mostre todos os números ímpares de 1 até 100.

// function numeroImpares(){
//     var impar = 1
//     while(impar <=100){
//         console.log(impar)
//         impar+=2
//     }
// }
// numeroImpares()

// // 2. Programa em Javascript que mostra os números pares</li>
// // Escreva um aplicativo em Javascript que mostre todos os números pares de 1 até 100.

// function numerosPares(){
//     var par = 2
//     while(par <=100){
//         console.log(par)
//         par+=2
//     }
// }
// numerosPares()

// 3. Programa em Javascript que mostra os números pares e ímpares
// Escreva um aplicativo em Javascript que recebe um número inteiro e mostra os números pares e ímpares (separados), de 1 até esse inteiro.


// var pergunta = prompt('Digite um numero');
// function numerosImpar(){
//     var impar = 1;
//     while(impar <= pergunta){
//         console.log(impar)
//         impar+=2
//     }

// }
// function numerosPar(){
//     var par = 2;
//     while(par <= pergunta){
//         console.log(par)
//         par+=2
//     }

// }
// numerosImpar()
// numerosPar()

// 4. Programa em Javascript que calcula a média das notas de uma turma
// Escreva um programa que pergunte ao usuário quantos alunos tem na sala dele.
// Em seguida, através de um laço while, pede ao usuário para que entre com as notas de todos os alunos da sala, um por vez.
// Por fim, o programa mostra a média aritmética da turma.




function mediaDaTurma(){
    var quantidadeDeAlunos = prompt('Quantos alunos possui na sala de aula')
    var notas = 0
    var quantidadeDeNotas = [];
    
    
    
   while(notas < quantidadeDeAlunos){

    var nota = parseInt (prompt('Digite as notas de cada Aluno'))
    quantidadeDeNotas.push(nota)
    notas++

 }
 var somar = quantidadeDeNotas.reduce(function(valorAcumulador, valorTotal){
    return valorAcumulador + valorTotal
     })
     var mediaFinalDaTurma = somar/quantidadeDeAlunos
     console.log(`A media fina da turma é: ${mediaFinalDaTurma}`)
}



mediaDaTurma()














