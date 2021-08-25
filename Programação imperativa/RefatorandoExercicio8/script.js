
    var peso = prompt('Qual seu peso?');
    var altura = prompt('Qual sua Altura?');
    var resultadoImc = Math.round(peso / (altura * altura));
    var perfilImc = resultadoImc <= 18.5 ? 'MAGREZA' : 
                    resultadoImc >= 18.5 && resultadoImc <= 24.9 ? 'NORMAL' :
                    resultadoImc >= 25 && resultadoImc <=29.9 ? 'SOBREPESO' : 
                    resultadoImc >=30 && resultadoImc <= 39.9 ? 'OBSIDADE' : 'OBSIDADE GRAVE';

function calcularImc() {               
    alert(`Seu IMC é iqual a: ${resultadoImc} e seu perfil é classificado como: ${perfilImc}`);
}  

function agendar(){
    if(resultadoImc > 25){
    var agendamento = confirm('Você gostaria de agendar um Nutricionista?');
    }
    if(agendamento){
        alert('Vamos agendar');
    }
    else {
        alert('Muito obrigado por reliazar seu teste')
     }
}

        function agenda(){
            if(agendamento){
               var nome = prompt('Qual seu nome');
               var diaDaSemana = prompt('Qual o melhor dia da Semana para a Consulta');
               var horario = prompt("Qual o melhor horario?")
               var confirmar = confirm(`Sua consulta será agendada para ${diaDaSemana} as ${horario}`)

            if(confirmar){
                alert(`Muito obrigado, sua consulta está confirmada na ${diaDaSemana} as ${horario} com a Dra. Luana Nagydai`)
            } 
            else{
                alert('Preencha novamente o dia e horario desejado')
      }
    }
    

    }
  
    

       
       
   
        
   
calcularImc()
agendar()
agenda()
