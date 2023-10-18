window.addEventListener("load", function () {
    alert('Olá, seja bem-vindo!');
});

document.getElementById("btnEntrar").addEventListener("click", validar);

function validar() {
    nome = document.getElementById("txtNome").value.trim(); //trim tira o espaço a esquerda

    if (nome == "")
        alert("O campo está em branco, por favor preencher o nome completo")
    else {
        vetPalavras = nome.split(" ");

        if (vetPalavras.length > 1) {
            nomeSobrenome = `${vetPalavras[0]} ${vetPalavras[vetPalavras.length - 1]}`
            localStorage.setItem("nome", nomeSobrenome);
            window.open("menu.html", "_self");
        }
        else alert("Nome inválido. \n Favor inserir NOME + SOBRENOME separado por um espaço");
    }
};