const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

iniciar.addEventListener('click', function (e) {
    relogio.innerHTML = 'Cliquei no Iniciar'
})

pausar.addEventListener('click', function (e) {
    relogio.innerHTML = 'Cliquei no Pausar'
})

zerar.addEventListener('click', function (e) {
    relogio.innerHTML = 'Cliquei no Zerar'
})

