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

    if(clickCount === 5) {
        aviso.style.display = "flex"; 
        aviso.innerHTML = "Sério mesmo que você tentou clicar 5 vezes no não?"
    }
    if(clickCount === 10) aviso.innerHTML = "Não é possível 10 VEZES???"
    else if(clickCount === 13) aviso.innerHTML = "KKKKKKKKKKKKKKKKKKKKKKKKKKK"
    else if(clickCount === 15) aviso.innerHTML = "Sabia q ia fazer graça, agr já deu né, clica logo no SIM"
    else if(clickCount === 17) aviso.innerHTML = "Precisava disso? Desisto KKKKKKKKKKKKK"
    else if(clickCount === 20) {
        aviso.innerHTML = "Clica no não agr palhaça KKKKKKKKKK";
        botaoNao.innerText = "SIM"
    }
    else if (clickCount > 20) respostaSim();
});
