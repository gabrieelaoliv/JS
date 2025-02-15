window.addEventListener("DOMContentLoaded", function () {
    var nivel = document.getElementById("nivel");
    var tempo = document.getElementById("tempo");
    var btnIniciar = document.getElementById("btnIniciar");
    var btnPausar = document.getElementById("btnPausar");
    var btnParar = document.getElementById("btnParar");
    var numero = document.getElementById("numero");
    var acertos = document.getElementById("acertos");
    var acertosPorcentagem = document.getElementById("acertosPorcentagem");
    var erros = document.getElementById("erros");
    var pares = document.getElementById("pares");
    var btnSair = this.document.getElementById("btnSair");

    var numeroAtual = 0;
    var acertosAtuais = 0;
    var errosAtuais = 0;
    var paresAtuais = 0;
    var nivelSelecionado = "";
    var tempoRestante;
    var intervaloJogo;
    var intervaloTempo;

    var temposNivel = {
        facil: 90,
        medio: 75,
        dificil: 30
    };

    function formatarTempo(segundos) {
        var minutosRestantes = Math.floor(segundos / 60);
        var segundosRestantes = segundos % 60;
        return `${minutosRestantes < 10 ? '0' : ''}${minutosRestantes}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`;
    }

    function gerarNumeroAleatorio() {
        numeroAtual = Math.floor(Math.random() * 100) + 1;
        numero.innerHTML = numeroAtual;
        numero.style.color = "black";

        if (numeroAtual % 2 === 0) {
            paresAtuais++;
            pares.innerHTML = paresAtuais;
        }
        numero.disabled = false;
    }

    function clicarNumero() {
        var valorNumero = parseInt(numero.innerHTML);

        if (valorNumero % 2 === 0) {
            playAudio(0, "audio/correct.mp3");
            numero.style.color = "green";
            acertosAtuais++;
            acertos.innerHTML = acertosAtuais;
        } else {
            playAudio(0, "audio/wrong.mp3");
            numero.style.color = "red";
            errosAtuais++;
            erros.innerHTML = errosAtuais;
        }
        numero.disabled = true;
        atualizarPorcentagem();
    }

    function atualizarPorcentagem() {
        var porcentagem = paresAtuais > 0 ? ((acertosAtuais / paresAtuais) * 100).toFixed(2) : 0;
        acertosPorcentagem.innerHTML = `${porcentagem}%`;
    }

    function diminuirTempo() {
        tempoRestante--;
        tempo.innerHTML = formatarTempo(tempoRestante);

        if (tempoRestante <= 0) pausarJogo();
    }

    function iniciarTimer() {
        clearInterval(intervaloTempo);
        intervaloTempo = setInterval(diminuirTempo, 1000);
    }

    function configurarNivel() {
        nivelSelecionado = nivel.value;

        if (temposNivel[nivelSelecionado]) {
            tempoRestante = temposNivel[nivelSelecionado];
            tempo.innerHTML = formatarTempo(tempoRestante);
        } else {
            tempoRestante = 0;
            tempo.innerHTML = "00:00";
        }
    }

    function iniciarJogo(velocidade) {
        clearInterval(intervaloJogo);
        iniciarTimer();

        intervaloJogo = setInterval(gerarNumeroAleatorio, velocidade);
    }

    function pausarJogo() {
        clearInterval(intervaloJogo);
        clearInterval(intervaloTempo);
        // clearTimeout(timeoutMinuto);
    }

    function reiniciarJogo() {
        pausarJogo();
        nivel.disabled = false;
        nivel.value = "inicio";
        configurarNivel();

        acertosAtuais = 0;
        errosAtuais = 0;
        paresAtuais = 0;

        tempoRestante = 0;
        tempo.innerHTML = "00:00";
        acertos.innerHTML = 0;
        erros.innerHTML = 0;
        pares.innerHTML = 0;
        acertosPorcentagem.innerHTML = "0.00%";
        numero.innerHTML = "_";
        numero.disabled = true;
    }

    nivel.addEventListener("change", configurarNivel);
    numero.addEventListener("click", clicarNumero);
    numero.disabled = true;

    btnIniciar.addEventListener("click", function () {
        if (!nivelSelecionado || nivelSelecionado === "inicio") {
            alert("Selecione o nível do jogo");
            return;
        }

        nivel.disabled = true;
        var velocidades = { facil: 1000, medio: 500, dificil: 200 };
        iniciarJogo(velocidades[nivelSelecionado]);
    });

    btnPausar.addEventListener("click", pausarJogo);
    btnParar.addEventListener("click", reiniciarJogo);

    function playAudio(audio, source) {
        switch (audio) {
            case 0:
                audio = document.getElementById("hit");
                audio.src = source;
                audio.play();
                break;

            case 1:
                audio = document.getElementById("music");
                audio.src = source;
                audio.play();
                break;

            case 2:
                audio = document.getElementById("music");
                audio.pause();
                audio.currentTime = 0;
                break;
        }
    }
    btnSair.addEventListener("click", function () {
        window.open("login.html", "_self");
    })

});
