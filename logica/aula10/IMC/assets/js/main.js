//Capturar o evento de submit no formulário e parar
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {

  e.preventDefault();
  
  //capiturando o input do HTML
  const inputPeso = e.target.querySelector('#peso');
  const inputAltura = e.target.querySelector('#altura');
  
  // Tornando os inputs números para poder calcular
  const peso = Number(inputPeso.value)
  const altura = Number(inputAltura.value)

  if(!peso) {
    setResultado('Peso inválido', false)
    return;
  }
  if(!altura) {
    setResultado('Altura inválida', false)
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc}(${nivelImc})`;

  setResultado(msg, true);

})

//Transfomando os dados em índice para pegar com os Ifs
function getNivelImc (imc) {
  const nivel = ['Abaido do peso', 'Peso normal', 'Sobrepeso',
  'Obesidade grau 1','Obesidade grau 2', 'Obesidade grau 3']

    if (imc >= 39.9) return nivel [5]
    
    if (imc >= 34.9) return nivel [4]
    
    if (imc >= 29.9) return nivel [3]
  
    if (imc >= 24.9) return nivel [2]
    
    if (imc >= 18.5) return nivel [1]
    
    if (imc < 18.5) return nivel [0]

}




function getImc(peso, altura) {
  const imc = peso/(altura** 2)
  return imc.toFixed(2)
}

function criaP (className) {
  const p = document.createElement('p');
  return p;
  
}

function setResultado (msg, isValid) {

  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';
  
  const p = criaP()

  if(isValid) {
    p.classList.add('paragrafo-resultado')
  }else {
    p.classList.add('bad')
  }
  p.innerHTML = msg;
  resultado.appendChild(p)
  
}