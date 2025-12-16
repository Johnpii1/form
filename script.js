const submits = document.getElementById("Submit");
const modulas = document.getElementById("modula");
const closes = document.getElementById("close");

submits.addEventListener("click", () => {
    modulas.classList.remove("hidden");
});

