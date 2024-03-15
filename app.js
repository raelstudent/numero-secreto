let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela (tag, texto) {
    let campoDeTexto = document.querySelector(tag,texto);
    campoDeTexto.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',
    {rate:1.2});
}
function exibirMensagemInicial() {
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p','Escolha um número de 1 a 10!');
}
exibirMensagemInicial();
function verificarChute() {
    let chute = parseInt(document.querySelector('input').value);
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1','Você acertou!');
        let palavrasTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let menssagemTentativas = `Parabens! Você acertou em ${tentativas} ${palavrasTentativa}!.`;
        exibirTextoNaTela('p',menssagemTentativas);
        document.getElementById('reiniciar').removeAttribute
        ('disabled');
    } else{ 
        if (chute >numeroSecreto){
            exibirTextoNaTela('p','O número secreto é menor!');    
        } else {
            exibirTextoNaTela('p','O número secreto é maior!');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random()*numeroLimite +1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}   

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled','disabled');
    limparCampo();
}