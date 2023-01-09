const data = new Date('1987-04-21 00:00:00');

const diaSemana = data.getDay();

let diaSemanaTexto;

if (diaSemana === 0) {
    diaSemanaTexto = 'Segunda-feira'
}
console.log(diaSemana)