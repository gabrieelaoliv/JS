const element = (t) => document.getElementById(t)
const value = (t) => element(t).value

function validar() {
    if (!value("login")) {
        alert("Login invalido")
    } else if (!value("senha") || value("senha") !== value("confSenha")) {
        alert("Senha invalida")
        element("senha").value = ""
        element("confSenha").value = ""
    } else {
        alert("SEJA BEM VINDO")
    }
}
