//Exibir uma mensagem ao carregar a minha página
alert('Bem vindo a minha página!');

function exibirMensagem() {
    alert('Você clicou no botão');
    console.log('A página executou o método: exibirMensagem');
}


//Exercício 3 - Calculadora
function realizarCalculos() {
    let numero1 = parseInt(prompt('Informe o primeiro valor'));
    let numero2 = parseInt(prompt('Informe o segundo valor'));
    somar(numero1, numero2);
    subtrair(numero1, numero2);
    dividir(numero1, numero2);
    multiplicar(numero1, numero2);
}

function somar(valor1, valor2) {
    let resultado = valor1 + valor2;
    console.log('O resultado da soma entre ' + valor1 + ' e ' + valor2 + ' é: ' + resultado);
}

function subtrair(valor1, valor2) {
    let resultado = valor1 - valor2;
    console.log('O resultado da subtração entre ' + valor1 + ' e ' + valor2 + ' é: ' + resultado);
}

function dividir(valor1, valor2) {
    let resultado = valor1 / valor2;
    console.log('O resultado da divisão entre ' + valor1 + ' e ' + valor2 + ' é: ' + resultado);
}

function multiplicar(valor1, valor2) {
    let resultado = valor1 * valor2;
    console.log('O resultado da multiplicação entre ' + valor1 + ' e ' + valor2 + ' é: ' + resultado);
}

//Calculadora "funcional"
var valor1 = '';
var valor2 = '';
var operacao = '';
const qtdCasaDecimal = 2;

function guardarNumero(valor) {
    if (!operacao) {
        valor1 += valor;
        console.log(valor1);
    } else {
        valor2 += valor;
        console.log(valor2);
    }
}

function guardarOperacao(operacaoE) {
    operacao = operacaoE;
}

function limpar() {
    valor1 = '';
    valor2 = '';
    operacao = '';
}

function calcular() {
    valor1 = parseFloat(valor1);
    valor2 = parseFloat(valor2);
    let resultado;
    if (operacao == '+') {
        resultado = valor1 + valor2;
    } else if (operacao == '-') {
        resultado = valor1 - valor2;
    } else if (operacao == '*') {
        resultado = valor1 * valor2;
    } else if (operacao == '/') {
        resultado = valor1 / valor2;
    }
    alert('Resultado: ' + resultado);
    limpar();
}

function calcularComSwitch() {
    valor1 = parseFloat(valor1);
    valor2 = parseFloat(valor2);
    let resultado;
    switch (operacao) {
        case '+':
            resultado = valor1 + valor2;
            break;
        case '-':
            resultado = valor1 - valor2;
            break;
        case '*':
            resultado = valor1 * valor2;
            break;
        case '/':
            resultado = valor1 / valor2;
            break;

    }
    alert('Resultado: ' + resultado);
    limpar();
}

function identificarSono() {
    const qtdHoras = prompt('Quantas horas você tem dormido por noite?');
    const horasMinimasSono = 8;
    if (qtdHoras < 8) {
        alert('Você está dormindo pouco. Durma mais!');
    } else {
        alert('Você está dormindo o suficiente, continue assim!');
    }
}

function horaFormato12() {
    const qtdHora = prompt('Que horas são?');

    if (qtdHora > 12) {
        alert(qtdHora - 12 + ' p.m');
    } else {
        alert(qtdHora + ' a.m');
    }
}

function testarOperadores() {
    const nro = prompt('Informe um digíto');
    if (nro == 5 || nro == 10) {
        alert('O numéro é 5 ou 10');
    } else {
        alert('Outro número');
    }
}
function testarOperadorE() {
    const idade = prompt('Informe a sua idade ');
    const idadeAmigo = prompt('Informe a idade do seu amigo');
    if (idade >= 18 && idadeAmigo >= 18) {
        alert('Vocês estão liberados para beber ');
    } else {
        alert('Infelizmente não podem beber');
    }
}

