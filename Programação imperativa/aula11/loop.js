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

for(var i = 0; i <=4; i++){
    console.log('Olá mundo')
}

// 2. Contando números ímpares
// Crie um loop for de 1 a 10, em que exiba no console apenas o valor das repetições de números ímpares. Dica: A ideia é que nas repetições ímpares de 0 ao 10 (1,3,5,7,9) sejam mostrados os números das repetições no console.

var impar = [1, 3, 5, 7, 9 ]
var par = [2, 4, 6, 8, 10]

for(var i = impar; i <= impar; i++){
    console.log(impar)
}

// 3. Criando a tabuada

// Crie uma tabuada utilizando o for. Dica: Para essa tarefa você irá precisar utilizar dois loops (for).


function tabuada(){
    var valorTabuada = prompt('Qual o valor voce que mulplicar')
    for(var i = 1; i <=10; i++){
        console.log(valorTabuada + 'x' + i + '=' + (valorTabuada*i))
    }

}
tabuada()






