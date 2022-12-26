/* 
Operadores lógicos
&& -> AND -> E - Todas as expressões precisam ser verdadeiras para ser true
|| => OR -> OU - Só retorna falso se todas as expressões forem false
! -> NOT -> NAO
*/

const expressAnd = true && true && true
const expressOr = true || false 
const expressNot = 

console.log(expressAnd)
console.log(expressOr)
console.log(expressNot)

const usuario = "Luiz"
const senha = '123456'


const vaiLogar = usuario === "Luiz" && senha === "123456"
console.log(vaiLogar)
