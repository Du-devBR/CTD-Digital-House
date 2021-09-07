
var alimento = prompt("Digite o nome do alimento:\n1 - Pipoca (Tempo recomendado = 10 segundos);\n2 - Macarrão – (Tempo recomendado = 8 segundos)\n3 - Carne – (Tempo recomendado = 15 segundos)\n4 - Feijão – (Tempo recomendado = 12 segundos)\n5 - Brigadeiro – (Tempo recomendado = 8 segundos ");

if(alimento==1) {
    function tempoPreparo(){
        var pergunta = prompt("Gostaria de manter o tempo padrão? Sim = 1 e Não = 2")
        if (pergunta==1){
            alert("Prato pronto. Bom apetite")
        }
        else if(pergunta==2){
            var alteracao = prompt("Digite o tempo desejado")
        }
        if(alteracao >=10 && alteracao<=(10*2)){
            alert("Prato pronto. Bom apetite")
        }
        else if(alteracao >= (10*2)&& alteracao <=(10*3)){
            alert('Sua PIPOCA queimou')
        }
        else if(alteracao >=(10*3))
        alert('Kabummmmmmmm')
    }
    tempoPreparo()
}

else if(alimento==2) {
    function tempoPreparo(){
        var pergunta = prompt("Gostaria de manter o tempo padrão? Sim = 1 e Não = 2")
        if (pergunta==1){
            alert("Prato pronto. Bom apetite")
        }
        else if(pergunta==2){
            var alteracao = prompt("Digite o tempo desejado")
        }
        if(alteracao >=8 && alteracao<=(8*2)){
            alert("Prato pronto. Bom apetite")
        }
        else if(alteracao >= (8*2)&& alteracao <=(8*3)){
            alert('Seu MACARRÃO queimou')
        }
        else if(alteracao >=(8*3))
        alert('Kabummmmmmmm')
    }

tempoPreparo()
}

else if(alimento==3) {
    function tempoPreparo(){
        var pergunta = prompt("Gostaria de manter o tempo padrão? Sim = 1 e Não = 2")
        if (pergunta==1){
            alert("Prato pronto. Bom apetite")
        }
        else if(pergunta==2){
            var alteracao = prompt("Digite o tempo desejado")
        }
        if(alteracao >=15 && alteracao<=(15*2)){
            alert("Prato pronto. Bom apetite")
        }
        else if(alteracao >= (15*2)&& alteracao <=(15*3)){
            alert('Sua CARNE queimou')
        }
        else if(alteracao >=(15*3))
        alert('Kabummmmmmmm')
    }

tempoPreparo()
}

else if(alimento==4) {
    function tempoPreparo(){
        var pergunta = prompt("Gostaria de manter o tempo padrão? Sim = 1 e Não = 2")
        if (pergunta==1){
            alert("Prato pronto. Bom apetite")
        }
        else if(pergunta==2){
            var alteracao = prompt("Digite o tempo desejado")
        }
        if(alteracao >=12 && alteracao<=(12*2)){
            alert("Prato pronto. Bom apetite")
        }
        else if(alteracao >= (12*2)&& alteracao <=(12*3)){
            alert('Seu FEIJÃO queimou')
        }
        else if(alteracao >=(12*3))
        alert('Kabummmmmmmm')
    }

tempoPreparo()
}

else if(alimento==5) {
    function tempoPreparo(){
        var pergunta = prompt("Gostaria de manter o tempo padrão? Sim = 1 e Não = 2")
        if (pergunta==1){
            alert("Prato pronto. Bom apetite")
        }
        else if(pergunta==2){
            var alteracao = prompt("Digite o tempo desejado")
        }
        if(alteracao >=8 && alteracao<=(8*2)){
            alert("Prato pronto. Bom apetite")
        }
        else if(alteracao >= (8*2)&& alteracao <=(8*3)){
            alert('Seu BRIGADEIRO queimou')
        }
        else if(alteracao >=(8*3))
        alert('Kabummmmmmmm')
    }

tempoPreparo()
}

else {
    alert('Alimento Inexistente')
}

