function alterarTexto() {
let div= documento.getElementById('minhaDiv');
let campo = document.getElementById('campoTexto');
div.InnerHTML = '<p> O texto digitado pelo usuário é: '+campo.value+'</p>';

}

function validarResultado() {
    let resultado = document.getElementById('resultado');
    let resultadoConta = document.getElementById('resultadoConta');
    const RESULTADOVALIDO = 4;
    if (resultadoConta.value == RESULTADOVALIDO) {
        resultado.innerHTML = '<p class="sucesso">Parabéns, você acertou! </p>';
    } else {
        resultado.innerHTML = '<p class="erro">Resposta errada, tente novamente</p>';
    }
}


function somarTexto() {
let somar = document.getElementById('Somar');
somar.innerText = parseInt(somar.innerText) + 1;
}