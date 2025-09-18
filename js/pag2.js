const parejitas = document.getElementById("parejita")
const HistoriaDis1 = document.getElementById("dis-historia1")
const infoTexto = document.getElementById("informacion1");
const botonSi = document.getElementById("siBtn");
const botonNo = document.getElementById("noBtn");
const botonreplay1 = document.getElementById("replay1");
const texto1 = document.querySelector(".texto1"); 
const story1 = document.getElementById("good-story1");
const story2 = document.getElementById("bad-story1");
const texto2 = document.querySelector(".texto2");
const viejita = document.getElementById("Betticita");
const Gracias1 = document.getElementById("Gracias");
const continuar = document.getElementById("seguir");
const parejasnew = document.getElementById("parejasOG");
let reproducido = false;

parejitas.addEventListener("click", () => {
    parejitas.style.opacity = "1";
    if (!reproducido) {  
        HistoriaDis1.currentTime = 0;
        HistoriaDis1.play();
        reproducido = true;
    }
});

HistoriaDis1.addEventListener("ended", () => {
    infoTexto.style.opacity = "1";
    botonSi.style.opacity = "1";
    botonNo.style.opacity = "1";
    botonreplay1.style.opacity = "1";
      texto2.style.display="none";
      viejita.style.display="none";

});

botonreplay1.addEventListener("click",()=>{
    HistoriaDis1.currentTime= 0;
    HistoriaDis1.play();
})

function actualizarTexto(respuesta) {
  if (respuesta === "si") {
    texto1.textContent = "Hmm no lo recordaba así, pero debes tener razon...";
    botonSi.style.display = "none";
  botonNo.style.display = "none";
  botonreplay1.style.display ="none";
  story1.style.display= "none";
  story2.style.display="none";
    texto2.style.display="none";
    viejita.style.display="none";


  } else {
    texto1.textContent = "Tienes la razon, ¿entonces como es la historia?";
    botonSi.style.display = "none";
  botonNo.style.display = "none";
  botonreplay1.style.display ="none";
  story1.style.display= "block";
  story2.style.display= "block";
  texto2.style.display="none";
    viejita.style.display="none";


  }
}

story1.addEventListener("click",() => {
    texto1.style.display="none";
    botonSi.style.display = "none";
  botonNo.style.display = "none";
  botonreplay1.style.display ="none";
  story1.style.display= "none";
  story2.style.display= "none";
  texto2.style.display="block";
viejita.style.display="block";
Gracias1.currentTime= 0;
   Gracias1.play();
continuar.style.display="block";
parejitas.style.opacity= "0";

})
  
continuar.addEventListener("click",() => {
texto1.style.display="none";
botonSi.style.display = "none";
  botonNo.style.display = "none";
  botonreplay1.style.display ="none";
  story1.style.display= "none";
  story2.style.display= "none";
  texto2.style.display="none";
viejita.style.display="none";
continuar.style.display="none";  
 infoTexto.style.display = "none";
 parejasnew.style.opacity = "1";


})

botonSi.addEventListener("click", () => actualizarTexto("si"));
botonNo.addEventListener("click", () => actualizarTexto("no"));