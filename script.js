// funções utilizadas no projeto (importante - não apagar!)

function horaFormatada(horarioAtual){

    var h = horarioAtual.getHours();
    var m = horarioAtual.getMinutes();

    if (h < 10){
        h = "0" + h;
    }

    if (m < 10) {
        m = "0" + m;
    }

    return h + ":" + m;
}

function exibirHoraFormatada() {
    var horarioAtual = new Date();
    var exibirHoraFormatada = horaFormatada(horarioAtual);

    document.getElementById("atualizacao").innerHTML = "Atualizado hoje, às " + exibirHoraFormatada;
}

window.onload = exibirHoraFormatada; // Pesquisando vi que isso roda uma função assim que a pág abre