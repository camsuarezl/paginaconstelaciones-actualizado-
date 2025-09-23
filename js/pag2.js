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
const atras = document.getElementById("back");
const continuar2 = document.getElementById("seguir2");
const texto3 = document.getElementById("texto3");
const texto4 = document.getElementById("texto4");
const viejita2 = document.getElementById("betty2");
const texto5 = document.getElementById("texto5");
const Confundida = document.getElementById("Confundida");
const seguir3 = document.getElementById("seguir3");
const perritz = document.getElementById("perritz");
const Milo = document.getElementById("milo");
const botonreplay2 = document.getElementById("replay2");
const botonSi2 = document.getElementById("siBtn2");
const botonNo2 = document.getElementById("noBtn2");
const story3 = document.getElementById("good-story2");
const story4 = document.getElementById("bad-story2");
const back2 = document.getElementById("back2");
const seguir4 = document.getElementById("seguir4");
const perritoz = document.getElementById("perritoz");
const seguir5 = document.getElementById("seguir5");
const betoDis = document.getElementById("beto-dis");
const Revoltoso = document.getElementById("Revoltoso");
const botonSi3 = document.getElementById("siBtn3");
const botonNo3 = document.getElementById("noBtn3");
const botonreplay3 = document.getElementById("replay3");
const Correcto = document.getElementById("Correcto");
const seguir6 = document.getElementById("seguir6");
const back3 = document.getElementById("back3");
const continuar3 = document.getElementById("continuar3");
const texto6 = document.getElementById("texto6");
const story5 = document.getElementById("good-story3");
const story6 = document.getElementById("bad-story3");
const seguir7 = document.getElementById("seguir7");
const betonew = document.getElementById("betonew");
const fam = document.getElementById("family");
const famaudio = document.getElementById("famaudio");
const botonSi4 = document.getElementById ("siBtn4")
const botonNo4 = document.getElementById ("noBtn4")
const botonreplay4 = document.getElementById("replay4");
const back4 = document.getElementById("back4");
const continuar4 = document.getElementById("continuar4");
const seguir8 = document.getElementById("seguir8");
const story7 = document.getElementById("good-story4");
const story8 = document.getElementById("bad-story4");
const seguir9 = document.getElementById("seguir9");
const famOG = document.getElementById ("famOG");
const uno = document.getElementById("uno");
const dos = document.getElementById("dos");
const tres = document.getElementById("tres");
const cuatro = document.getElementById("cuatro");
let reproducidoParejitas = false;
let reproducidoPerritz = false;
let reproducidoBeto = false;
let reproducidoFam = false;

uno.addEventListener("click", () => {
    uno.style.display = "none"
    parejitas.style.opacity = "1";
    if (!reproducidoParejitas) {  
        HistoriaDis1.currentTime = 0;
        HistoriaDis1.play();
        reproducidoParejitas = true;
    }
});

HistoriaDis1.addEventListener("ended", () => {
    infoTexto.style.opacity = "1";
    infoTexto.style.pointerEvents = "auto";
    texto1.style.display="block";
    botonSi.style.opacity = "1";
    botonSi.style.pointerEvents = "auto";
    botonNo.style.opacity = "1";
    botonNo.style.pointerEvents = "auto";
    botonreplay1.style.opacity = "1";
    botonreplay1.style.pointerEvents = "auto";
      texto2.style.display="none";
      viejita.style.display="none";
      atras.style.display="none";
      continuar2.style.display = "none";
      texto3.style.display="none";
      texto4.style.display="none";
      texto5.style.display="none";
      viejita2.style.display="none";
        seguir3.style.display="none";

});

botonreplay1.addEventListener("click",()=>{
    HistoriaDis1.currentTime= 0;
    HistoriaDis1.play();
})

