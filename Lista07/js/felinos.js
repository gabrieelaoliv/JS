document.getElementById("gato01").addEventListener("click", function () {
    alert(`Oi ${localStorage.getItem("nome")}, tudo bem com você?`);
})


document.getElementById("gato02").addEventListener("click", function () {
    document.getElementById("contGato").innerHTML = parseInt(document.getElementById("contGato").innerHTML) + 1;
})

function gato03(id) {
    document.getElementById("gato03").src = `./Imagens/gato0${id}.gif`;
}

function gato04(id){
    if(id == 1)
        document.getElementById("gato04").innerHTML = "Ai, pare de fazer cócegas!"
    else
        document.getElementById("gato04").innerHTML = "lá lá lá lá lá lá"
}

document.getElementById("gato05").addEventListener("click", function () {
    document.getElementById("cxNumero").value = Math.floor(Math.random() * 100) + 1;
})

