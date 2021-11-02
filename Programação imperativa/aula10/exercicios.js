
// function imprimirInverso() {
//   let texto = ['Então', 'você', 'deve', 'fazer', 'uma', 'função', 'que', 'o', 'modifique', 'e', 'inverta', 'a', 'ordem', 'de', 'seus', 'elemento']
//   console.log(texto.length)
//   console.log(texto.reverse()) //Utilizado reverse

// }

// imprimirInverso()

// function somarArray() {
//   let arrayParaSoma = [2, 4, 4];
//   let somar = arrayParaSoma.reduce(function (valorAcumulador, valorAtual) { //utilizado reduce para pegar o valor do acumulado dos indices e somar com o atual
//     return valorAcumulador + valorAtual
//   })
//   console.log(somar)

// }

// somarArray()

// function tranformandoEmString() {
//   let valorArray = ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
//   let valorString = valorArray.join('')  //utilizando join para tranformar em string e utilizado '' sem espaço para tranformar em uma palavra
//   console.log(valorString)
// }

// tranformandoEmString()


// Arrays dos filmes
let listaDeFilmeAcao = ["star wars", "matrix", "mr. robot", "o preço do amanhã", "a vida é bela"]
console.log(listaDeFilmeAcao.slice())

let listaFilmeInfantil = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]
console.log(listaFilmeInfantil.slice())



function colecaodeFilmes() {

  let colecao = [filmesAcaoUpper().concat(filmesInfantilUpper())]
  let colecaoSomenteFilmes = colecao.pop()
  let retirarJogoDaLista = colecaoSomenteFilmes.pop()    //Elemento salvo em uma variavel, caso seja necessario consultar
  return colecaoSomenteFilmes

}

let colecaoCompletaDeFilmes = colecaodeFilmes()

let colecaoDeFilmesParaScore = colecaoCompletaDeFilmes.map(function (item, indice) {
  return item
})

console.log('Lista de todos os filmes do catalogo:', colecaoCompletaDeFilmes)



function filmesAcaoUpper(filmesAcao) {

  let filmesAcaoUpperCase = listaDeFilmeAcao.map(function (item) {
    return item.toUpperCase()
  })
  return filmesAcao = filmesAcaoUpperCase

}

let acao = filmesAcaoUpper()
console.log('teste', acao)

function filmesInfantilUpper(filmesInfantil) {

  let filmesInfantilUpperCase = listaFilmeInfantil.map(function (item) {
    return item.toUpperCase()
  })
  return filmesInfantil = filmesInfantilUpperCase

}

let infantil = filmesInfantilUpper()

console.log('teste', infantil)


function notasAsiaScore() {

  const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
  let asiaScoresMap = asiaScores.map(function (item, indice) {
    return item
  })
  console.log(asiaScoresMap)


  let rankingAsia = [
    {
      filme: colecaoDeFilmesParaScore[0],
      nota: asiaScores
    },
    {
      filme: colecaoDeFilmesParaScore[1],
      nota: asiaScores
    },
    {
      filme: colecaoDeFilmesParaScore[2],
      nota: asiaScores
    },
    {
      filme: colecaoDeFilmesParaScore[3],
      nota: asiaScores
    },
    {
      filme: colecaoDeFilmesParaScore[4],
      nota: asiaScores
    },
    {
      filme: colecaoDeFilmesParaScore[5],
      nota: asiaScores
    },
    {
      filme: colecaoDeFilmesParaScore[6],
      nota: asiaScores
    },
    {
      filme: colecaoDeFilmesParaScore[7],
      nota: asiaScores
    },
    {
      filme: colecaoDeFilmesParaScore[8],
      nota: asiaScores
    },

  ];

  console.log(rankingAsia)
}
notasAsiaScore()


function notasEuroScores() {

  const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
  let euroScoresMap = euroScores.map(function (item, indice) {
    return item
  })
  console.log(euroScoresMap)


  let rankingEuro = [
    {
      filme: colecaoDeFilmesParaScore[0],
      nota: euroScores
    },
    {
      filme: colecaoDeFilmesParaScore[1],
      nota: euroScores
    },
    {
      filme: colecaoDeFilmesParaScore[2],
      nota: euroScores
    },
    {
      filme: colecaoDeFilmesParaScore[3],
      nota: euroScores
    },
    {
      filme: colecaoDeFilmesParaScore[4],
      nota: euroScores
    },
    {
      filme: colecaoDeFilmesParaScore[5],
      nota: euroScores
    },
    {
      filme: colecaoDeFilmesParaScore[6],
      nota: euroScores
    },
    {
      filme: colecaoDeFilmesParaScore[7],
      nota: euroScores
    },
    {
      filme: colecaoDeFilmesParaScore[8],
      nota: euroScores
    },

  ];

  console.log(rankingEuro)
}
notasEuroScores()