botonSi.addEventListener("click", () => {;
    texto1.style.display= "none";
    botonSi.style.opacity = "0";
    botonSi.style.pointerEvents = "none";
  botonNo.style.opacity = "0";
botonNo.style.pointerEvents = "none";
  botonreplay1.style.opacity = "0";
    botonreplay1.style.pointerEvents = "none";
  story1.style.display= "none";
  story2.style.display="none";
    texto2.style.display="none";
    viejita.style.display="none";
    atras.style.display="block";
    continuar2.style.display = "block";
    texto3.style.display="none";
    texto4.style.display="block";
    texto5.style.display="none";
    botonreplay2.style.opacity="0";
    botonreplay2.style.pointerEvents = "none";


  })
  botonNo.addEventListener("click", () => {;
   texto1.style.display= "none";
    botonSi.style.opacity = "0";
    botonSi.style.pointerEvents = "none";
  botonNo.style.opacity = "0";
botonNo.style.pointerEvents = "none";
  botonreplay1.style.opacity = "0";
    botonreplay1.style.pointerEvents = "none";
  story1.style.display= "block";
  story2.style.display= "block";
  texto2.style.display="none";
    viejita.style.display="none";
    atras.style.display="none";
    continuar2.style.display = "none";
    texto3.style.display="block";
    texto4.style.display="none";
  })


story1.addEventListener("click",() => {
    texto1.style.display="none";
   botonSi.style.opacity = "0";
    botonSi.style.pointerEvents = "none";
  botonNo.style.opacity = "0";
botonNo.style.pointerEvents = "none";
  botonreplay1.style.opacity = "0";
    botonreplay1.style.pointerEvents = "none";
  story1.style.display= "none";
  story2.style.display= "none";
  texto2.style.display="block";
viejita.style.display="block";
Gracias1.currentTime= 0;
   Gracias1.play();
continuar.style.display="block";
parejitas.style.opacity= "0";
atras.style.display="none";
continuar2.style.display = "none";
texto3.style.display="none";
texto4.style.display="none";

})
continuar.addEventListener("click",() => {
texto1.style.display="none";
botonSi.style.opacity = "0";
    botonSi.style.pointerEvents = "none";
  botonNo.style.opacity = "0";
botonNo.style.pointerEvents = "none";
botonreplay1.style.opacity = "0";
botonreplay1.style.pointerEvents = "none";
story1.style.display= "none";
story2.style.display= "none";
texto2.style.display="none";
viejita.style.display="none";
continuar.style.display="none";  
infoTexto.style.opacity = "0";
parejasnew.style.opacity = "1";
atras.style.display="none";
continuar2.style.display = "none";
parejitas.style.display= "none";
texto3.style.display="none";
texto4.style.display="none";

})

atras.addEventListener("click",() => {
infoTexto.style.opacity = "1";
infoTexto.style.pointerEvents = "auto";
texto1.style.display="block";
    botonSi.style.opacity = "1";
    botonSi.style.pointerEvents = "auto";
    botonNo.style.opacity = "1";
    botonNo.style.pointerEvents = "auto";
    botonreplay1.style.opacity = "1";
    botonreplay1.style.pointerEvents = "auto";
      texto2.style.display="none";
      viejita.style.display="none";
      atras.style.display="none";
      continuar2.style.display = "none";
    texto3.style.display="none";
    texto4.style.display="none";
});


continuar2.addEventListener("click",() => {
    texto1.style.display="none";
   botonSi.style.opacity = "0";
    botonSi.style.pointerEvents = "none";
  botonNo.style.opacity = "0";
botonNo.style.pointerEvents = "none";
  botonreplay1.style.opacity = "0";
    botonreplay1.style.pointerEvents = "none";
  story1.style.display= "none";
  story2.style.display= "none";
  texto2.style.display="none";
viejita.style.display="none";
continuar.style.display="none";
parejitas.style.opacity= "1";
atras.style.display="none";
continuar2.style.display = "none";
texto3.style.display="none";
texto4.style.display="none";
texto5.style.display="block";
viejita2.style.display="block";
back2.style.display="none";
Confundida.currentTime= 0;
   Confundida.play();
   seguir3.style.display="block";
});

