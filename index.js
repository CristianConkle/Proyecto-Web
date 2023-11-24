const pato = document.getElementById('pato');
const vidasSpan = document.getElementById('vidas');
const puntajeSpan = document.getElementById('puntaje');
let vidas = 3;
let puntaje = 0;
let temporizadorPato;
let temporizadorJuego;

pato.addEventListener('click', function (event) {
    event.stopPropagation();
    aumentarPuntaje();
    resetearPato();
    reiniciarTemporizadorPato();
    reiniciarTemporizadorJuego();
});

document.body.addEventListener('click', function (event) {
    if (event.target !== pato) {
        disminuirVidas();
    }
});

function resetearPato() {
    const maxX = 700 - pato.clientWidth;
    const maxY = 700 - pato.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    pato.style.left = `${randomX}px`;
    pato.style.top = `${randomY}px`;

    reiniciarTemporizadorPato();
}

function disminuirVidas() {
    if (vidas > 0) {
        vidas--;
        vidasSpan.textContent = vidas;

        if (vidas === 0) {
            mostrarMensajeFinJuego();
            resetearJuego();
        }
    }
}

function aumentarPuntaje() {
    puntaje += 10;
    puntajeSpan.textContent = puntaje;
}

function resetearJuego() {
    vidas = 3;
    puntaje = 0;
    vidasSpan.textContent = vidas;
    puntajeSpan.textContent = puntaje;
    reiniciarTemporizadorJuego();
    resetearPato();
}

function reiniciarTemporizadorPato() {
    clearTimeout(temporizadorPato);
    temporizadorPato = setTimeout(function () {
        disminuirVidas();
    }, 5000);
}

function reiniciarTemporizadorJuego() {
    clearTimeout(temporizadorJuego);
    temporizadorJuego = setTimeout(function () {
        mensajeEsperaTiempo();
        resetearJuego();
    }, 5000);
}

function mostrarMensajeFinJuego() {
    const mensajesFinJuego = [
        "Logro desbloqueado: Maestro del fallo.",
        "No te vendría nada mal practicar un poco más.",
        "Te quedaste sin vidas. ¡Inténtalo de nuevo!",
        "Es este el fin?.",
        "¡Fin del juego! ¿Puedes superar tu puntaje más alto?"
    ];

    const mensajeAleatorio = mensajesFinJuego[Math.floor(Math.random() * mensajesFinJuego.length)];

    alert(`${mensajeAleatorio} Tu puntaje final es ${puntaje}.`);
}

function mensajeEsperaTiempo() {
    const mensajePorEspera = [
        "Parece que has dudado...",
        "Has esperado mucho tiempo!",
        "0 pájaros, 0 tiros.",
        "Tu tiempo se acabó!",
        "Intenta ser más rápido."
    ];

    const mensajeRandom = mensajePorEspera[Math.floor(Math.random() * mensajePorEspera.length)];

    alert(`${mensajeRandom} Tu puntaje final es ${puntaje}.` );
}

// Configuración inicial
resetearPato();
reiniciarTemporizadorPato();
reiniciarTemporizadorJuego();
