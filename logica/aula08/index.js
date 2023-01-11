

function getDiaSemanaTexto(diaSemana) {
    
    let diaSemanaTexto;
    
    
        switch (diaSemana) {
        case 0: 
            return diaSemanaTexto ='Domingo'
            
        case 1:
            return diaSemanaTexto ='Segunda-feira'
            
        case 2:
            return diaSemanaTexto ='Terça-feira'
            
        case 3:
            return diaSemanaTexto ='Quarta-feira'
            
        case 4:
            return diaSemanaTexto ='Quintana-feira'
            
        case 5:
            return diaSemanaTexto ='Sexta-feira'
            
        case 6:
            return diaSemanaTexto ='Sábado'
            
        default:
            return diaSemanaTexto ='Dia incorreto'
        } 
    }
    const data = new Date('1987-06-26 00:00:00');
    const diaSemana = data.getDay();
    const diaSemanaTexto = getDiaSemanaTexto(diaSemana);
    console.log(`O dia ${diaSemana} representa`, diaSemanaTexto)

// if (diaSemana === 0) { 
//     diaSemanaTexto = 'Domingo'
// } else if (diaSemana === 1) {
//     diaSemanaTexto = 'Segunda-feira'
// }else if (diaSemana === 1){
//     diaSemanaTexto = 'Terça-feira'
// }else if (diaSemana === 2) {
//     diaSemanaTexto = 'Quarta-feira'
// }else if (diaSemana === 3) {
//     diaSemanaTexto = 'Quinta-feira'
// }else if (diaSemana === 4) {
//     diaSemanaTexto = 'Sexta-feira'
// }else if (diaSemana === 5) {
//     diaSemanaTexto = 'Sábado'
// }else {
 //   diaSemanaTexto = 'Dia incorreto'
//}