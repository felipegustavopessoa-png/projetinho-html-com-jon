function matricular(){
    alert("Bem-vindo à Power Gym! Nossa equipe entrará em contato.");
}

function plano(nome){
    alert("Você escolheu o Plano " + nome + "!");
}

function contar(){

    let numero = document.getElementById("numero");

    let valor = 0;

    let intervalo = setInterval(function(){

        valor += 25;

        numero.innerHTML = valor;

        if(valor >= 500){
            clearInterval(intervalo);
        }

    },40);

}
