
// MODO OSCURO
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const darkMode = document.body.classList.contains("dark");

    themeBtn.textContent = darkMode ? "☀️" : "🌙";

    localStorage.setItem("darkMode", darkMode);
});

// CONSERVAR EL TEMA ELEGIDO
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
    themeBtn.textContent = "☀️";
}

// COPIAR COMANDOS
const copyButtons = document.querySelectorAll(".copy-btn");

copyButtons.forEach(button => {
    button.addEventListener("click", async () => {

        const code = button.parentElement.querySelector("code");
        const command = code.textContent;

        try {
            await navigator.clipboard.writeText(command);

            button.textContent = "¡Copiado!";

            setTimeout(() => {
                button.textContent = "Copiar";
            }, 1500);

        } catch (error) {
            button.textContent = "Error al copiar";
            console.error(error);
        }
    });
});

// NAVEGACIÓN ACTIVA
const links = document.querySelectorAll(".sidebar a");

links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(item => item.classList.remove("active"));
        link.classList.add("active");
    });
});
