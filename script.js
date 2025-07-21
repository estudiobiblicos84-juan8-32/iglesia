// === script.js ===
document.addEventListener("DOMContentLoaded", () => {
  // Mostrar u ocultar el submenú de Apocalipsis por capítulos
  const submenuToggle = document.querySelector("#apocalipsis-toggle");
  const submenu = document.querySelector("#submenu-apocalipsis");

  if (submenuToggle && submenu) {
    submenuToggle.addEventListener("click", () => {
      submenu.classList.toggle("visible");
    });
  }

  // Desplazamiento suave para anclas internas
  const internalLinks = document.querySelectorAll("a[href^='#']");
  internalLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

// Función para mostrar un estudio específicounction mostrarEstudio(id) {
  const estudios = document.querySelectorAll('.contenido-estudio');
  estudios.forEach(e => e.classList.add('oculto'));

  const seleccionado = document.getElementById(id);
  if (seleccionado) {
    seleccionado.classList.remove('oculto');
    seleccionado.scrollIntoView({ behavior: "smooth" });
  }