seguir3.addEventListener("click",() => {
texto1.style.display="none";
botonSi.style.opacity = "0";
    botonSi.style.pointerEvents = "none";
  botonNo.style.opacity = "0";
botonNo.style.pointerEvents = "none";
botonreplay1.style.opacity = "0";
botonreplay1.style.pointerEvents = "none";
story1.style.display= "none";
story2.style.display= "none";
texto2.style.display="none";
viejita.style.display="none";
continuar.style.display="none";  
infoTexto.style.opacity = "0";
atras.style.display="none";
continuar2.style.display = "none";
texto3.style.display="none";
texto4.style.display="none";
seguir3.style.display="none";
texto5.style.display="none";
viejita2.style.display="none";
})

story2.addEventListener("click",() => {
texto1.style.display="none";
   botonSi.style.opacity = "0";
    botonSi.style.pointerEvents = "none";
  botonNo.style.opacity = "0";
botonNo.style.pointerEvents = "none";
  botonreplay1.style.opacity = "0";
    botonreplay1.style.pointerEvents = "none";
  story1.style.display= "none";
  story2.style.display= "none";
  texto2.style.display="none";
viejita.style.display="none";
continuar.style.display="none";
parejitas.style.opacity= "1";
atras.style.display="none";
continuar2.style.display = "none";
texto3.style.display="none";
texto4.style.display="none";
texto5.style.display="block";
viejita2.style.display="block";
Confundida.currentTime= 0;
   Confundida.play();
   seguir3.style.display="block";
})

dos.addEventListener("click", () => {
    perritz.style.opacity = "1";
    perritz.style.pointerEvents = "auto";
    dos.style.display = "none";
if (!reproducidoPerritz) {  
        Milo.currentTime = 0;
        Milo.play();
        reproducidoPerritz = true;
    }
})

Milo.addEventListener("ended", () => {
infoTexto.style.opacity = "1";
texto1.style.display="block";
    botonSi2.style.opacity = "1";
    botonSi2.style.pointerEvents = "auto";
    botonNo2.style.opacity = "1";
    botonNo2.style.pointerEvents = "auto";
    texto2.style.display="none";
    botonreplay2.style.opacity="1";
    botonreplay2.style.pointerEvents = "auto";

});

botonreplay2.addEventListener("click",()=>{
    Milo.currentTime= 0;
    Milo.play();
});

botonSi2.addEventListener("click", () => {;
    texto1.style.display= "none";
    botonSi2.style.opacity = "0";
    botonSi2.style.pointerEvents = "none";
  botonNo2.style.opacity = "0";
botonNo2.style.pointerEvents = "none";
  botonreplay2.style.opacity = "0";
    botonreplay2.style.pointerEvents = "none";
  story1.style.display= "none";
    story2.style.display="none";
        texto2.style.display="none";
    texto3.style.display="none";
    texto4.style.display= "block";
    continuar2.style.display = "block";
atras.style.display="none";
back2.style.display="block";
});

botonNo2.addEventListener("click", () => {;
    texto1.style.display= "none";
    botonSi2.style.opacity = "0";
    botonSi2.style.pointerEvents = "none";
  botonNo2.style.opacity = "0";
botonNo2.style.pointerEvents = "none";
  botonreplay2.style.opacity = "0";
    botonreplay2.style.pointerEvents = "none";
    story1.style.display= "none";
  story2.style.display= "none";
    texto3.style.display="block";
    texto4.style.display="none";
    continuar2.style.display = "none";
atras.style.display="none";
story3.style.display="block";
story4.style.display="block";
})

back2.addEventListener("click",() => {
infoTexto.style.opacity = "1";
infoTexto.style.pointerEvents = "auto";
texto1.style.display="block";
    botonSi2.style.opacity = "1";
    botonSi2.style.pointerEvents = "auto";
    botonNo2.style.opacity = "1";
    botonNo2.style.pointerEvents = "auto";
    botonreplay2.style.opacity = "1";
    botonreplay2.style.pointerEvents = "auto";
      texto2.style.display="none";
      viejita.style.display="none";
      atras.style.display="none";
      continuar2.style.display = "none";
    texto3.style.display="none";
    texto4.style.display="none";
    back2.style.display="none";
});

