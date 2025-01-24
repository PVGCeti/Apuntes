// Función para cambiar entre modo claro y oscuro
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("light-mode");

    // Guardar la preferencia en localStorage
    if (body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }

    // Actualizar el ícono del botón
    updateThemeIcon();
}

// Función para actualizar el ícono del botón de cambio de tema
function updateThemeIcon() {
    const themeToggle = document.getElementById("theme-toggle");
    if (document.body.classList.contains("light-mode")) {
        themeToggle.textContent = "🌙"; // Modo claro activado, mostrar luna
    } else {
        themeToggle.textContent = "☀️"; // Modo oscuro activado, mostrar sol
    }
}

// Cargar la preferencia del tema al iniciar la página
function loadTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
    } else {
        document.body.classList.remove("light-mode");
    }

    // Actualizar el ícono del botón
    updateThemeIcon();
}

// Asignar el evento al botón de cambio de tema
document.getElementById("theme-toggle").addEventListener("click", toggleTheme);

// Cargar el tema al cargar la página
document.addEventListener("DOMContentLoaded", loadTheme);

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
