let estadoEstrella1 = false;
let estrella1 = document.getElementById("estrella1");

estrella1.addEventListener("click", () => {
   localStorage.setItem("VariableEstrella1", "true");
});

