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
    if (nro == 5 || nro ==10) {
        alert('O numéro é 5 ou 10');
    } else {
        alert('Outro número');
    }
}
    function testarOperadorE() {
        const idade= prompt('Informe a sua idade ');
        const idadeAmigo = prompt('Informe a idade do seu amigo');
        if (idade >=18 && idadeAmigo >= 18) {
            alert('Vocês estão liberados para beber ');
        } else {
            alert('Infelizmente não podem beber');
        }
    }

    function verificarEntrada() {
      const idade= prompt('Informe a sua idade');
      const nome = prompt('Você tem o nome na lista? Digite sim ou não');
      const ingresso = prompt('Você tem ingresso? Digite sim ou não');

      if (idade > 18 && (ingresso == 'sim' || nome == 'sim')) {
        alert('Entrada permitida');
      } else {
        alert ('Entrada negada');
      }

    }

    function verificarEntradaMelhorada() {
      if (prompt('Informe a sua idade') >= 18 &&
        (prompt('Você tem o nome na lista? Digite sim ou não').toUpperCase() == 'SIM'
        || prompt('Você tem ingresso? Digite sim ou não').toUpperCase() =='SIM')) {
            alert('Entrada permitida');
        } else {
            alert ('Entrada negada'); }
  
      }

      function verificarMeiaEntrada() {
        const idade= prompt('Informe a sua idade');
        if (idade < 12 || idade >60) {
            alert('Você tem direito a meia-entrada');
        } else {alert('Você não tem direito a meia-entrada')}
      }

      

