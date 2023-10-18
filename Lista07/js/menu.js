window.addEventListener("load", function () {
    nome = localStorage.getItem("nome");
    if (nome) {
        vetNomes = nome.split(" ");
        if (vetNomes.length > 1) {
            document.getElementById("painelSucesso").classList.remove("invisivel");
            document.getElementById("painelSucesso").classList.add("visivel");
            document.getElementById("nomeUsuario").innerHTML = nome;
        } else showMsgErro("Não existe nenhum nome. Cliquei no link abaixo para inserir um nome")
    }

    else showMsgErro("Nome inválido. É necessário informar NOME + SOBRENOME. Clique no link abaixo para inserir um nome completo");

})

    document.getElementById("btnJogar").addEventListener("click", function() {
        window.open("felinos.html", "_self");
    })   

function showMsgErro(msg) {
    document.getElementById("painelErro").classList.remove("invisivel");
    document.getElementById("painelErro").classList.add("visivel");
    document.getElementById("msgErro").innerHTML = msg;
}
