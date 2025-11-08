// ===================== LIGHTBOX GALERÍA =====================
document.addEventListener("DOMContentLoaded", () => {
  const galeriaItems = document.querySelectorAll(".galeria-item");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.querySelector(".lightbox-img");
  const cerrar = document.querySelector(".cerrar");

  // Abrir lightbox al hacer clic en cualquier imagen de la galería
  galeriaItems.forEach(item => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      if (img) {
        lightboxImg.src = img.src;
        lightbox.style.display = "flex";
        lightbox.classList.add("activo");
      }
    });
  });

  // Cerrar al hacer clic en el botón de cierre
  cerrar.addEventListener("click", () => {
    lightbox.classList.remove("activo");
    setTimeout(() => (lightbox.style.display = "none"), 300);
  });

  // Cerrar al hacer clic fuera de la imagen
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("activo");
      setTimeout(() => (lightbox.style.display = "none"), 300);
    }
  });
});
