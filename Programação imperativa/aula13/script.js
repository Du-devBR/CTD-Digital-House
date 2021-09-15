//OBJETO LITERAL

var professor = {
    nome:'Willian',
    sobrenome:'santana',
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`;    //O 'this' sempre irá fazer referencia ao elemento pai
    }
}
console.log(professor.nome);            //Chama o nome
console.log(professor.sobrenome);       //Chama o sobrenome
console.log(professor.nomeCompleto());  //Chama a função  ****não esquecer das ()



//JSON
// Não é possivel usar função dentro do json, pois ele é um bloco de texto e não possui parte logica.

var aluno = {
    nome:'eduardo',
    sobrenome:'ananias',
}

var api = JSON.stringify(aluno)    //Aqui convertamos em JSON


// Converter JSON em um objeto literal

var objetoLiteral =JSON.parse(api)
console.log(objetoLiteral)
console.log(objetoLiteral.nome)
console.log(objetoLiteral.sobrenome)
console.log(objetoLiteral.nomeCompleto)