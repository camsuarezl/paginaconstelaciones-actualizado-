const btnDisG = document.getElementById("btnDisG");
const audioDisG = document.getElementById("gradAudioDis");
const diploma1 = document.querySelector(".diploma1");
const diplomaFake1 = document.getElementById("diplomaFake1");
const diplomaFake2 = document.getElementById("diplomaFake2");
const diplomaReal = document.getElementById("diplomaReal");
const der = document.getElementById ("der");
const der2 = document.getElementById ("der2");
const izq = document.getElementById("izq");
const izq2 = document.getElementById("izq2");
const decision1 = document.querySelector(".decision1")
const decision2 = document.querySelector(".decision2")
const decision3 = document.querySelector(".decision3")
const respuestaCONF = document.getElementById ("respuestaCONF");
const YESS = document.getElementById("YESS");
const trabajoCO = document.getElementById ("trabajoCO");
const NAUR = document.getElementById("NAUR");
const trabajoINC = document.getElementById("trabajoINC");


btnDisG.addEventListener("click", () => {
audioDisG.currentTime= 0;
   audioDisG.play();
})

diploma1.addEventListener("click", () => {
diplomaFake1.style.opacity = "1";
diplomaFake1.style.pointerEvents = "auto";
der.style.opacity = "1";
der.style.pointerEvents = "auto";
decision1.classList.add("active");
decision2.classList.remove("active");
decision3.classList.remove("active");
});

der.addEventListener("click", () => {
diplomaFake1.style.opacity = "0";
diplomaFake1.style.pointerEvents = "none";
diplomaFake2.style.opacity = "1";
diplomaFake2.style.pointerEvents = "auto";
izq.style.opacity = "1";
izq.style.pointerEvents = "auto";
der2.style.opacity = "1";
der2.style.pointerEvents = "auto";
der.style.opacity = "0";
der.style.pointerEvents = "none";
decision1.classList.remove("active");
decision2.classList.add("active");
decision3.classList.remove("active");
})

izq.addEventListener("click", () =>{
diplomaFake1.style.opacity = "1";
diplomaFake1.style.pointerEvents = "auto";
der.style.opacity = "1";
der.style.pointerEvents = "auto";
der2.style.opacity = "0";
der2.style.pointerEvents = "none";
diplomaFake2.style.opacity = "0";
diplomaFake2.style.pointerEvents = "none";
izq.style.opacity = "0";
izq.style.pointerEvents = "none";
decision1.classList.add("active");
decision2.classList.remove("active");
decision3.classList.remove("active");
})

der2.addEventListener("click", () => {
diplomaFake1.style.opacity = "0";
diplomaFake1.style.pointerEvents = "none";
diplomaFake2.style.opacity = "0";
diplomaFake2.style.pointerEvents = "none";
diplomaReal.style.opacity = "1";
diplomaReal.style.pointerEvents = "auto";
der2.style.opacity = "0";
der2.style.pointerEvents= "none";
izq2.style.opacity = "1";
izq2.style.pointerEvents = "auto";
izq.style.pointerEvents = "none";
izq.style.opacity = "0";
decision1.classList.remove("active");
decision2.classList.remove("active");
decision3.classList.add("active");
})

izq2.addEventListener ("click", () => {
izq2.style.opacity = "0";
izq2.style.pointerEvents = "none";
diplomaFake1.style.opacity = "0";
diplomaFake1.style.pointerEvents = "none";
diplomaFake2.style.opacity = "1";
diplomaFake2.style.pointerEvents = "auto";
diplomaReal.style.opacity = "0";
diplomaReal.style.pointerEvents = "none";
der2.style.opacity = "1";
der2.style.pointerEvents = "auto";
izq.style.opacity = "1";
izq.style.pointerEvents = "auto";
decision1.classList.remove("active");
decision2.classList.add("active");
decision3.classList.remove("active");
})

decision1.addEventListener("click", () => {
respuestaCONF.style.opacity = "1";
respuestaCONF.style.pointerEvents = "auto";
diplomaFake1.style.opacity = "0";
diplomaFake1.style.pointerEvents = "none";
decision1.classList.remove("active");
der.style.opacity = "0";
der.style.pointerEvents = "none";
NAUR.style.opacity = "1";
NAUR.style.pointerEvents = "auto";
trabajoINC.style.opacity = "1";
trabajoINC.style.pointerEvents = "auto";
diploma1.style.opacity = "0";
diploma1.style.pointerEvents = "none";
})

decision2.addEventListener("click", () => {
respuestaCONF.style.opacity = "1";
respuestaCONF.style.pointerEvents = "auto";
decision2.classList.remove("active");
diplomaFake2.style.opacity = "0";
diplomaFake2.style.pointerEvents = "none";
izq.style.opacity = "0";
izq.style.pointerEvents = "none";
der2.style.opacity = "0";
der2.style.pointerEvents = "none";
NAUR.style.opacity = "1";
NAUR.style.pointerEvents = "auto";
trabajoINC.style.opacity = "1";
trabajoINC.style.pointerEvents = "auto";
diploma1.style.opacity = "0";
diploma1.style.pointerEvents = "none";
})

decision3.addEventListener("click", () => {
respuestaCONF.style.opacity = "1";
respuestaCONF.style.pointerEvents = "auto";
YESS.style.opacity = "1";
YESS.style.pointerEvents = "auto";
diplomaReal.style.opacity = "0";
diplomaReal.style.pointerEvents = "auto";
izq2.style.opacity = "0";
izq2.style.pointerEvents = "none";
decision3.classList.remove("active");
trabajoCO.style.opacity = "1";
trabajoCO.style.pointerEvents = "auto";
diploma1.style.opacity = "0";
diploma1.style.pointerEvents = "none";
})