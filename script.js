// Funções utilizadas no projeto (importante - não apagar!)


// Função utilizada p/ pegar horário do usuario BR

function exibirHoraFormatada() {
    var agora = new Date();
    var horaBrasil = agora.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });

    // Exibe somente a hora na tela
    document.getElementById("atualizacao").innerHTML = horaBrasil;
}

window.onload = exibirHoraFormatada; // Pesquisando vi que isso roda uma função assim que a pág abre