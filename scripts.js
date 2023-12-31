const imagemPergunta = document.getElementById('imagem_pergunta');
const botaoSim = document.getElementById('botao-sim');
const botaoNao = document.getElementById('botao-nao');
const aviso = document.getElementsByClassName("aviso")[0];
let clickCount = 0;

const respostaSim = () => {
    const tituloPergunta = document.getElementsByClassName("pergunta")[0];
    tituloPergunta.style.display = 'none'

    const resultado = document.getElementsByClassName("resultado")[0];
    resultado.style.display = "block";

    aviso.style.display = "none"; 
}


botaoSim.addEventListener('click', function() {
    respostaSim();
});
    

botaoNao.addEventListener('click', function() {
    clickCount += 1;
    botaoNao.style.position = "absolute"
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const buttonWidth = botaoNao.offsetWidth;
    const buttonHeight = botaoNao.offsetHeight;
  
    const maxTop = windowHeight - buttonHeight;
    const maxLeft = windowWidth - buttonWidth;
  
    const randomTop = Math.floor(Math.random() * maxTop) + 'px';
    const randomLeft = Math.floor(Math.random() * maxLeft) + 'px';
  
    botaoNao.style.top = randomTop;
    botaoNao.style.left = randomLeft;

    if(clickCount === 1) {
        aviso.style.display = "flex"; 
        aviso.innerHTML = "Vou falar nada, já sei oq vai acontecer..."
    }
    else if(clickCount >= 6) aviso.innerHTML = `Contador de nãos: ${clickCount} ${'K' * clickCount}`;
});

botaoNao.addEventListener('mouseover', function() {
    clickCount += 1;
    botaoNao.style.position = "absolute"
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const buttonWidth = botaoNao.offsetWidth;
    const buttonHeight = botaoNao.offsetHeight;
  
    const maxTop = windowHeight - buttonHeight;
    const maxLeft = windowWidth - buttonWidth;
  
    const randomTop = Math.floor(Math.random() * maxTop) + 'px';
    const randomLeft = Math.floor(Math.random() * maxLeft) + 'px';
  
    botaoNao.style.top = randomTop;
    botaoNao.style.left = randomLeft;

    if(clickCount === 1) {
        aviso.style.display = "flex";
        aviso.innerHTML = "Vou colocar várias figurinhas até você aceitar..."
    }
    else if (clickCount >= 2 && clickCount <= 16){
        imagemPergunta.src = `./imagens/${clickCount-1}.jpg`
    }
    else {
        aviso.innerHTML = "Acabou as figurinhas, agora vou te dar motivos para aceitar...\n Na verdade, você msm já pensou nesses motivos..."
        botaoNao.style.display = "none"
    }
});
