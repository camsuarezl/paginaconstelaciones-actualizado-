const botonsi1 = document.getElementById("botonsi1");
const textointro = document.getElementById("texto-intro");
const infoYo = document.getElementById("informacion-yo");
const flecha = document.getElementById("arrow");
const vinilo = document.getElementById("vinilo");
const infoMusica = document.getElementById("informacion-musica");
const lesley = document.getElementById("lesley");
const songText = document.getElementById("songText");
const play = document.getElementById("play");
const party = document.getElementById("party");
const songText2 = document.getElementById("songText2");
const done = document.getElementById("done");

botonsi1.addEventListener("click", () => {
    textointro.style.opacity = "0"
    botonsi1.style.opacity = "0";
    infoYo.style.opacity = "0";
    flecha.style.opacity = "1";
    textointro.style.pointerEvents = "none";
    botonsi1.style.pointerEvents = "none";
    infoYo.style.pointerEvents = "none";
    flecha.style.pointerEvents = "auto"
});

vinilo.addEventListener("click", () => {
flecha.style.opacity = "0";
flecha.style.pointerEvents = "none";
infoMusica.style.opacity = "1";
infoMusica.style.pointerEvents = "auto"
lesley.style.opacity = "1";
lesley.style.pointerEvents = "auto";
songText.style.opacity = "1";
songText.style.pointerEvents = "auto";
play.style.opacity = "1";
play.style.pointerEvents = "auto";
});

play.addEventListener("click", () => {
songText.style.opacity = "0";
songText.style.pointerEvents = "none";
party.currentTime= 0;
   party.play();
   songText2.style.opacity = "1";
   songText2.style.pointerEvents = "auto";
})

party.addEventListener("ended", () => {
play.style.opacity = "0";
play.style.pointerEvents = "none";
done.style.pointerEvents = "auto";
done.style.opacity = "1";
});

done.addEventListener("click", () => {
done.style.pointerEvents = "none";
done.style. opacity = "0";
songText2.style.opacity = "0";
songText2.style.pointerEvents = "none";
lesley.style.pointerEvents = "none";
lesley.style.opacity = "0";
infoMusica.style.opacity = "0";
infoMusica.style.pointerEvents = "none";
})