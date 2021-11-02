console.log(".............Teste de Operações/Calculadora...........");



let firstNumber = prompt('digite')
let secondNumber = prompt('digite')

function somar(a, b) {
  a = firstNumber
  b = secondNumber
  return parseInt(a) + parseInt(b)
}

let resultadoSoma = somar()
console.log(`${firstNumber} + ${secondNumber} = ${resultadoSoma}`)

function subtrair(a, b) {
  a = firstNumber
  b = secondNumber
  return a - b
}

let resultadoSubtrair = subtrair()
console.log(`${firstNumber} - ${secondNumber} = ${resultadoSubtrair}`)

function multiplicar(a, b) {
  a = firstNumber
  b = secondNumber
  return a * b
}

let resultadoMultiplicar = multiplicar()
console.log(`${firstNumber} x ${secondNumber} = ${resultadoMultiplicar.toFixed(2)}`)

function dividir(a, b) {
  a = firstNumber
  b = secondNumber
  return a / b
}

let resultadoDividir = dividir()
console.log(`${firstNumber} / ${secondNumber} = ${resultadoDividir.toFixed(2)}`)


function quadradoDoNumero(a) {
  a = resultadoMultiplicar
  return a * a
}
let resultadoQuadrado = quadradoDoNumero()
console.log(`${resultadoMultiplicar.toFixed(2)}² = ${resultadoQuadrado.toFixed(2)}`)


function mediaDeTres(a, b, c) {
  a = resultadoSoma
  b = resultadoDividir
  c = resultadoMultiplicar
  return (parseInt(a) + parseInt(b) + parseInt(c)) / 3
}

let resultadoMediaDeTres = mediaDeTres()
console.log(`${resultadoSoma} + ${resultadoDividir.toFixed(2)} + ${resultadoMultiplicar.toFixed(2)} = ${resultadoMediaDeTres.toFixed(2)}`)
