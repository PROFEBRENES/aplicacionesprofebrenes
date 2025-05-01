const frases = [
"Haz una mueca rara",
"Cuenta un chiste",
"Imita un animal",
"Salta 3 veces",
"Aplaude sin parar",
"Di una palabra al revés"
];
function lanzar() {
const index = Math.floor(Math.random() * frases.length);
document.getElementById("dado").textContent = frases[index];
}