function verificarEntrada() {
    const idade = prompt('Informe a sua idade');
    const nome = prompt('Você tem o nome na lista? Digite sim ou não');
    const ingresso = prompt('Você tem ingresso? Digite sim ou não');

    if (idade > 18 && (ingresso == 'sim' || nome == 'sim')) {
        alert('Entrada permitida');
    } else {
        alert('Entrada negada');
    }

}

function verificarEntradaMelhorada() {
    if (prompt('Informe a sua idade') >= 18 &&
        (prompt('Você tem o nome na lista? Digite sim ou não').toUpperCase() == 'SIM'
            || prompt('Você tem ingresso? Digite sim ou não').toUpperCase() == 'SIM')) {
        alert('Entrada permitida');
    } else {
        alert('Entrada negada');
    }

}

function verificarMeiaEntrada() {
    const idade = prompt('Informe a sua idade');
    if (idade < 12 || idade > 60) {
        alert('Você tem direito a meia-entrada');
    } else { alert('Você não tem direito a meia-entrada') }
}


function identificarNomeUsuario() {
    const nomeUsuario = prompt("Informe seu nome");
    if (!nomeUsuario) {
        alert('Entrada está proibida. Obrigatório informar seu nome!');
        identificarNomeUsuario();
    } else {
        alert('Entrada liberada!');
    }
}

function calcularIMC() {
    const peso = prompt('Informe seu peso');
    const altura = prompt('Informe sua altura');

    if (altura.indexOf('.') == -1 && altura.length > 1) {
        altura = altura / 100;
    }
    const IMC = peso / (altura * altura);


    if (IMC <= 18.50) {
        alert('Abaixo do peso.');
    } else if (IMC > 18.50 && IMC < 25) {
        alert('Peso normal');
    } else if (IMC > 25 && IMC < 30) {
        alert('Acima do peso');
    } else {
        alert('Obeso');
    }

}

function converterDiasSemana() {
    const numero = parseFloat(prompt('Digite um numero'));
    const DOMINGO = 1, SEGUNDA = 2, TERCA = 3, QUARTA = 4, QUINTA = 5, SEXTA = 6, SABADO = 7;

    switch (numero) {
        case DOMINGO:
            alert('Domingo');
            break;
        case SEGUNDA:
            alert('Segunda');
            break;
        case TERCA:
            alert('Terça');
            break;
        case QUARTA:
            alert('Quarta');
            break;
        case QUINTA:
            alert('Quinta');
            break;
        case SEXTA:
            alert(Sexta);
            break;
        case SABADO:
            alert('Sabádo');
            break;
        default: {
            alert('Dia inválido')
        };


    }

}


function cobrançaComercio() {
    const preco = parseFloat(prompt('Informe o valor da sua compra'));
    let total = preco + calcularFormaPgto(preco);
    console.log('Total com forma de pagamento:' +total);
    total -= calcularDesconto(preco);
    console.log('Total com cupom:'+total);
    total += calcularFrete();
    console.log('Total com frete:'+total);
    alert('Rotal da compra: R$'+total);
}

function calcularFormaPgto(preco) {
    const pagamento = parseInt(prompt('Digite o número que corresponde a forma de pagamento desejada. 1- crédito. 2- Débito. 3- Pix. 4-Boleto.'));
    const CREDITO = 1, DEBITO = 2, PIX = 3, BOLETO = 4;
    switch (pagamento) {
        case CREDITO:
            return (preco * 0.02);

        case DEBITO:
            return - (preco * 0.05)

        case PIX:
            return - (preco * 0.1);

        case BOLETO:
            return 0;

        default: {
            alert('número inválido');
        }
    }
}

function calcularDesconto(preco) {
    const desconto = prompt('Você tem cupom de desconto? Se sim digite o nome dele. Se não deixe este campo em branco.');
    const valorDesconto = desconto.substring(0, 2);
    if (verificarCuponValido(valorDesconto)) {
        return (valorDesconto * preco / 100);
    }
    return 0;

}

