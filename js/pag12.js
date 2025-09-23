const sigue = document.getElementById("Sigue");
const textoDis = document.getElementById("yoDis");
const informacionyo2 = document.getElementById("informacion-yo2");
const textoDis2 = document.getElementById("yoDis2");
const Sigues2 = document.getElementById("Sigues2");
const viniloss = document.querySelector(".viniloss")
const informacionDis = document.getElementById("informacionDis")
const talk = document.getElementById("talk");
const beatles = document.getElementById("beatles");
const correcto = document.getElementById("correcto");
const ronettes = document.getElementById("ronettes");
const Cual = document.getElementById("Cual");
const Inst = document.getElementById("Inst");
const seleccion1 = document.querySelector (".seleccion1");
const seleccion2 = document.querySelector (".seleccion2");
const seleccion3 = document.querySelector (".seleccion3");
const seleccion4 = document.querySelector (".seleccion4");
const wrong = document.getElementById("wrong");
const mal = document.getElementById("mal");
const bien = document.getElementById("bien");
const feliz = document.getElementById("feliz");
const cry = document.getElementById("cry");

sigue.addEventListener("click", () => {
    textoDis.style.opacity = "0";
    textoDis.style.pointerEvents = "none";
    textoDis2.style.opacity = "1";
    textoDis2.style.pointerEvents = "auto";
    sigue.style.opacity = "0";
    sigue.style.pointerEvents = "0";
    Sigues2.style.opacity = "1";
    Sigues2.style.pointerEvents="auto";
});

Sigues2.addEventListener("click", () => {
    informacionyo2.style.opacity = "0";
    informacionyo2.style.pointerEvents = "none";
     textoDis2.style.opacity = "0";
    textoDis2.style.pointerEvents = "none";
    sigue.style.opacity = "0";
    sigue.style.pointerEvents = "0";
    Sigues2.style.opacity = "0";
    Sigues2.style.pointerEvents="none";
})

viniloss.addEventListener("click", () => {
informacionDis.style.opacity = "1";
informacionDis.style.pointerEvents = "auto"
talk.style.opacity = "1";
talk.style.pointerEvents = "auto";
beatles.style.opacity = "1";
beatles.style.pointerEvents = "auto";
correcto.style.opacity = "1";
correcto.style.pointerEvents = "auto";
ronettes.style.opacity = "1";
ronettes.style.pointerEvents = "auto";
Cual.style.opacity = "1";
Cual.style.pointerEvents = "auto";
Inst.style.opacity = "1";
Inst.style.pointerEvents = "auto";
})

seleccion1.addEventListener("click",()=>{
talk.style.opacity = "0";
talk.style.pointerEvents = "none";
beatles.style.opacity = "0";
beatles.style.pointerEvents = "none";
correcto.style.opacity = "0";
correcto.style.pointerEvents = "none";
ronettes.style.opacity = "0";
ronettes.style.pointerEvents = "none";
Cual.style.opacity = "0";
Cual.style.pointerEvents = "none";
Inst.style.opacity = "0";
Inst.style.pointerEvents = "none";
wrong.style.opacity = "1";
wrong.style.pointerEvents = "auto";
seleccion2.style.opacity = "0";
seleccion3.style.opacity = "0";
seleccion4.style.opacity = "0";
seleccion1.style.opacity = "0";
mal.style.opacity = "1";
})

seleccion2.addEventListener("click",()=>{
talk.style.opacity = "0";
talk.style.pointerEvents = "none";
beatles.style.opacity = "0";
beatles.style.pointerEvents = "none";
correcto.style.opacity = "0";
correcto.style.pointerEvents = "none";
ronettes.style.opacity = "0";
ronettes.style.pointerEvents = "none";
Cual.style.opacity = "0";
Cual.style.pointerEvents = "none";
Inst.style.opacity = "0";
Inst.style.pointerEvents = "none";
wrong.style.opacity = "1";
wrong.style.pointerEvents = "auto";
seleccion2.style.opacity = "0";
seleccion3.style.opacity = "0";
seleccion4.style.opacity = "0";
seleccion1.style.opacity = "0";
mal.style.opacity = "1";
})

seleccion3.addEventListener("click",()=>{
talk.style.opacity = "0";
talk.style.pointerEvents = "none";
beatles.style.opacity = "0";
beatles.style.pointerEvents = "none";
correcto.style.opacity = "0";
correcto.style.pointerEvents = "none";
ronettes.style.opacity = "0";
ronettes.style.pointerEvents = "none";
Cual.style.opacity = "0";
Cual.style.pointerEvents = "none";
Inst.style.opacity = "0";
Inst.style.pointerEvents = "none";
wrong.style.opacity = "1";
wrong.style.pointerEvents = "auto";
seleccion2.style.opacity = "0";
seleccion3.style.opacity = "0";
seleccion4.style.opacity = "0";
seleccion1.style.opacity = "0";
mal.style.opacity = "1";
})

seleccion4.addEventListener("click",()=>{
talk.style.opacity = "0";
talk.style.pointerEvents = "none";
beatles.style.opacity = "0";
beatles.style.pointerEvents = "none";
correcto.style.opacity = "0";
correcto.style.pointerEvents = "none";
ronettes.style.opacity = "0";
ronettes.style.pointerEvents = "none";
Cual.style.opacity = "0";
Cual.style.pointerEvents = "none";
Inst.style.opacity = "0";
Inst.style.pointerEvents = "none";
wrong.style.opacity = "0";
wrong.style.pointerEvents = "none";
seleccion2.style.opacity = "0";
seleccion3.style.opacity = "0";
seleccion4.style.opacity = "0";
seleccion1.style.opacity = "0";
mal.style.opacity = "0";
bien.style.opacity = "1";
bien.style.pointerEvents = "auto";
feliz.style.opacity = "1";
cry.currentTime= 0;
   cry.play();
})