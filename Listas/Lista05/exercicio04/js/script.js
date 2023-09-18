function nota() {
    const element = (d) => parseFloat(document.getElementById(d).value)
    alert(element("nota1") + element("nota2") >= 60 ? "Aprovado" : "Reprovado");
}