story3.addEventListener("click",() => {
 texto1.style.display="none";
   botonSi2.style.opacity = "0";
    botonSi2.style.pointerEvents = "none";
  botonNo2.style.opacity = "0";
botonNo2.style.pointerEvents = "none";
  botonreplay2.style.opacity = "0";
    botonreplay2.style.pointerEvents = "none";
  story1.style.display= "none";
  story2.style.display= "none";
  texto2.style.display="block";
viejita.style.display="block";
Gracias1.currentTime= 0;
   Gracias1.play();
continuar.style.display="block";
perritz.style.opacity= "0";
atras.style.display="none";
continuar2.style.display = "none";
texto3.style.display="none";
texto4.style.display="none";
story3.style.display="none";
story4.style.display="none";
seguir4.style.display="block";
continuar.style.display="none";
});

seguir4.addEventListener("click",() => {
infoTexto.style.opacity = "0";
infoTexto.style.pointerEvents = "none";
texto1.style.display="none";
texto2.style.display="none";
viejita.style.display="none";
perritoz.style.opacity = "1";
perritoz.style.pointerEvents = "auto";
perritz.style.opacity= "0";
perritz.style.pointerEvents = "none";
atras.style.display="none";
continuar2.style.display = "none";
texto3.style.display="none";
texto4.style.display="none";
story3.style.display="none";
story4.style.display="none";
seguir4.style.display="none";
});

story4.addEventListener("click",() => {
texto1.style.display="none";
texto2.style.display="none";
perritz.style.opacity="1";
perritz.style.pointerEvents = "auto";
viejita.style.display="none";
texto5.style.display="block";
viejita2.style.display="block";
Confundida.currentTime= 0;
   Confundida.play();
   seguir5.style.display="block";
   story3.style.display="none";
   story4.style.display="none";
   texto3.style.display="none";
    texto4.style.display="none";
});

seguir5.addEventListener("click",() => {
   infoTexto.style.opacity = "0";
infoTexto.style.pointerEvents = "none";
texto1.style.display="none";
texto2.style.display="none";
perritz.style.opacity="1";
perritz.style.pointerEvents = "auto";
viejita.style.display="none";
texto5.style.display="block";
viejita2.style.display="block";
seguir5.style.display="none";
story3.style.display="none";
story4.style.display="none";
});


tres.addEventListener("click", () => {
    tres.style.display = "none";
    betoDis.style.opacity = "1";
    if (!reproducidoBeto) {  
        Revoltoso.currentTime = 0;
        Revoltoso.play();
        reproducidoBeto = true;
    }
});

Revoltoso.addEventListener("ended", () => {
infoTexto.style.opacity = "1";
texto1.style.display="block";
    botonSi3.style.opacity = "1";
    botonSi3.style.pointerEvents = "auto";
    botonNo3.style.opacity = "1";
    botonNo3.style.pointerEvents = "auto";
    texto2.style.display="none";
    botonreplay3.style.opacity="1";
    botonreplay3.style.pointerEvents = "auto";

});

botonreplay3.addEventListener("click",()=>{
    Revoltoso.currentTime= 0;
    Revoltoso.play();
});

botonSi3.addEventListener("click", () => {;
    texto1.style.display= "none";
    botonSi3.style.opacity = "0";
    botonSi3.style.pointerEvents = "none";
  botonNo3.style.opacity = "0";
botonNo3.style.pointerEvents = "none";
  botonreplay3.style.opacity = "0";
    botonreplay3.style.pointerEvents = "none";
    back3.style.display="block";
atras.style.display="none";
seguir6.style.display="none";
continuar3.style.display="block";
texto6.style.display="block";
});

continuar3.addEventListener("click",() => {
    texto6.style.display="none";
    continuar3.style.display="none";
    atras.style.display="none";
    back3.style.display="none";
    infoTexto.style.opacity = "1";
    infoTexto.style.pointerEvents = "auto";
    Correcto.currentTime=0;
    Correcto.play();
    viejita.style.display="block";
    texto2.style.display="block";
    seguir6.style.display="block";
});

