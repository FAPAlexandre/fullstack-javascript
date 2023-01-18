//For clássico - Geralmente com iteráveis(array ou string)
//For in - Retorna o indice ou chave(string,array ou objeto)
//For of - Retorna o valo em si (iteráveis(array ou string)

const nomes = ['Alexandre', 'Paixão', 'Laura']

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i])
    console.log('--------------------------------')
}

for ( let i in nomes) {
    console.log(nomes[i])
    console.log('--------------------------------')
}

for (let valor of nomes) {
    console.log(valor)
    console.log('--------------------------------')
}

nomes.forEach(function(valor, indice, array) {
    console.log(valor, indice, array)

})