// (Condição) ? 'Valor Para verdadeira : 'Valor para falso' // Operador ternario

const pontuacaoUsuario = 1000;

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario ViP' : 'Usuario normal';

const corUsuario = 'Pink';

const corPadrao = corUsuario || 'Preta'

console.log(corPadrao)

console.log(nivelUsuario)

// if (pontuacaoUsuario >= 1000) {
//     console.log('Usuário VIP')

// }else {
//     console.log('Usuário normal')
// }