back3.addEventListener("click",() => {
    infoTexto.style.opacity = "1";
infoTexto.style.pointerEvents = "auto";
texto1.style.display="block";
    botonSi3.style.opacity = "1";
    botonSi3.style.pointerEvents = "auto";
    botonNo3.style.opacity = "1";
    botonNo3.style.pointerEvents = "auto";
    botonreplay3.style.opacity = "1";
    botonreplay3.style.pointerEvents = "auto";
back3.style.display="none";
    continuar3.style.display="none";
      texto2.style.display="none";
      viejita.style.display="none";
      atras.style.display="none";
      seguir6.style.display="none";
      texto6.style.display="none";
});

seguir6.addEventListener("click",() => {
    infoTexto.style.opacity = "0";
    infoTexto.style.pointerEvents = "none";
    texto2.style.display="none";
    texto2.style.display="none";
    viejita.style.display="none";
    seguir6.style.display="none";
});

botonNo3.addEventListener("click", () => {
    texto1.style.display= "none";
    botonSi3.style.opacity = "0";
    botonSi3.style.pointerEvents = "none";
  botonNo3.style.opacity = "0";
botonNo3.style.pointerEvents = "none";
  botonreplay3.style.opacity = "0";
    botonreplay3.style.pointerEvents = "none";
    texto4.style.display= "block";
    story5.style.display = "block"
    story6.style.display = "block"

});

story6.addEventListener("click", () => {
infoTexto.style.opacity = "1";
infoTexto.style.pointerEvents = "auto";
viejita2.style.display = "block"
    botonSi3.style.opacity = "0";
    botonSi3.style.pointerEvents = "none";
  botonNo3.style.opacity = "0";
botonNo3.style.pointerEvents = "none";
  botonreplay3.style.opacity = "0";
    botonreplay3.style.pointerEvents = "none";
    texto4.style.display= "none";
    story5.style.display = "none";
    story6.style.display = "none";
    texto5.style.display = "block";
    Confundida.currentTime = 0;
    Confundida.play ();
    seguir7.style.display = "block";
    betoDis.style.opacity = "0";
    betoDis.style.pointerEvents = "none";
});

seguir7.addEventListener("click", () => {
infoTexto.style.opacity = "0";
infoTexto.style.pointerEvents = "none";
viejita2.style.display = "none"
    botonSi3.style.opacity = "0";
    botonSi3.style.pointerEvents = "none";
  botonNo3.style.opacity = "0";
botonNo3.style.pointerEvents = "none";
  botonreplay3.style.opacity = "0";
    botonreplay3.style.pointerEvents = "none";
    texto4.style.display= "none";
    story5.style.display = "none";
    story6.style.display = "none";
    texto5.style.display = "none";
    seguir7.style.display = "none";
    betonew.style.opacity = "1";
    betonew.style.pointerEvents = "auto";
});

story5.addEventListener("click", () => {
texto1.style.display= "block";
    botonSi3.style.opacity = "1";
    botonSi3.style.pointerEvents = "auto";
  botonNo3.style.opacity = "1";
botonNo3.style.pointerEvents = "auto";
  botonreplay3.style.opacity = "1";
    botonreplay3.style.pointerEvents = "auto";
    texto4.style.display= "none";
    story5.style.display = "none"
    story6.style.display = "none"
});

cuatro.addEventListener("click", () => {
    cuatro.style.display = "none";
    fam.style.opacity = "1";
    if (!reproducidoFam) {  
        famaudio.currentTime = 0;
        famaudio.play();
        reproducidoFam = true;
    }
});

famaudio.addEventListener("ended", () => {
infoTexto.style.opacity = "1";
texto1.style.display="block";
    botonSi4.style.opacity = "1";
    botonSi4.style.pointerEvents = "auto";
    botonNo4.style.opacity = "1";
    botonNo4.style.pointerEvents = "auto";
    texto2.style.display="none";
    botonreplay4.style.opacity="1";
    botonreplay4.style.pointerEvents = "auto";

});

botonreplay4.addEventListener("click",()=>{
    famaudio.currentTime= 0;
    famaudio.play();
});

