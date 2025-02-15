window.addEventListener("DOMContentLoaded", function () {
    var txtUsuario = document.getElementById("txtUsuario");
    var txtSenha = document.getElementById("txtSenha");
    var btnEntrar = document.getElementById("btnEntrar");

    btnEntrar.addEventListener("click", function () {
        if (txtUsuario.value == "") {
            alert("Usuário em branco. Informe um usuario");
        } else if (txtSenha.value == "") {
            alert("Senha em branco. Informe uma senha")
        } else {
            var usuarios = JSON.parse(localStorage.getItem("Usuarios")) || [];

            if (usuarios.length === 0) {
                alert("Nenhum usuário cadastrado. Por favor, cadastre-se primeiro.");
                return;
            }
            var usuarioEncontrado = usuarios.find(usuario => usuario.nome === txtUsuario.value);

            if (usuarioEncontrado) {
                if (usuarioEncontrado.senha === txtSenha.value) {
                    window.open("index.html", "_self");
                } else {
                    alert("Senha incorreta. Favor informar senha cadastrada");
                }
            } else {
                alert("Nenhum usuário cadastrado. Por favor, cadastre-se primeiro.");
            }
        }
    });
});