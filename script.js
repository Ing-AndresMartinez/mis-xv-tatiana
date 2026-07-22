// ==========================================
//        ABRIR CARTA
// ==========================================

function abrirCarta() {

    const musica = document.getElementById("musica");

    musica.volume = 0.95;
    musica.currentTime = 40;
    musica.play().catch(() => {});

    const sobre = document.querySelector(".sobre");
    const carta = document.getElementById("carta");

    // Abrir sobre
    sobre.classList.add("abierto");

    // Mostrar carta
    setTimeout(() => {
        carta.classList.add("mostrar");
    }, 800);

    // ==============================
    // Revelar bloques
    // ==============================

    function revelarElemento(id, tiempo) {

        setTimeout(() => {

            const elemento = document.getElementById(id);

            elemento.classList.add("visible");

            carta.scrollTo({

                top: elemento.offsetTop - 60,

                behavior: "smooth"

            });

        }, tiempo);

    }

    // ==============================
    // Cronograma
    // ==============================

    revelarElemento("bloque-flores", 2000);

    revelarElemento("bloque-nombre", 5000);

    revelarElemento("bloque-mensaje", 9000);

    revelarElemento("bloque-padres", 17000);

    revelarElemento("bloque-datos", 23000);

    revelarElemento("bloque-final", 29000);

    // ==============================
    // Regresar al inicio
    // ==============================

    setTimeout(() => {

        carta.scrollTo({

            top: 80,

            behavior: "smooth"

        });

    }, 39000);

}



// ==========================================
//         CUENTA REGRESIVA
// ==========================================

function contador() {

    const fechaEvento = new Date("September 26, 2026 20:00:00").getTime();

    const ahora = new Date().getTime();

    const distancia = fechaEvento - ahora;

    if (distancia <= 0) {

        document.getElementById("dias").innerHTML = "00";
        document.getElementById("horas").innerHTML = "00";
        document.getElementById("minutos").innerHTML = "00";
        document.getElementById("segundos").innerHTML = "00";

        return;

    }

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));

    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));

    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    document.getElementById("dias").innerHTML =
        dias < 10 ? "0" + dias : dias;

    document.getElementById("horas").innerHTML =
        horas < 10 ? "0" + horas : horas;

    document.getElementById("minutos").innerHTML =
        minutos < 10 ? "0" + minutos : minutos;

    document.getElementById("segundos").innerHTML =
        segundos < 10 ? "0" + segundos : segundos;

}

setInterval(contador, 1000);

contador();