var produtos = ["arroz", "carne", "vegetais", "macarrao", "chocolate"]


// Join()
// O comando join tem como função pegar os Arrays e tranformar em um unico Array.
// Exemplos de como funciona a junção
// Separando apanas por virgulas
console.log(produtos.join())

// Deixando todos juntos sem separação
console.log(produtos.join(''))

// deixando todos com espaçamento, quanto mais espaço entre as aspas maior o intervalo entre eles.
console.log(produtos.join(' '))

// espaçamento com -
console.log(produtos.join('-'))

// **************************************************************************************************

// Pop()
// O comando Pop tem como função remover o ultimo elemento e o retornar ao console
console.log(produtos.pop())

// **************************************************************************************************

// Push()
// O comando push tem como função acrescentar um elemtento ao fim do array
// Nele podemos ecrementar algum obejto sem que tenhamos que alterar o array original.
produtos.push('Feijão')
console.log(produtos)

// **************************************************************************************************

// Shift()
// O comando shift tem como função remover o primeiro item e retornalo ao console.
console.log(produtos.shift())

// **************************************************************************************************

// Unshift()
// O comando unshift tem como função adicionar um obeto ao começo do array
produtos.unshift('bebidas')
console.log(produtos)

