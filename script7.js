let votosWeb = 0;
let votosJs = 0;
let votosBd = 0;

let totalVotos = 0;

function votar(tipo) {

    if (tipo === 'web') votosWeb++;
    if (tipo === 'js') votosJs++;
    if (tipo === 'bd') votosBd++;

    totalVotos++;

    // ACTUALIZAR HTML
    document.getElementById("votos-web").textContent = votosWeb;
    document.getElementById("votos-js").textContent = votosJs;
    document.getElementById("votos-bd").textContent = votosBd;

    alert("¡Gracias por tu voto!");

    // CADA 5 VOTOS → mostrar en consola
    if (totalVotos % 5 === 0) {
        console.log("Total de votos acumulados:", totalVotos);
    }
}
