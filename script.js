console.log("Página de lugares turísticos cargada correctamente 🌍");


document.querySelectorAll(".lugar").forEach(lugar => {
    lugar.addEventListener("click", () => {
        alert("Estás explorando: " + lugar.querySelector("h2").textContent);
    });
});