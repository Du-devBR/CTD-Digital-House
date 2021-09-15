// //OBJETO LITERAL

// var professor = {
//     nome:'Willian',
//     sobrenome:'santana',
//     nomeCompleto: function(){
//         return `${this.nome} ${this.sobrenome}`;    //O 'this' sempre irá fazer referencia ao elemento pai
//     }
// }
// console.log(professor.nome);            //Chama o nome
// console.log(professor.sobrenome);       //Chama o sobrenome
// console.log(professor.nomeCompleto());  //Chama a função  ****não esquecer das ()



// //JSON
// // Não é possivel usar função dentro do json, pois ele é um bloco de texto e não possui parte logica.

// var aluno = {
//     nome:'eduardo',
//     sobrenome:'ananias',
// }

// var api = JSON.stringify(aluno)    //Aqui convertamos em JSON


// // Converter JSON em um objeto literal

// var objetoLiteral =JSON.parse(api)
// console.log(objetoLiteral)
// console.log(objetoLiteral.nome)
// console.log(objetoLiteral.sobrenome)
// console.log(objetoLiteral.nomeCompleto)


// FUNÇÃO CONSTRUTORA

// let carro = {
//     marca: 'fiat',
//     modelo: 'uno',

// };
// function Carro(valorMarca, valorModelo){          // Ao realizar a função iremos dizer para guardar uma nova informação.
//     this.marca = valorMarca;                      // Usar o this. para chamar a propriedade da outra função
//     this.modelo = valorModelo
// }

// console.log(carro)                                // Temos que colocar 'new' para atribuir o novo valor
// console.log(new Carro('nissan', 'tiida'))

let contas = {
    clienteNome:prompt('Nome do cliente'),
    numeroDaConta:prompt("Qual o numero da conta"),
    tipoDeConta1: 'corrente',
    tipoDeConta2: 'poupança',
    imprimirTipoDeConta: function(valorTipoDeConta) {
        var modelo = window.confirm('Conta corrente?')
        if (modelo == true) {
            return this.tipoDeConta1
        }
        else{
            return this.tipoDeConta2
        }
    },
    saldo: 0,


}





console.log(`Titular da Conta: ${contas.clienteNome}`)
console.log(`Numero da conta: ${contas.numeroDaConta}`)
console.log(`Tipo da conta: ${contas.imprimirTipoDeConta()}`)
console.log(`Saldo Autal: ${contas.saldo}`)




