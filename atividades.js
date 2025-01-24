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
    const preco = parseFloat (prompt('Qual o valor da sua compra?'));
    const pagamento = parseInt (prompt('Digite o número que corresponde a forma de pagamento desejada. 1- crédito. 2- Débito. 3- Pix. 4-Boleto.'));
    const desconto = prompt('Você tem cupom de desconto? Se sim digite o nome dele.');
    const frete = prompt('Você deseja o frete normal ou expresso? Se for frete normal digite 1. se for expresso digite 2.');
    const DEBITO = 2, CREDITO = 1, PIX = 3, BOLETO = 4;
    const FRETENORMAL = 1, FRETEEXPRESSO = 2;
    let total;

    switch (pagamento) {
        case CREDITO:
      total = preco + (preco * 0.02);
            break;
        case DEBITO:
            total =   preco - (preco * 0.05)
            break;
        case PIX:
            total =    preco - (preco * 0.1);
            break;
        case BOLETO:
            total = preco;
            break;
        default: {
            alert('número inválido');
        }
    }
    
const valorDesconto = desconto.substring(0,2);
  if  (!isNaN (valorDesconto)) {
    //extrair o numero, fazer cálculo de % do preço, diminuir do total.
  valorDesconto * preco / 100 ;
  total = total - (valorDesconto * preco / 100);
  }
    
  switch (frete) {
 case PADRAO: 
     preco + 10;
     break;
     case EXPRESSO:
        preco + 20;
        break;
  }

alert (total);
}
