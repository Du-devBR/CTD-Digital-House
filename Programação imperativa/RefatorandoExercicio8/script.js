
    var peso = prompt('Qual seu peso?');
    var altura = prompt('Qual sua Altura?');
    var resultadoImc = Math.round(peso / (altura * altura));
    var perfilImc = resultadoImc <= 18.5 ? 'MAGREZA' : 
                    resultadoImc >= 18.5 && resultadoImc <= 24.9 ? 'NORMAL' :
                    resultadoImc >= 25 && resultadoImc <=29.9 ? 'SOBREPESO' : 
                    resultadoImc >=30 && resultadoImc <= 39.9 ? 'OBSIDADE':'OBSIDADE GRAVE';
                    function calcularImc() {               
    alert(`Seu IMC é iqual a:${resultadoImc} e sua seu perfil é:${perfilImc}`);
}  

function alerta(){
    if (resultadoImc >= 25)
    window.confirm('bhfhjtej')
     if(window.confirm == '')
    switch (sim){
        case 'sim':
            alert('clique aqui')
    }
}

calcularImc()
alerta()
