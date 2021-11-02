// Crie uma função que converta polegadas em centímetros.
// Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.


function coversorMedidas() {
  const valorPolegadas = 5
  const valorCentimetros = valorPolegadas * 2.54
  console.log(`Valor = ${valorCentimetros}cm`)
}

coversorMedidas()

console.log('**************************************************************************')

// Crie uma função que receba uma string e a converta em um URL.
// ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"


function nomeSite() {
  const valorSite = 'google';
  const urlSite = 'https://www.google.com.br/'
  console.log(`${valorSite} = ${urlSite}`)
}
nomeSite()

console.log('**************************************************************************')

// Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).
function frase() {
  const valorFrase = 'Olá, eu sou um Digial Houser';
  const valorponto = '!';
  console.log(valorFrase + valorponto)
}
frase()

console.log('**************************************************************************')

// Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.

function idadeCanina() {
  const idadehumana = 2;
  const idadeCachorro = idadehumana * 7;
  console.log(`Seu cachorro tem ${idadeCachorro} anos em idade canina`)
}
idadeCanina()

console.log('**************************************************************************')

// Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.
// PS: considere que você trabalhe 160 horas no mês.

function horaTrabalho() {
  const salarioMensal = 3000
  const valorHoraTrabalhada = salarioMensal / 160
  console.log(`Sua hora de trabalho é ${valorHoraTrabalhada.toFixed(2)} reais`)
}
horaTrabalho()

console.log('**************************************************************************')

// Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas.
// Em seguida, execute a função, testando diferentes valores.

function calculoImc() {
  const valorAltura = 1.8;
  const valorPeso = 90;
  const imc = valorPeso / (valorAltura * valorAltura)
  console.log(`Considerando sua altura = ${valorAltura} Metros e seu peso = ${valorPeso}kg.
  Seu valor de IMC é: ${imc.toFixed(2)}`)
}
calculoImc()

console.log('**************************************************************************')

// Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne.
// Investigue o que o método de .toUpperCase() faz.

function upperCase() {
  const textoEmMinisculo = 'vou dominar javascript na minha jornada de programador';
  const textoEmMaiusculo = textoEmMinisculo.toUpperCase();
  console.log(textoEmMaiusculo)
}
upperCase()

console.log('**************************************************************************')

// Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro.

function parametro(nome, idade, trueOrFalse) {
  nome = 'eduardo', idade = 28, trueOrFalse = true;
  console.log(`${nome} é um tipo de dado = ${typeof (nome)}`);
  console.log(`${idade} é um tipo de dado = ${typeof (idade)}`);
  console.log(`${trueOrFalse} é um tipo de dado = ${typeof (trueOrFalse)}`);

}
parametro()

console.log('**************************************************************************')


// Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência.
// Dica: Investigue se o objeto Math tem entre suas propriedades o número Pi.

function raioDoCirculo() {
  const valorRaio = 20;
  const valorCircunferencia = 2 * Math.PI * valorRaio;
  console.log(`O valor da circunferencia é: ${valorCircunferencia.toFixed(3)}cm`)
}
raioDoCirculo()
