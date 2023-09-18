function calculadora(op) {
    const element = (e) => parseFloat(document.getElementById(e).value)
    const n1 = element("valor1")
    const n2 = element("valor2")

    if (isNaN(n1) || isNaN(n2)) return

    if (op === "/" && n2 === 0) {
        alert("Divisão por zero")
        return
    }

    document.getElementById("resultado").value = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b,
    }[op](n1, n2)
}