botonSi4.addEventListener("click", () => {
texto1.style.display = "none";
botonSi4.style.opacity = "0";
    botonSi4.style.pointerEvents = "none";
    botonNo4.style.opacity = "0";
    botonNo4.style.pointerEvents = "none";
    texto2.style.display="none";
    botonreplay4.style.opacity="0";
    botonreplay4.style.pointerEvents = "none";
    texto4.style.display = "block";
    back4.style.display = "block";
    continuar4.style.display = "block";
})

back4.addEventListener("click", () => {
texto1.style.display = "block";
botonSi4.style.opacity = "1";
botonSi4.style.pointerEvents = "auto";
    botonNo4.style.opacity = "1";
    botonNo4.style.pointerEvents = "auto";
    botonreplay4.style.opacity="1";
    botonreplay4.style.pointerEvents = "auto";
    back4.style.display = "none";
    texto4.style.display = "none"; 
    continuar4.style.display = "none"; 
});

continuar4.addEventListener("click", () => {
texto6.style.display="none";
    continuar4.style.display="none";
    atras.style.display="none";
    back4.style.display="none";
    infoTexto.style.opacity = "1";
    infoTexto.style.pointerEvents = "auto";
    viejita2.style.display="block";
    texto2.style.display="none";
    texto5.style.display = "block";
    Confundida.currentTime= 0;
   Confundida.play();
   fam.style.opacity= "1";
   fam.style.pointerEvents = "auto";
   texto4.style.display = "none";
   texto4.style.display = "none";
   seguir8.style.display = "block";
});

seguir8.addEventListener("click", () => {
infoTexto.style.opacity = "0";
infoTexto.style.pointerEvents = "none";
viejita2.style.display = "none";
seguir6.style.display="none";
    texto5.style.display = "none";
    fam.style.opacity= "1";
   fam.style.pointerEvents = "none";
    seguir8.style.display = "none";
});

botonNo4.addEventListener("click", () => {
texto1.style.display = "none";
botonSi4.style.opacity = "0";
    botonSi4.style.pointerEvents = "none";
    botonNo4.style.opacity = "0";
    botonNo4.style.pointerEvents = "none";
    texto2.style.display="none";
    botonreplay4.style.opacity="0";
    botonreplay4.style.pointerEvents = "none";
    texto3.style.display = "block";
    story7.style.display = "block";
    story8.style.display= "block";
});


story7.addEventListener("click", () => {
texto1.style.display = "none";
botonSi4.style.opacity = "0";
    botonSi4.style.pointerEvents = "none";
    botonNo4.style.opacity = "0";
    botonNo4.style.pointerEvents = "none";
    texto2.style.display="none";
    botonreplay4.style.opacity="0";
    botonreplay4.style.pointerEvents = "none";
    texto3.style.display = "none";
    story7.style.display = "none";
    story8.style.display= "none";
    texto2.style.display = "block";
    viejita.style.display = "block";
    Gracias1.currentTime= 0;
   Gracias1.play();
   seguir9.style.display = "block"
   fam.style.opacity = "0";
   fam.style.pointerEvents = "none";
});

seguir9.addEventListener("click", () => {
infoTexto.style.opacity = "0";
infoTexto.style.pointerEvents = "none";
story8.style.display= "none";
    texto2.style.display = "none";
    viejita.style.display = "none";
   seguir9.style.display = "none"
famOG.style.opacity = "1";
fam.style.pointerEvents = "auto";
});

story8.addEventListener("click", () => {
texto6.style.display="none";
    continuar4.style.display="none";
    atras.style.display="none";
    back4.style.display="none";
    infoTexto.style.opacity = "1";
    infoTexto.style.pointerEvents = "auto";
    viejita2.style.display="block";
    texto2.style.display="none";
    seguir6.style.display="block";
    texto5.style.display = "block";
    Confundida.currentTime= 0;
   Confundida.play();
   fam.style.opacity= "1";
   fam.style.pointerEvents = "auto";
   texto4.style.display = "none";
   texto4.style.display = "none";
    texto3.style.display = "none";
    story7.style.display = "none";
    story8.style.display= "none";
});