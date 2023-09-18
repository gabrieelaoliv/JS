function mostrarDobro() {

    const element = (d) => document.getElementById(d)
    element("valorDobro").value = +element("txtValor").value * 2

}