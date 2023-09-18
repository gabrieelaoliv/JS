function nota() {
    const element = (e) => parseFloat(document.getElementById(e).value)
    const nota = element("nota1") + element("nota2")

    alert(nota >= 60 ? `Aprovado com ${nota} pontos` : `Reprovado faltando ${60 - nota} pontos`)
}