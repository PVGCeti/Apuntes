// Selecciona el botón de cambio de modo
const themeToggle = document.getElementById('theme-toggle');

// Función para cambiar de modo
function toggleTheme() {
    document.body.classList.toggle('light-mode'); // Cambia entre modos
    const isLightMode = document.body.classList.contains('light-mode');
    themeToggle.textContent = isLightMode ? '🌞' : '🌙'; // Cambia el icono
}

// Evento para cambiar de modo al hacer clic en el botón
themeToggle.addEventListener('click', toggleTheme);