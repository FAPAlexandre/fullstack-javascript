/*
Entre 0 - 11 Bom dia
Entre 12 - 17 Boa tarde
Entre 18 - 23 Boa noite

*/
// If pode ser usado sozinho
// Sempre que utilizo a palavra eles, precso de um if antes
// Eu posso ter vários ifs na checagem
//Só posso ter um else na checagem
//Podemos condições em else if, utilizando apenas if e else

const hora = 24

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia')
}
else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde')
}
else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite')
}
else {
    console.log('Horário incorreto')
}


