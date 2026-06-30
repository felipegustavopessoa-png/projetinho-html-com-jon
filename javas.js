// Pega o botão
const meuBotao = document.getElementById("btnTopo");

// Quando o usuário rolar a página 20px para baixo, o botão aparece
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        meuBotao.style.display = "block";
    } else {
        meuBotao.style.display = "none";
    }
}

// Quando o usuário clicar no botão, a página volta para o topo
meuBotao.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});