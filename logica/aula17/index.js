//Factory function ou função fábrica
//constructor function 
function criaPessoa (nome, sobrenome,a , p) {
    return {
        nome,
        sobrenome,

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        set nomeCompleto (valor) {
            valor = valor.split(' ')   
            this.nome = valor.shift()
            console.log(valor)   
            this.sobrenome = valor.join(' ')
        },

        fala(assunto = 'Falando sobre nada') {
            return `${this.nome} está ${assunto}`;
        },
        altura: a,
        peso: p,
        get imc() {
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    }
}

const p1  = criaPessoa('Alexandre', 'Paixão', 1.8, 80)
p1.nomeCompleto = 'Maria Matias'
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.fala())