function verificarCuponValido(valorDesconto) {
    return !isNaN(valorDesconto);
    // isNaN is not a number e com o ! fica é um número.
    //extrair o numero, fazer cálculo de % do preço, diminuir do total
}

function calcularFrete() {
    const frete = parseInt(prompt('Você deseja o frete normal ou expresso? Se for frete normal digite 1. se for expresso digite 2.'));
    const fretenormal = 1, freteesxpresso = 2;

    switch (frete) {
        case fretenormal:
            return 10;
          
        case freteesxpresso:
            return 20;
       
    }
    return 0;
}

function testeFor() {
    for (let contador = 0; contador < 10; contador++) {
        console.log(contador);
    }
}

function testeWhile() {
    let numero = 0;
    while (!isNaN(numero)) {
         numero = prompt('informe apenas números');
    }
    alert('Você não digitou um número.\nAplicação encerrada');
}

function umdezFor() {
    for (let contador = 1; contador <=10; contador++){
        console.log(contador);
    }
}

function umdezWhile(){
    let contador = 1;
    while (contador =10){
        console.log(contador);
        contador++
    }

}



function arrayteste() {
    let array = [];
   for (let contador =1; contador <=10; contador++){
    array.push(prompt('Informe um número'));


   }
   console.log(array)
}


function realizarLoginUsuario() {
    const usuarios = ['tamires@@', 'marco123','gaby77'];
    const senhas = ['123','aab2','a57'];
    let usuarioLogin =prompt('Informe seu usuário de login');
    let senhaLogin =prompt('Informe a sua senha');
    let fezLogin = false;

    for(let i=0; i < usuarios.length; i++) {
        if (usuarios[i] == usuarioLogin && senhas[i] == senhaLogin) {
            fezLogin = true;
            alert('Login realizado');
            break;
        }

    }
    if (!fezLogin) {
        alert('Usuário ou senha inválido. Tente novamente');
    }
}


function contadordeletras() {
    const palavras = ['Iguana', 'Golfinho', 'Cachorro'];

    palavras.forEach(letras => console.log('A palavra ' +letras+ ' tem ' +letras.length+ ' palavras.'));
}

function visualizarSenha() {
    const senha = document.getElementById('senha');
    const iconeSenha = document.getElementById('iconeSenha');
    if (senha.type == 'text') {
        senha.type = 'password' ;
        iconeSenha.innerHTML = '<svg onclick="visualizarSenha()" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">'
       + '<path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>'
      +  '<path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>'
      +'</svg>'
    } else {
     senha.type = 'text';
    iconeSenha.innerHTML = '<svg onclick="visualizarSenha()" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">'
    +'<path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>'
    +'<path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>'
    +'<path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>'
  +'</svg>'

}
}

function esconderTexto() {
    const textoEsconder = document.getElementById('texto-esconder');
    textoEsconder.classList.add('escondido');
}

function mostrarTexto() {
    const textoEsconder = document.getElementById('texto-esconder');
    textoEsconder.classList.remove('escondido');
}

function esconderMostrarTexto() {
    const btMostraEsconde = document.getElementById('bt-mostra-esconde');
    if (btMostraEsconde.innerText == 'Esconder texto') {
    btMostraEsconde.innerText = 'Mostrar texto';
    esconderTexto();
    btMostraEsconde.classList.remove('bt-escondido');
    btMostraEsconde.classList.add('bt-mostrar');
    } else {
        btMostraEsconde.innerText = 'Esconder texto';
        mostrarTexto();
        btMostraEsconde.classList.add('bt-escondido');
        btMostraEsconde.classList.remove('bt-mostrar')
    }
}

function incluirTexto() {
    const textoUsuario = document.getElementById('texto-usuario');
    const conteudoTexto = document.getElementById('conteudo-texto');
    const texto = document.createElement('p');
    texto.innerText = textoUsuario.value;
    conteudoTexto.appendChild(texto);
    textoUsuario.value = '';
}

function limpar() {
    const conteudoTexto = document.getElementById('conteudo-texto');
    conteudoTexto.innerHTML = '';
}