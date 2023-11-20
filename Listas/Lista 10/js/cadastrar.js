window.addEventListener("load", function () {
    document.getElementById("btnCadastrar").addEventListener("click", cadastrarUsuario);

    function cadastrarUsuario() {
        //Obtem o NOME DE USUARIO, SENHA e CONFIRMAR SENHA do formulario
        var user = document.getElementById("user").value;
        var senha = document.getElementById("senha").value;
        var confirmar = document.getElementById("senhaConfirmar").value;


        if (user == "" || senha == "" || confirmar == "")
            alertWifi("Preencha todas as informações", false, 0, "", 30, "");

        else {
            if (senha == confirmar) {
                var usuarioNovo = { nome: user, senha: senha };
                var vetUsuarios = localStorage.getItem("vetUsuarios");

                if (!vetUsuarios) {
                    var vet = [];
                    vet.push(usuarioNovo);
                    localStorage.setItem("vetUsuarios", JSON.stringify(vet));
                } else {
                    vet = JSON.parse(vetUsuarios);
                    vet.push(usuarioNovo);
                    localStorage.setItem("vetUsuarios", JSON.stringify(vet));
                }
                alertWifi("Cadastrado com sucesso!", false, 0, "", 30, "");
            } else
                alertWifi("Erro! Por favor se atentar ao preenchimento", false, 0, "", 30, "");

        }
    }
});