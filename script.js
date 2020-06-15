var currentCard = document.getElementById(0);
var coul = document.getElementById("couleur");
const colors = ["black", "#e32619", "orange", "#f5d93b", "green", "#578efa", "purple", "pink", "black", "#915807", "grey", "white"]

console.log();

function changeCard(v) {
    currentCard.style.display = "none";
    document.getElementById(v).style.display = "block";
    document.getElementById(v).style.color = colors[v];
    coul.removeAttribute("style");
    coul.style.backgroundColor = colors[v];
    currentCard = document.getElementById(v);
}