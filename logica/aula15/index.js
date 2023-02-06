const pessoa = {
    nome: 'Ana',
    sobrenome: 'Alves',
    idade: 25,
    endereco: {
        rua: 'Av Brasil',
        numero: 320

    }
}

//Atribuição via desestruturação
const {nome, ...resto} = pessoa
console.log(nome, resto)