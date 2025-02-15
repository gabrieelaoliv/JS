window.addEventListener("DOMContentLoaded", function () {
    var txtSenha = this.document.getElementById("txtSenha");
    var txtUsuario = this.document.getElementById("txtUsuario");
    var txtConfirmaSenha = this.document.getElementById("txtConfirmaSenha");
    var btnCadastrar = this.document.getElementById("btnCadastrar");

    btnCadastrar.addEventListener("click", function () {
        if (txtUsuario.value == "") {
            alert("Usuário em branco. Informe um usuario");
        }
        else if (txtSenha.value == " " || txtConfirmaSenha.value == "" || txtSenha.value == !txtConfirmaSenha) {
            alert("Os campos Senha e Confirmar Senha estão diferentes e/ou vazios. Tente novamente");
        } else {

            var usuarios = JSON.parse(localStorage.getItem("Usuarios")) || [];

            var usuarioExistente = usuarios.find(usuario => usuario.nome === txtUsuario.value);
            if (usuarioExistente) {
                alert("Usuário já cadastrado! Tente outro nome.");
                return;
            }

            var novoUsuario = { nome: txtUsuario.value, senha: txtSenha.value };
            usuarios.push(novoUsuario);
            localStorage.setItem("Usuarios", JSON.stringify(usuarios));
            alert("Usuário cadastrado com sucesso!");
        }
    });

});