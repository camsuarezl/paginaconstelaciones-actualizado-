const playBtn1 = document.getElementById("playBtn");
const audioGrad = document.getElementById("graduacion");
const diploma = document.querySelector(".diploma");
const eldiploma = document.getElementById("eldiploma");

playBtn1.addEventListener("click", () => {
audioGrad.currentTime= 0;
   audioGrad.play();
})

diploma.addEventListener("click", () =>{
eldiploma.style.opacity = "1";
eldiploma.style.pointerEvents = "auto";
})