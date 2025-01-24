// Selecciona el botón de cambio de modo
const themeToggle = document.getElementById("theme-toggle");

// Función para cambiar de modo
function toggleTheme() {
    document.body.classList.toggle("light-mode"); // Cambia entre modos
    const isLightMode = document.body.classList.contains("light-mode");
    themeToggle.textContent = isLightMode ? "🌞" : "🌙"; // Cambia el icono
}

// Evento para cambiar de modo al hacer clic en el botón
themeToggle.addEventListener("click", toggleTheme);

// Mostrar el disclaimer al cargar la página
document.addEventListener("DOMContentLoaded", function () {
    const disclaimer = document.getElementById("disclaimer");
    const closeButton = document.getElementById("close-disclaimer");

    // Mostrar el disclaimer
    setTimeout(() => {
        disclaimer.classList.add("show");
    }, 100); // Pequeño retraso para asegurar que el DOM esté listo

    // Ocultar el disclaimer después de 10 segundos
    const hideTimeout = setTimeout(() => {
        disclaimer.classList.remove("show");
    }, 10000); // 10000 milisegundos = 10 segundos

    // Cerrar el disclaimer manualmente
    closeButton.addEventListener("click", () => {
        disclaimer.classList.remove("show");
        clearTimeout(hideTimeout); // Cancelar el timeout si se cierra manualmente
    });
});
