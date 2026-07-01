const navbar = document.querySelector(".navbar-scroll");

window.addEventListener("scroll", () => {

    if(window.scrollY > 200){

        navbar.classList.add("show");

    }else{

        navbar.classList.remove("show");

    }

});
// Esperamos a que toda la página (imágenes, fuentes, etc.) cargue por completo
window.addEventListener('load', function() {
  // Añadimos la clase "oculto" al preloader
  const preloader = document.getElementById('preloader');
  preloader.classList.add('oculto');
  
  // Opcional: eliminarlo del DOM después de la transición (para liberar memoria)
  setTimeout(() => {
    preloader.style.display = 'none';
  }, 700); // 700ms = duración de la transición CSS
});

// OPCIÓN EXTRA: Si quieres que como MÁXIMO se vaya en 4 segundos 
// (por si algún recurso tarda demasiado)
setTimeout(function() {
  const preloader = document.getElementById('preloader');
  if (!preloader.classList.contains('oculto')) {
    preloader.classList.add('oculto');
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 700);
  }
}, 4000); // 4 segundos de tope