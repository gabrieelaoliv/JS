window.addEventListener("load", function () {
    document.getElementById("btnEntrar").addEventListener("click", verificarLogin);

    function verificarLogin() {
        //Obtem o NOME DE USUARIO e SENHA do formulário
        var user = document.getElementById("user").value;
        var pwd = document.getElementById("senha").value;
        var vetUsuarios;

        if (user == "" || pwd == "")
            alertWifi("Preencha todas as informações", false, 0, "", 30, "");
        else {
            vetUsuarios = localStorage.getItem("vetUsuarios");

            if (!vetUsuarios) alertWifi("Ainda não há nenhum usuário cadastrado", false, 0, "", 30, "");
            else {
                vetUsuarios = JSON.parse(vetUsuarios);
                var achou = false;
                for (i = 0; i < vetUsuarios.lenght; i++) {
                    if (vetUsuarios[i].nome == user && vetUsuarios[i].senha == pwd) {
                        achou = true;
                        break;
                    }
                }
                if (achou = true) alertWifi("Usuário encontrado", false, 0, "", 30, "");
                else alertWifi("Usuário não encontrado", false, 0, "", 30, "");
            }
        }
    }
});