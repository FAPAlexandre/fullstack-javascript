 // const tresHoras = 60 * 60 * 3 * 1000
// const umDia = 60 * 60 * 24 * 1000
// const data = new Date(0 + tresHoras + umDia); // Funcão construtora /01/01/1970 TimeStamp unix
//const data = new Date(2019, 11); //ano, mes, di, hora, minuto, segundo, milesimos
// const data = new Date('2019-04-20 20:20:59.300')
// console.log('dia', data.getDate())
// console.log('Mes', data.getMonth()+ 1) // Começa do zero
// console.log('Ano', data.getFullYear())
// console.log('Hora', data.getHours())
// console.log('Minuto', data.getMinutes())
// console.log('Segundo', data.getSeconds())
// console.log('Ms', data.getMilliseconds())
// console.log('dia Semana', data.getDay()) //Dia da semana 0 é domingo e 6 sábado
// console.log(data.toString())
// console.log(Date.now())

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

function formData (data) {
    const dia = zeroAEsquerda(data.getDate())
    const mes = zeroAEsquerda(data.getMonth() + 1)
    const ano = zeroAEsquerda(data.getFullYear())
    const hora = zeroAEsquerda(data.getHours())
    const min = zeroAEsquerda(data.getMinutes())
    const segundo = zeroAEsquerda(data.getSeconds())
    const ms = zeroAEsquerda(data.getMilliseconds())

    return ` ${dia}/${mes}/${ano} ${hora}:${min}:${segundo}:${ms}`
}

const data = new Date()
const dataBrasil = formData(data)
console.log(dataBrasil)
